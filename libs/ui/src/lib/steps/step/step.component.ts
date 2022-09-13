import {
  ChangeDetectionStrategy,
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
  @Input() title!: string;

  @HostBinding('class') get getHostClasses(): string {
    return 'veera-steps__content-panel';
  }

  constructor(public ref: ElementRef) {}
}
