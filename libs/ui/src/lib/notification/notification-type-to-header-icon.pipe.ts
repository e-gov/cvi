import { Pipe, PipeTransform } from '@angular/core';
import { NotificationType } from './notification-type';
import { VeeraIconName } from '@ria/veera-icons';

@Pipe({
  name: 'toHeaderIcon',
})
export class NotificationTypeToHeaderIconPipe implements PipeTransform {
  transform(type: NotificationType): VeeraIconName | undefined {
    if (type === 'success') {
      return 'check_circle_outline';
    }
    if (type === 'warning') {
      return 'warning_amber';
    }
    if (type === 'error') {
      return 'error_outline';
    }
    return type === 'info' ? 'info' : undefined;
  }
}
