import {
  Component,
  Input,
  ContentChildren,
  AfterViewInit,
  QueryList,
  Renderer2,
  SimpleChanges,
  SimpleChange,
  OnChanges,
  AfterContentInit,
} from '@angular/core';
import { StepComponent } from '../step/step.component';

@Component({
  selector: 'veera-ng-steps',
  templateUrl: './steps.component.html',
})
export class StepsComponent
  implements AfterViewInit, AfterContentInit, OnChanges
{
  @Input() title!: string;
  @Input() currentStepIndex = 0;
  stepTitles!: string[];

  constructor(private renderer: Renderer2) {}

  @ContentChildren(StepComponent) stepChildren!: QueryList<StepComponent>;

  ngAfterContentInit(): void {
    this.stepTitles = this.stepChildren.map(
      (step: StepComponent) => step.title
    );
  }

  ngAfterViewInit(): void {
    this.hideStepsContent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change: SimpleChange = changes['currentStepIndex'];
    if (
      !change.isFirstChange() &&
      change.currentValue !== change.previousValue
    ) {
      this.hideStepsContent();
    }
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
