import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'veera-ng-step',
  template: `
    <ng-container *ngIf="isVisible">
      <ng-content></ng-content>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepComponent {
  /** The internal marker is needed because otherwise its default value overrides the input in Storybook */
  /** @internal */
  private _isVisible = false;
  set isVisible(isVisible) {
    this._isVisible = isVisible;
    this.cdRef.detectChanges();
  }
  get isVisible() {
    return this._isVisible;
  }
  constructor(public ref: ElementRef, private cdRef: ChangeDetectorRef) {}

  @HostBinding('class') get getHostClasses(): string {
    return 'veera-steps__step';
  }
}
