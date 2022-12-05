import { Pipe, PipeTransform } from '@angular/core';
import { NotificationSeverity } from './notification';
import { VeeraIconName } from '@ria/veera-icons';

@Pipe({
  name: 'toHeaderIcon',
})
export class NotificationSeverityToHeaderIconPipe implements PipeTransform {
  transform(severity: NotificationSeverity): VeeraIconName | undefined {
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
