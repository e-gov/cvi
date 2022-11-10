import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  Output,
  QueryList,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { StepComponent } from '../step/step.component';

@Component({
  selector: 'veera-ng-steps',
  templateUrl: './steps.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsComponent
  implements AfterViewInit, AfterContentInit, OnChanges
{
  @Input() title!: string;

  @Input() currentStepIndex: number | null = null;

  /** Index of a step, used to initiate step change from a parent component */
  @Input() stepIndex: number | null = null;

  @Output() stepChange = new EventEmitter<number>();

  stepTitles!: string[];
  @Input() currentProgressCSSVar = 0;
  @Input() anyStepSelected = false;
  @ContentChildren(StepComponent) stepChildren!: QueryList<StepComponent>;

  constructor(private renderer: Renderer2, private cdRef: ChangeDetectorRef) {}

  @HostBinding('class') get getHostClasses(): string {
    return (
      'veera-steps' + (this.anyStepSelected ? ' is-any-step-selected' : '')
    );
  }

  ngAfterContentInit(): void {
    this.stepTitles = this.stepChildren.map(
      (step: StepComponent) => step.title
    );
    if (this.currentStepIndex !== null) {
      this.anyStepSelected = true;
      this.setProgress(this.currentStepIndex);
    }
    this.setStepsNumbers();
  }

  ngAfterViewInit(): void {
    this.stepChildren.changes.subscribe((steps) => {
      this.stepTitles = steps.map((step: StepComponent) => step.title);
      this.hideStepsContent();
      this.cdRef.markForCheck();
      this.setStepsNumbers();
    });
    this.hideStepsContent();
  }

  ngOnChanges(changes: SimpleChanges) {
    const stepIndexChange = changes['stepIndex'];
    if (stepIndexChange && this.stepChildren) {
      this.stepSelected(stepIndexChange.currentValue);
    }
  }

  stepSelected(stepIndex: number): void {
    if (this.currentStepIndex == stepIndex) {
      return;
    }
    this.anyStepSelected = true;
    this.currentStepIndex = stepIndex;
    this.hideStepsContent();
    this.setProgress(stepIndex);
    this.stepChange.emit(this.currentStepIndex);
  }

  hideStepsContent(): void {
    this.stepChildren.map((step: StepComponent, stepIndex: number) => {
      const domNode: HTMLElement = step.ref.nativeElement;

      if (stepIndex === this.currentStepIndex) {
        this.renderer.addClass(domNode, 'is-current');
      } else {
        this.renderer.removeClass(domNode, 'is-current');
      }
    });
  }

  setProgress(stepIndex: number) {
    this.currentProgressCSSVar = Math.round(
      ((stepIndex + 1) / this.stepTitles.length) * 100
    );
  }

  setStepsNumbers(): void {
    this.stepChildren?.forEach((step, index) => {
      step.stepNumber = index + 1;
      step.updateView();
    });
  }
}
