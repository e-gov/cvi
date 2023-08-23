import { Pipe, PipeTransform } from '@angular/core';
import { CviIconName } from '@egov/cvi-icons';
import { FormNotificationSeverity } from './form-notification';

@Pipe({
  name: 'FormNotificationSeverityToHeaderIcon',
})
export class FormNotificationSeverityToHeaderIconPipe implements PipeTransform {
  transform(severity: FormNotificationSeverity): CviIconName | undefined {
    if (severity === 'warning') {
      return 'warning_amber';
    }
    return severity === 'error' ? 'error_outline' : undefined;
  }
}
