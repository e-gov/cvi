import { Story, Meta, ArgTypes } from '@storybook/angular';
import notes from './button.component.md';
import { ButtonComponent } from './button.component';
import { iconSizeDefault } from '../icons/icon/icon';

export default {
  title: 'Angular/Button',
  component: ButtonComponent,
  parameters: { notes },
  argTypes: {
    appearance: {
      name: 'Appearance',
      options: ['primary', 'secondary', 'text'],
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
    appearance: 'primary',
    disabled: false,
  },
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  /* template */
  template: `
    <veera-ng-button [disabled]="disabled" [size]="size" [appearance]="appearance">{{ content }}</veera-ng-button>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  appearance: 'secondary',
};

export const Small = Template.bind({});
Small.args = {
  size: 's',
};

export const Text = Template.bind({});
Text.args = {
  appearance: 'text',
};

const TemplateTextButtonWithIcon: Story<ButtonComponent> = (
  args: ButtonComponent
) => ({
  props: args,
  /* template */
  template: `
    <veera-ng-button appearance="text">
      <veera-ng-labeled-icon name="add" iconPosition="before" alignment="center" [iconHeight]="iconHeight">
        {{ content }}
      </veera-ng-labeled-icon>
    </veera-ng-button>
  `,
});

type TextButtonWithIconWithCustomArgs = ButtonComponent & {
  iconHeight: number;
};

export const TextButtonWithIcon = TemplateTextButtonWithIcon.bind({});
TextButtonWithIcon.argTypes = {
  iconHeight: {
    name: 'Icon height',
    table: {
      category: 'Playground',
    },
  },
} as Partial<ArgTypes<TextButtonWithIconWithCustomArgs>>;
TextButtonWithIcon.args = {
  appearance: 'text',
  iconHeight: iconSizeDefault,
} as TextButtonWithIconWithCustomArgs;
