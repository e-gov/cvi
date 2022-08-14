import { moduleMetadata, Story, Meta } from '@storybook/angular';
import notes from './button.md';
import { ButtonComponent } from './button.component';

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
  },
  args: {
    content: 'Button label',
    appearance: 'primary',
    disabled: false
  },
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  /* template */
  template: `
    <ria-poc-button [disabled]="disabled" [size]="size" [appearance]="appearance">{{ content }}</ria-poc-button>
  `
});

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  appearance: 'secondary'
};

export const Text = Template.bind({});
Text.args = {
  appearance: 'text'
};
