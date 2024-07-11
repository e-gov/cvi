import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '@egov/cvi-ng';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { applicationConfig, moduleMetadata, Preview } from '@storybook/angular';
import { StorybookModule } from '../src/lib/storybook.module';
import docJson from './documentation.json';
import 'cypress-storybook/client';

setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    layout: 'centered',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    controls: { expanded: true },
    docs: {
      canvas: { sourceState: 'shown' },
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
      storySort: {
        method: 'alphabetical',
        order: [
          'Intro',
          'TODOS',
          'Styles',
          [
            'How to install',
            'How to use',
            'How to contribute',
            'Available variables',
            ['Overview', 'Colors', 'Typography', 'Spacing'],
          ],
          'Icons',
          [
            'How to install',
            'How to use',
            'How to contribute',
            'Available icons',
          ],
          'HTML',
          'Angular',
          ['Installation'],
          'Angular Diagrams',
          ['Installation'],
          '*',
        ],
      },
    },
  },
};
export default preview;

export const decorators = [
  moduleMetadata({
    imports: [UiModule, StorybookModule],
  }),
  applicationConfig({
    providers: [UiModule, StorybookModule, BrowserAnimationsModule],
  }),
];
