import { Pipe, PipeTransform } from '@angular/core';
import { CircleSeverity } from '../../circle/circle';

@Pipe({
  name: 'toStepCircleSeverity',
})
export class ToStepCircleSeverityPipe implements PipeTransform {
  transform(value: 'error' | 'success' | null): CircleSeverity {
    switch (value) {
      case 'success':
        return 'success';
      case 'error':
        return 'error';
      default:
        return 'none';
    }
  }
}
