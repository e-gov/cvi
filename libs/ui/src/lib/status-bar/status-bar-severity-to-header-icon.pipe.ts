import { Pipe, PipeTransform } from '@angular/core';
import { StatusBarSeverity } from './status-bar';
import { CviIconName } from '@egov/cvi-icons';

@Pipe({
  name: 'toHeaderIcon',
})
export class StatusBarSeverityToHeaderIconPipe implements PipeTransform {
  transform(severity: StatusBarSeverity): CviIconName | undefined {
    if (severity === 'success') {
      return 'check_circle_outline';
    }
    if (severity === 'error') {
      return 'error_outline';
    }
    return severity === 'info' ? 'calendar' : undefined;
  }
}
