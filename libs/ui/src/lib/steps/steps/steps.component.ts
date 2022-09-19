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
  Output,
  QueryList,
  Renderer2,
} from '@angular/core';
import { StepComponent } from '../step/step.component';

@Component({
  selector: 'veera-ng-steps',
  templateUrl: './steps.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsComponent implements AfterViewInit, AfterContentInit {
  @Input() title!: string;
  @Input() currentStepIndex: number | null = null;
  @Output() stepChange = new EventEmitter<number>();

  stepTitles!: string[];
  currentProgressCSSVar = 0;
  anyStepSelected = false;

  @HostBinding('class') get getHostClasses(): string {
    return (
      'veera-steps' + (this.anyStepSelected ? ' is-any-step-selected' : '')
    );
  }

  constructor(private renderer: Renderer2, private cdRef: ChangeDetectorRef) {}

  @ContentChildren(StepComponent) stepChildren!: QueryList<StepComponent>;

  ngAfterContentInit(): void {
    this.stepTitles = this.stepChildren.map(
      (step: StepComponent) => step.title
    );
  }

  ngAfterViewInit(): void {
    this.stepChildren.changes.subscribe((steps) => {
      this.stepTitles = steps.map((step: StepComponent) => step.title);
      this.hideStepsContent();
      this.cdRef.markForCheck();
    });
    this.hideStepsContent();
  }

  stepSelected(stepIndex: number): void {
    if (this.currentStepIndex == stepIndex) {
      return;
    }
    this.anyStepSelected = true;
    this.currentStepIndex = stepIndex;
    this.hideStepsContent();
    this.currentProgressCSSVar = Math.round(
      ((stepIndex + 1) / this.stepTitles.length) * 100
    );
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
}
