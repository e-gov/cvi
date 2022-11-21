import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'veera-ng-step-panel',
  templateUrl: './step-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepPanelComponent {
  @Input() title!: string;

  @HostBinding('class') get getHostClasses(): string {
    return 'veera-steps__content-panel';
  }
}
