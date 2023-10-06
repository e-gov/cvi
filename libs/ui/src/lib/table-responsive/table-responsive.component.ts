import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { Gap } from '../track/track';

const statuses = [
  {
    severity: 'info',
    label: 'Lõppenud',
  },
  {
    severity: 'error',
    label: 'Katkenud',
  },
];
@Component({
  selector: 'cvi-ng-table-responsive',
  templateUrl: './table-responsive.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableResponsiveComponent {
  @Input() data!: any[];
  @Input() headerLabels!: any[];
  @Input() cardRowGap: Gap = 1;
  @HostBinding('class') get getHostClasses(): string {
    return 'cvi-table-responsive';
  }

  getStatusBadgeLabelBySeverity = (severity: any) =>
    statuses.find((st: any) => st.severity === severity)?.label || 'info';
}
