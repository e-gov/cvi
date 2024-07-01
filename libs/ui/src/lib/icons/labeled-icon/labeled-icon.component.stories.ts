import { componentWrapperDecorator, Meta } from '@storybook/angular';
import { iconSizeDefault } from '../icon/icon';
import { LabeledIconComponent } from './labeled-icon.component';
import notes from './labeled-icon.component.md?raw';
import { storybookIconsNames } from '../storybook-icons';

const wrapperDecorators = [
  componentWrapperDecorator(LabeledIconComponent, ({ args }) => {
    return args;
  }),
];

export default {
  title: 'Angular/Labeled icon',
  component: LabeledIconComponent,
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {
    name: {
      name: 'Icon name',
      options: storybookIconsNames,
      control: { type: 'select' },
    },
    content: {
      name: 'Content',
      table: {
        category: 'Playground',
      },
      control: { type: 'text' },
    },
    gap: {
      name: 'Gap',
      control: { type: 'range', min: 0, max: 20, step: 1 },
    },
    svgClass: { control: false },
    iconClass: { control: false },
  },
  args: {
    iconHeight: iconSizeDefault,
    name: 'call',
    gap: 4,
    iconPosition: 'before',
    content: 'This is a labeled icon',
  },
} as Meta;

export const Default = {
  render: (args: LabeledIconComponent) => ({
    props: args,
    template: `{{ content }}`,
  }),
  decorators: wrapperDecorators,
};

export const WithIconAfter = {
  ...Default,
  args: { iconPosition: 'after' },
};

export const WithCustomGap = {
  ...Default,
  args: { gap: 2 },
};

export const LabeledIconInsideButton = {
  ...Default,
  args: {
    iconPosition: 'after',
    verticalAlignment: 'center',
  },
  decorators: [
    ...wrapperDecorators,
    componentWrapperDecorator((story) => {
      return `
        <cvi-ng-button appearance="secondary">
          ${story}
        </cvi-ng-button>
      `;
    }),
  ],
};

export const WithCustomStyling = {
  render: (args: LabeledIconComponent) => ({
    props: args,
    template: `{{ content }}`,
    styles: [
      // in your app you don't need to use ::ng-deep
      `
        ::ng-deep .icon-wrapper-class {
          border: 1px green solid;
        }
      `,
      `
        ::ng-deep .svg-class {
          fill: red;
        }
      `,
    ],
  }),
  decorators: wrapperDecorators,
  args: {
    iconHeight: 40,
    verticalAlignment: 'center',
    iconClass: 'icon-wrapper-class',
    svgClass: 'svg-class',
  },
};
