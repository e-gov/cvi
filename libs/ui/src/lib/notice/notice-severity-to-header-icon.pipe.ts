import { Pipe, PipeTransform } from '@angular/core';
import { NoticeSeverity } from './notice';
import { CviIconName } from '@egov/cvi-icons';

@Pipe({
  name: 'toHeaderIcon',
})
export class NoticeSeverityToHeaderIconPipe implements PipeTransform {
  transform(severity: NoticeSeverity): CviIconName | undefined {
    if (severity === 'success') {
      return 'check';
    }
    if (severity === 'error') {
      return 'priority_high';
    }
    return severity === 'info' ? 'calendar' : undefined;
  }
}
