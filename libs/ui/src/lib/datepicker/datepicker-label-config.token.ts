import { InjectionToken } from '@angular/core';
import { DatepickerLabelConfig } from './datepicker-label.config';

export const DATEPICKER_LABEL_CONFIG =
  new InjectionToken<DatepickerLabelConfig>('datepicker.label.config');
