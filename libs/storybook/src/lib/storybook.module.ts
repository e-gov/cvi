import { NgModule } from '@angular/core';
import { StorybookSpacingSpecimen } from './components/storybook-spacing-specimen/storybook-spacing-specimen.component';
import { StorybookSpacingSpecimenItem } from './components/storybook-spacing-specimen/storybook-spacing-specimen-item.component';
import { StorybookColorCards } from './components/storybook-color-cards/storybook-color-cards.component';
import { StorybookColorCard } from './components/storybook-color-cards/storybook-color-card.component';
import { StorybookTypeTester } from './components/storybook-type-tester/storybook-type-tester.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const components = [
  StorybookColorCards,
  StorybookColorCard,
  StorybookTypeTester,
  StorybookSpacingSpecimen,
  StorybookSpacingSpecimenItem,
];

@NgModule({
  imports: [BrowserAnimationsModule],
  declarations: [...components],
  exports: [...components],
})
export class StorybookModule {}
