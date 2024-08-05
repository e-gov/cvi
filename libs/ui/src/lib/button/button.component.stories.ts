import { Meta, componentWrapperDecorator } from '@storybook/angular';
import notes from './button.component.md';
import { ButtonComponent } from './button.component';
import { storybookIconsNames } from '../icons/storybook-icons';

const wrapperDecorators = [
  componentWrapperDecorator(ButtonComponent, ({ args }) => {
    return args;
  }),
];

export default {
  title: 'Angular/Button',
  component: ButtonComponent,
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {
    appearance: {
      control: { type: 'inline-radio' },
    },
    iconName: {
      name: 'Icon name',
      options: storybookIconsNames,
      control: { type: 'select' },
    },
    content: {
      name: 'Content',
      table: {
        category: 'Playground',
      },
    },
    onClick: { action: 'Button clicked!' },
  },
  svgClass: { control: false },
  args: {
    content: 'Button label',
    appearance: 'primary',
  },
} as Meta<ButtonComponent>;

export const Default = {
  render: (args: ButtonComponent) => ({
    props: args,
    template: `{{ content }}`,
  }),
  decorators: wrapperDecorators,
};

export const Secondary = {
  ...Default,
  args: {
    appearance: 'secondary',
  },
};

export const Small = {
  ...Default,
  args: {
    size: 's',
  },
};

export const Text = {
  ...Default,
  args: {
    appearance: 'text',
  },
};

export const WithIcon = {
  ...Default,
  args: {
    iconName: 'add',
    iconPosition: 'after',
  },
};

export const WithIconSmall = {
  ...Default,
  args: {
    size: 's',
    iconName: 'add',
    iconPosition: 'after',
  },
};

export const WithIconBefore = {
  ...Default,
  args: {
    iconName: 'add',
    iconPosition: 'before',
  },
};

export const WithCustomColor = {
  render: (args: ButtonComponent) => ({
    props: args,
    styles: [
      `:host {
        --cvi-button-color: var(--cvi-color-jasper-10);
        --cvi-button-color--hover: var(--cvi-color-jasper-12);
      }`,
    ],
    template: `{{ content }}`,
  }),
  decorators: wrapperDecorators,
};

export const TextWithoutUnderline = {
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
      appearance: 'text',
    },
    styles: [
      `:host {
        --cvi-button--text-decoration: none;
      }`,
    ],
    template: `{{ content }}`,
  }),
  decorators: [
    ...wrapperDecorators,
    componentWrapperDecorator((story) => {
      return `
      <cvi-ng-storybook-note>
        Apply <code>--cvi-button--text-decoration: none</code> CSS variable on the component host or its ancestor to remove the underline.
      </cvi-ng-storybook-note>
      ${story}
    `;
    }),
  ],
};

export const WithCustomIconStyle = {
  ...Default,
  render: (args: ButtonComponent) => ({
    props: args,
    styles: [
      `::ng-deep .svg-class {
        fill: red;
      }`,
    ],
    template: `{{ content }}`,
  }),
  args: {
    iconName: 'add',
    iconPosition: 'after',
    svgClass: 'svg-class',
  },
  decorators: wrapperDecorators,
};
