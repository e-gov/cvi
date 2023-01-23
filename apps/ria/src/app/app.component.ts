import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'cvi-ng-root',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('et');
    this.translate.use('et');
  }
}
