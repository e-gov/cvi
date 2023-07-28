import { StoryFn, Meta, componentWrapperDecorator } from '@storybook/angular';
import notes from './button.component.md';
import { ButtonComponent } from './button.component';

const wrapperDecorators = [
  componentWrapperDecorator(ButtonComponent, ({ args }) => {
    return args;
  }),
];

export default {
  title: 'Angular/Button',
  component: ButtonComponent,
  parameters: { notes },
  argTypes: {
    appearance: {
      control: { type: 'inline-radio' },
    },
    content: {
      name: 'Content',
      table: {
        category: 'Playground',
      },
    },
    onClick: { action: 'Button clicked!' },
  },
  args: {
    content: 'Button label',
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

const TemplateTextButtonWithIcon: StoryFn<ButtonComponent> = (
  args: ButtonComponent
) => ({
  props: args,
  /* template */
  template: `
    <cvi-ng-button appearance="text">
      <cvi-ng-labeled-icon name="add" iconPosition="before" verticalAlignment="center" [iconHeight]="16" [gap]="2">
        {{ content }}
      </cvi-ng-labeled-icon>
    </cvi-ng-button>
  `,
});

export const TextButtonWithIcon = {
  render: TemplateTextButtonWithIcon,
};
