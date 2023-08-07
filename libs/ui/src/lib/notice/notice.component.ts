import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { CviIconName } from '../../../../../dist/libs/icons';
import { NoticeSeverity } from './notice';
import { NoticeSeverityToHeaderIconPipe } from './notice-severity-to-header-icon.pipe';

@Component({
  selector: 'cvi-ng-notice',
  templateUrl: './notice.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticeComponent {
  @Input() severity: NoticeSeverity = 'info';
  @Input() iconName?: CviIconName;
  @Input() title = 'KMD Käibedeklaratsioon';
  @Input() dueDate = '01.03.2023';
  @Input() fulfillmentDate = '01.04.2023';
  @Input() time = '23:59';
  @Input() subtitle = 'Maksu- ja tolliamet';
  @Input() aside = 'someaside';
  @Input() asideTooltip = 'sometooltip content';
  constructor(private readonly iconPipe: NoticeSeverityToHeaderIconPipe) {}

  @HostBinding('class')
  get hostClasses(): string {
    return `cvi-notice`;
  }

  getIconName(): CviIconName | undefined {
    return this.iconPipe.transform(this.severity);
  }
}
