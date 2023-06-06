import { Observable } from 'rxjs';

export abstract class DatepickerLabelConfig {
  abstract getDayShorthandLabels(): Observable<string[]>;

  abstract getDayFullLabels(): Observable<string[]>;

  abstract getMonthLabels(): Observable<string[]>;

  abstract getScreenReaderLabel(): Observable<string>;

  abstract getScreenReaderDescription(): Observable<string>;
}
