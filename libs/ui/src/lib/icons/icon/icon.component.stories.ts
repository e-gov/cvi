import { Meta, StoryFn, componentWrapperDecorator } from '@storybook/angular';
import { IconComponent } from './icon.component';
import notes from './icon.component.md';
import { storybookIconsNames } from '../storybook-icons';
import { iconSizeDefault } from './icon';

export default {
  title: 'Angular/Icon',
  component: IconComponent,
  parameters: { notes },
  argTypes: {
    name: {
      name: 'Name',
      options: storybookIconsNames,
      control: { type: 'select' },
    },
  },
  args: {
    name: 'action',
    height: iconSizeDefault
  },
} as Meta;

export const Default = {
  render: (args: IconComponent) => ({
    props: args,
  }),
};

export const WithCustomSize = {
  ...Default,
  args: {
    height: 140,
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [
    componentWrapperDecorator((story) => {
      return `
        <cvi-ng-storybook-note>
          To change size of an icon (in both dimensions), set its <code>height</code> prop. The icon will be resized proportionally.
        </cvi-ng-storybook-note>
        ${story}
      `;
    }),
  ],
};

export const WithStyling = {
  render: (args: IconComponent) => ({
    props: args,
    styles: [
      `.wrapper-class {
        fill: red;
      }`,
    ],
  }),
  decorators: [
    componentWrapperDecorator((story) => {
      return `
        <cvi-ng-storybook-note>
          To change color of an icon, just add <code>fill</code> CSS property either to icon component selector itself or its ancestor. It is not required to apply <code>fill</code> to SVG node itself.
        </cvi-ng-storybook-note>
        <div class="wrapper-class">
          ${story}
        </div>
      `;
    }),
  ],
  parameters: {
    layout: 'padded',
  },
};
