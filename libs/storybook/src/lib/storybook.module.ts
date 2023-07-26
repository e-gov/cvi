import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import localeEt from '@angular/common/locales/et';
import { StorybookSpacingSpecimenComponent } from './components/storybook-spacing-specimen/storybook-spacing-specimen.component';
import { StorybookSpacingSpecimenItemComponent } from './components/storybook-spacing-specimen/storybook-spacing-specimen-item.component';
import { StorybookColorCardsComponent } from './components/storybook-color-cards/storybook-color-cards.component';
import { StorybookColorCardComponent } from './components/storybook-color-cards/storybook-color-card.component';
import { StorybookIconCardsComponent } from './components/storybook-icon-cards/storybook-icon-cards.component';
import { StorybookIconCardComponent } from './components/storybook-icon-cards/storybook-icon-card.component';
import { StorybookTypeTesterComponent } from './components/storybook-type-tester/storybook-type-tester.component';
import { StorybookNoteComponent } from './components/storybook-note/storybook-note.component';
import { StorybookRandomParagraphsDirective } from './directives/storybook-random-paragraphs/storybook-random-paragraphs.directive';
import { StorybookCurrentComponentDirective } from './directives/storybook-current-component/storybook-current-component.directive';
import { StorybookInputDirective } from './directives/storybook-input/storybook-input.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { storybookIcons } from '../../../ui/src/lib/icons/storybook-icons';
import * as cviNg from '@egov/cvi-ng';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'i18n/', '.json');
}

registerLocaleData(localeEt);

const components = [
  StorybookColorCardsComponent,
  StorybookColorCardComponent,
  StorybookIconCardsComponent,
  StorybookIconCardComponent,
  StorybookTypeTesterComponent,
  StorybookNoteComponent,
  StorybookSpacingSpecimenComponent,
  StorybookSpacingSpecimenItemComponent,
  StorybookRandomParagraphsDirective,
  StorybookCurrentComponentDirective,
  StorybookInputDirective,
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [...components],
  exports: [...components, TranslateModule],
  providers: [{ provide: LOCALE_ID, useValue: 'et' }],
})
export class StorybookModule {
  constructor(
    private registry: cviNg.IconsRegistry,
    translate: TranslateService
  ) {
    this.registry.registerIcons(storybookIcons);
    translate.setDefaultLang('et');
    translate.use('et');
  }
}
