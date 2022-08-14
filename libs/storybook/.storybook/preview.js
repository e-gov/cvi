import { moduleMetadata } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { UiModule } from '@ria-poc/ui';
import docJson from './documentation.json';

setCompodocJson(docJson);

export const parameters = {
  docs: {
    extractComponentDescription: (_, { notes }) => {
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text;
      }
      return null;
    },
  },
};

export const decorators = [
  moduleMetadata({
      imports: [
        UiModule,
      ]
  }),
];
