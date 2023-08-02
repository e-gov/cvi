import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { CviIconName } from '../../../../../dist/libs/icons';
import { StatusBarSeverity } from './status-bar';
import { StatusBarSeverityToHeaderIconPipe } from './status-bar-severity-to-header-icon.pipe';

@Component({
  selector: 'cvi-ng-status-bar',
  templateUrl: './status-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusBarComponent implements AfterViewInit {
  @Input() severity: StatusBarSeverity = 'info';
  @Input() iconName?: CviIconName;
  constructor(
    private readonly cd: ChangeDetectorRef,
    private readonly iconPipe: StatusBarSeverityToHeaderIconPipe
  ) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  @HostBinding('class')
  get hostClasses(): string {
    return `cvi-status-bar`;
  }

  getIconName(): CviIconName | undefined {
    return this.iconPipe.transform(this.severity);
  }
}
