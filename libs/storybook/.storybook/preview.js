import { moduleMetadata } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { UiModule } from '@ria/veera-ng';
import { StorybookModule } from '../src/lib/storybook.module';
import docJson from './documentation.json';
import sortingOrder from './sorting-order';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import 'cypress-storybook/angular';

setCompodocJson(docJson);

export const parameters = {
  html: {
    root: '[ng-version]',
  },
  docs: {
    extractComponentDescription: (_, { notes }) => {
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text;
      }
      return null;
    },
  },
  options: {
    // stories inside one file will be sorted in alphabetical order because of this bug https://github.com/storybookjs/storybook/issues/18659
    storySort: {
      order: sortingOrder.ids,
    },
  },
  layout: 'centered',
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  angularLegacyRendering: false,
};

export const decorators = [
  moduleMetadata({
    imports: [UiModule, StorybookModule],
  }),
];
