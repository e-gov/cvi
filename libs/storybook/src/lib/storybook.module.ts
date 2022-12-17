import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import {
  TranslateModule,
  TranslateService,
  TranslateLoader,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import localeEt from '@angular/common/locales/et';
import { StorybookSpacingSpecimen } from './components/storybook-spacing-specimen/storybook-spacing-specimen.component';
import { StorybookSpacingSpecimenItem } from './components/storybook-spacing-specimen/storybook-spacing-specimen-item.component';
import { StorybookColorCards } from './components/storybook-color-cards/storybook-color-cards.component';
import { StorybookColorCard } from './components/storybook-color-cards/storybook-color-card.component';
import { StorybookIconCards } from './components/storybook-icon-cards/storybook-icon-cards.component';
import { StorybookIconCard } from './components/storybook-icon-cards/storybook-icon-card.component';
import { StorybookTypeTester } from './components/storybook-type-tester/storybook-type-tester.component';
import { StorybookNote } from './components/storybook-note/storybook-note.component';
import { StorybookRandomParagraphsDirective } from './directives/storybook-random-paragraphs/storybook-random-paragraphs.directive';
import { StorybookCurrentComponentDirective } from './directives/storybook-current-component/storybook-current-component.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { storybookIcons } from './utils/storybook-icons';
import * as veeraNg from '@ria/veera-ng';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'i18n/', '.json');
}

registerLocaleData(localeEt);

const components = [
  StorybookColorCards,
  StorybookColorCard,
  StorybookIconCards,
  StorybookIconCard,
  StorybookTypeTester,
  StorybookNote,
  StorybookSpacingSpecimen,
  StorybookSpacingSpecimenItem,
  StorybookRandomParagraphsDirective,
  StorybookCurrentComponentDirective,
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
    private registry: veeraNg.IconsRegistry,
    translate: TranslateService
  ) {
    this.registry.registerIcons(storybookIcons);
    translate.setDefaultLang('et');
    translate.use('et');
  }
}
