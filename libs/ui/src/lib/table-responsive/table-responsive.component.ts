import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  HostBinding,
  Input,
  TemplateRef,
} from '@angular/core';

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
  @HostBinding('class') get getHostClasses(): string {
    return 'cvi-table-responsive';
  }

  @ContentChild('headerTemplate') headerTemplate: TemplateRef<any> | undefined;

  getStatusBadgeLabelBySeverity = (severity: any) =>
    statuses.find((st: any) => st.severity === severity)?.label || 'info';
}
