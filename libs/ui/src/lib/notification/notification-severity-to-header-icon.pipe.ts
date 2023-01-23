import { Pipe, PipeTransform } from '@angular/core';
import { NotificationSeverity } from './notification';
import { CviIconName } from '@ria/cvi-icons';

@Pipe({
  name: 'toHeaderIcon',
})
export class NotificationSeverityToHeaderIconPipe implements PipeTransform {
  transform(severity: NotificationSeverity): CviIconName | undefined {
    if (severity === 'success') {
      return 'check_circle_outline';
    }
    if (severity === 'warning') {
      return 'warning_amber';
    }
    if (severity === 'error') {
      return 'error_outline';
    }
    return severity === 'info' ? 'info' : undefined;
  }
}
