import { Pipe, PipeTransform } from '@angular/core';
import { CviIconName } from '@egov/cvi-icons';
import { FormMessageSeverity } from './form-message';

@Pipe({
  name: 'FormMessageSeverityToHeaderIcon',
})
export class FormMessageSeverityToHeaderIconPipe implements PipeTransform {
  transform(severity: FormMessageSeverity): CviIconName | undefined {
    if (severity === 'warning') {
      return 'warning_amber';
    }
    return severity === 'error' ? 'error_outline' : undefined;
  }
}
