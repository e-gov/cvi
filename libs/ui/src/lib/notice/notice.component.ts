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
export class NoticeComponent implements AfterViewInit {
  @Input() severity: NoticeSeverity = 'info';
  @Input() iconName?: CviIconName;
  constructor(private readonly iconPipe: NoticeSeverityToHeaderIconPipe) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  @HostBinding('class')
  get hostClasses(): string {
    return `cvi-notice`;
  }

  getIconName(): CviIconName | undefined {
    return this.iconPipe.transform(this.severity);
  }
}
