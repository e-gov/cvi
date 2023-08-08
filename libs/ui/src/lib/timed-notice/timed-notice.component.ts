import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { CviIconName } from '../../../../../dist/libs/icons';
import { TimedNoticeSeverity } from './timed-notice';
import { TimedNoticeSeverityToIconPipe } from './timed-notice-severity-to-icon.pipe';

@Component({
  selector: 'cvi-ng-timed-notice',
  templateUrl: './timed-notice.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimedNoticeComponent {
  @Input() severity: TimedNoticeSeverity = 'info';
  @Input() iconName?: CviIconName;
  @Input() title = 'title';
  @Input() dueDate?: string;
  @Input() time?: string;
  constructor(private readonly iconPipe: TimedNoticeSeverityToIconPipe) {}

  @HostBinding('class')
  get hostClasses(): string {
    return `cvi-timed-notice`;
  }

  getIconName(): CviIconName | undefined {
    return this.iconPipe.transform(this.severity);
  }
}
