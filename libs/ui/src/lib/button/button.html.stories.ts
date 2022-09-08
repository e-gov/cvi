import { Story, Meta } from '@storybook/angular';
import notes from './button.html.md';

export default {
  title: 'HTML/Button',
  parameters: {
    notes,
    options: { selectedPanel: 'html/panel' },
  },
  argTypes: {
    appearance: {
      name: 'Appearance',
      options: ['primary', 'secondary', 'text'],
      control: { type: 'inline-radio' },
    },
    size: {
      name: 'Size',
      options: ['m', 's'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    content: 'Button label',
    appearance: 'primary',
    size: 'm',
    disabled: false,
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div
      class="veera-button veera-button--appearance-{{ appearance }} veera-button--size-{{ size }}"
    >
      <button type="button" class="veera-button__button">{{ content }}</button>
    </div>
  `,
});

export const Primary = Template.bind({});
Primary.args = {};

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
