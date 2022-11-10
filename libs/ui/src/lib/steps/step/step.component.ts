import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'veera-ng-step',
  templateUrl: './step.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepComponent {
  @Input() stepNumber!: number;
  @Input() title!: string;

  constructor(public ref: ElementRef, private cdr: ChangeDetectorRef) {}

  @HostBinding('class') get getHostClasses(): string {
    return 'veera-steps__content-panel';
  }

  updateView(): void {
    this.cdr.markForCheck();
  }
}
