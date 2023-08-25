import { Pipe, PipeTransform } from '@angular/core';
import { TimedNoticeSeverity } from './timed-notice';
import { CviIconName } from '@egov/cvi-icons';

@Pipe({
  name: 'toHeaderIcon',
})
export class TimedNoticeSeverityToIconPipe implements PipeTransform {
  transform(severity: TimedNoticeSeverity): CviIconName | undefined {
    if (severity === 'success') {
      return 'check';
    }
    if (severity === 'error') {
      return 'priority_high';
    }
    return severity === 'info' ? 'calendar' : undefined;
  }
}
