import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
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
  @Input() currentStepIndex = 0;
  stepTitles!: string[];

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
    this.currentStepIndex = stepIndex;
    this.hideStepsContent();
  }

  hideStepsContent(): void {
    this.stepChildren.map((step: StepComponent, stepIndex: number) => {
      const domNode: HTMLElement = step.ref.nativeElement;

      if (stepIndex === this.currentStepIndex) {
        this.renderer.removeAttribute(domNode, 'hidden');
      } else {
        this.renderer.setAttribute(domNode, 'hidden', '');
      }
    });
  }
}
