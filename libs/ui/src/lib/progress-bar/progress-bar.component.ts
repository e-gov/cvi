import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cvi-ng-progress-bar',
  templateUrl: './progress-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent {
  @Input() size: 'm' | 's' = 's';
  @Input() progressValue?: number = undefined;
}
