import { Pipe, PipeTransform } from '@angular/core';
import { CviIconName } from '@egov/cvi-icons';

@Pipe({
  name: 'toStepCircleIconName',
})
export class ToStepCircleIconNamePipe implements PipeTransform {
  transform(value: 'error' | 'success' | null): CviIconName | undefined {
    switch (value) {
      case 'success':
        return 'check';
      case 'error':
        return 'close';
      default:
        return undefined;
    }
  }
}
