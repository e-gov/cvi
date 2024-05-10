import { UiModule } from '@egov/cvi-ng';
import { Component } from '@storybook/addon-docs';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { moduleMetadata, Parameters, Preview } from '@storybook/angular';
import { StorybookModule } from '../src/lib/storybook.module';
import docJson from './documentation.json';
import sortingOrder from './sorting-order.json';
import 'cypress-storybook/angular';

setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    html: {
      root: '[ng-version]',
      prettier: {
        htmlWhitespaceSensitivity: 'ignore',
        bracketSameLine: true,
        singleAttributePerLine: false,
        printWidth: 140,
      },
      removeComments: true,
      transform: (code: string) => {
        // Remove attributes `_nghost` and `ng-reflect` injected by Angular:
        return code.replace(
          /(?:_nghost|ng-reflect|_ngcontent|data-cy|dataattribute|cving|data-chromatic).*?="[\S\s]*?"/g,
          '',
        );
      },
    },
    docs: {
      extractComponentDescription: (_: Component, { notes }: Parameters) => {
        if (notes) {
          return typeof notes === 'string'
            ? notes
            : notes.markdown || notes.text;
        }
        return null;
      },
      source: {
        state: 'open',
      },
    },
    backgrounds: {
      default: 'Default',
      values: [
        {
          name: 'Default',
          value: '#ffffff',
        },
        {
          name: 'Dark',
          value: '#13100d',
        },
        {
          name: 'Gray',
          value: '#f0f0f2',
        },
        {
          name: 'Darkgray',
          value: '#cccccc',
        },
      ],
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
  },
};
export default preview;

export const decorators = [
  moduleMetadata({
    imports: [UiModule, StorybookModule],
  }),
];
