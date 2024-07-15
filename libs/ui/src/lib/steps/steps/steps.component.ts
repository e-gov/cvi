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
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'cvi-ng-steps',
  templateUrl: './steps.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsComponent
  implements AfterViewInit, AfterContentInit, OnChanges, OnDestroy
{
  private leftEdgeIntersectionObserver?: IntersectionObserver;

  private rightEdgeIntersectionObserver?: IntersectionObserver;

  @Input() title!: string;

  @Input() urlStepTitle?: string;

  @Input() urlStepLabel?: string;

  @Input() isScrollable?: boolean;

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

  @Output() urlStepClick = new EventEmitter<any>();

  stepStatuses!: ('success' | 'error' | null)[];
  stepTitles!: string[];
  @Input() currentProgressCSSVar = 0;
  @Input() anyStepSelected = false;
  @ContentChildren(StepComponent) stepChildren!: QueryList<StepComponent>;

  @ViewChild('leftEdge') leftEdge?: ElementRef;
  @ViewChild('rightEdge') rightEdge?: ElementRef;
  @ViewChild('stepScrollBar') stepScrollBar?: ElementRef;

  leftEdgeVisible = false;
  rightEdgeVisible = false;

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
    return `cvi-steps${this.anyStepSelected ? ' is-any-step-selected' : ''}
    ${this.hasTableOfContents ? ' has-toc' : ''}
    cvi-steps${this.isScrollable ? ' is-scrollable' : ''}`;
  }

  @HostBinding('style.--current-step') get getCurrentStepAsCSSVar(): string {
    return this.currentStepIndex === null
      ? ''
      : `'${this.currentStepIndex + 1}'`;
  }

  ngAfterContentInit(): void {
    this.updateStepsData(this._stepPanels.toArray());
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
      this.updateStepsData(stepPanels);
      this.cdRef.markForCheck();
    });

    if (this.isScrollable) {
      const observerOptions = {
        root: null,
        threshold: 0.5,
      };

      this.leftEdgeIntersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            this.leftEdgeVisible = entry.isIntersecting;
            this.cdRef.markForCheck();
          });
        },
        observerOptions
      );
      this.rightEdgeIntersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            this.rightEdgeVisible = entry.isIntersecting;
            this.cdRef.markForCheck();
          });
        },
        observerOptions
      );

      this.leftEdgeIntersectionObserver.observe(this.leftEdge?.nativeElement);
      this.rightEdgeIntersectionObserver.observe(this.rightEdge?.nativeElement);
    }
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

    if (this.leftEdgeIntersectionObserver) {
      this.leftEdgeIntersectionObserver.disconnect();
    }

    if (this.rightEdgeIntersectionObserver) {
      this.rightEdgeIntersectionObserver.disconnect();
    }
  }

  updateStepsData(stepPanels: StepPanelComponent[]) {
    this.stepTitles = stepPanels.map(
      (stepPanel: StepPanelComponent) => stepPanel.title
    );
    this.stepStatuses = stepPanels.map(
      (stepPanel: StepPanelComponent) => stepPanel.status
    );
  }

  stepSelected(stepIndex: number): void {
    if (this.currentStepIndex == stepIndex) {
      return;
    }
    if (this.stepTitles.length == stepIndex) {
      this.urlStepClicked();
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

  urlStepClicked() {
    this.urlStepClick.emit();
  }

  onClickScroll(amount: number) {
    if (this.stepScrollBar?.nativeElement) {
      this.stepScrollBar.nativeElement.scrollLeft += amount;
    }
  }
}
