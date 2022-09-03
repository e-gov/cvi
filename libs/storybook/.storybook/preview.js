import { moduleMetadata } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { UiModule } from '@ria/veera-ng';
import { StorybookModule } from '../src/lib/storybook.module';
import docJson from './documentation.json';
import sortingOrder from './sorting-order';

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
      storySort: {
          order: sortingOrder.ids
      }
  },
};

export const decorators = [
  moduleMetadata({
      imports: [
        UiModule,
        StorybookModule
      ]
  }),
];
