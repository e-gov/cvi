import { Observable, of } from 'rxjs';
import { DatepickerLabelConfig } from './datepicker-label.config';

export class DefaultDatepickerLabelConfig implements DatepickerLabelConfig {
  getDayShorthandLabels(): Observable<string[]> {
    return of(['E', 'T', 'K', 'N', 'R', 'L', 'P']);
  }

  getDayFullLabels(): Observable<string[]> {
    return of([
      'Esmaspäev',
      'Teisipäev',
      'Kolmapäev',
      'Neljapäev',
      'Reede',
      'Laupäev',
      'Pühapäev',
    ]);
  }

  getMonthLabels(): Observable<string[]> {
    return of([
      'Jaanuar',
      'Veebruar',
      'Märts',
      'Aprill',
      'Mai',
      'Juuni',
      'Juuli',
      'August',
      'September',
      'Oktoober',
      'November',
      'Detsember',
    ]);
  }

  getScreenReaderLabel(): Observable<string> {
    return of('Vali kuupäev');
  }
  getScreenReaderDescription(): Observable<string> {
    return of('Nõutud kuupäeva formaat: dd.MM.yyyy');
  }
}
