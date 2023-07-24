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
  OnDestroy,
  Output,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { StepComponent } from '../step/step.component';
import { StepPanelComponent } from '../step-panel/step-panel.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cvi-ng-steps',
  templateUrl: './steps.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsComponent
  implements AfterViewInit, AfterContentInit, OnChanges, OnDestroy
{
  @Input() title!: string;

  /** Internal */
  private _currentStepIndex: number | null = null;

  @Output() currentStepIndexChange: EventEmitter<number | null> =
    new EventEmitter<number | null>();

  @Input()
  get currentStepIndex(): number | null {
    return this._currentStepIndex;
  }
  set currentStepIndex(value) {
    this._currentStepIndex = value;
    this.currentStepIndexChange.emit(value);
  }

  @Input() hasTableOfContents = false;

  /** Index of a step, used to initiate step change from a parent component */
  @Input() stepIndex: number | null = null;

  @Output() stepChange = new EventEmitter<number>();

  stepTitles!: string[];
  @Input() currentProgressCSSVar = 0;
  @Input() anyStepSelected = false;
  @ContentChildren(StepComponent) stepChildren!: QueryList<StepComponent>;

  panelSubscription!: Subscription;
  _stepPanels!: QueryList<StepPanelComponent>;
  @ContentChildren(StepPanelComponent, { descendants: true })
  set stepPanels(panels: QueryList<StepPanelComponent>) {
    if (this.panelSubscription) {
      this.panelSubscription.unsubscribe();
    }
    this.panelSubscription = new Subscription();
    this._stepPanels = panels;
    this._stepPanels
      .toArray()
      .forEach((stepPanel: StepPanelComponent, i: number) => {
        this.panelSubscription.add(
          stepPanel.titleChangeSubject.subscribe((title: string) => {
            if (this.stepTitles && title) {
              this.stepTitles[i] = title;
            }
          })
        );
      });
  }
  get stepPanels() {
    return this._stepPanels;
  }

  constructor(private cdRef: ChangeDetectorRef) {}

  @HostBinding('class') get getHostClasses(): string {
    return `cvi-steps${this.anyStepSelected ? ' is-any-step-selected' : ''}${
      this.hasTableOfContents ? ' has-toc' : ''
    }`;
  }

  @HostBinding('style.--current-step') get getCurrentStepAsCSSVar(): string {
    return this.currentStepIndex === null
      ? ''
      : `'${this.currentStepIndex + 1}'`;
  }

  ngAfterContentInit(): void {
    this.updateTitles(this._stepPanels.toArray());
    if (this.currentStepIndex !== null) {
      this.anyStepSelected = true;
      this.setProgress(this.currentStepIndex);
    }
    this.hideStepsContent();
  }

  ngAfterViewInit(): void {
    this.stepChildren.changes.subscribe(() => {
      this.hideStepsContent();
      this.cdRef.markForCheck();
    });
    this._stepPanels.changes.subscribe((stepPanels: StepPanelComponent[]) => {
      this.updateTitles(stepPanels);
      this.cdRef.markForCheck();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const stepIndexChange = changes['stepIndex'];
    if (stepIndexChange && this.stepChildren) {
      this.stepSelected(stepIndexChange.currentValue);
    }
  }

  ngOnDestroy(): void {
    if (this.panelSubscription) {
      this.panelSubscription.unsubscribe();
    }
  }

  updateTitles(stepPanels: StepPanelComponent[]) {
    this.stepTitles = stepPanels.map(
      (stepPanel: StepPanelComponent) => stepPanel.title
    );
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
      step.isVisible = stepIndex === this.currentStepIndex;
    });
  }

  setProgress(stepIndex: number) {
    this.currentProgressCSSVar = Math.round(
      ((stepIndex + 1) / this.stepTitles.length) * 100
    );
  }
}
