import { NgModule } from '@angular/core';
import { StorybookSpacingSpecimen } from './components/storybook-spacing-specimen/storybook-spacing-specimen.component';
import { StorybookSpacingSpecimenItem } from './components/storybook-spacing-specimen/storybook-spacing-specimen-item.component';
import { StorybookColorCards } from './components/storybook-color-cards/storybook-color-cards.component';
import { StorybookColorCard } from './components/storybook-color-cards/storybook-color-card.component';
import { StorybookIconCards } from './components/storybook-icon-cards/storybook-icon-cards.component';
import { StorybookIconCard } from './components/storybook-icon-cards/storybook-icon-card.component';
import { StorybookTypeTester } from './components/storybook-type-tester/storybook-type-tester.component';
import { StorybookRandomParagraphsDirective } from './directives/storybook-random-paragraphs/storybook-random-paragraphs.directive';
import { StorybookCurrentComponentDirective } from './directives/storybook-current-component/storybook-current-component.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { storybookIcons } from './utils/storybook-icons';
import * as veeraNg from '@ria/veera-ng';

const components = [
  StorybookColorCards,
  StorybookColorCard,
  StorybookIconCards,
  StorybookIconCard,
  StorybookTypeTester,
  StorybookSpacingSpecimen,
  StorybookSpacingSpecimenItem,
  StorybookRandomParagraphsDirective,
  StorybookCurrentComponentDirective,
];

@NgModule({
  imports: [BrowserAnimationsModule],
  declarations: [...components],
  exports: [...components],
})
export class StorybookModule {
  constructor(private registry: veeraNg.IconsRegistry) {
    this.registry.registerIcons(storybookIcons);
  }
}
