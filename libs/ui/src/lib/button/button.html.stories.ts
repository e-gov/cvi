import { Meta, StoryFn } from '@storybook/angular';
import notes from './button.html.md';
import { ButtonAppearance, ButtonSize } from './button';

export default {
  title: 'HTML/Button',
  parameters: {
    notes,
    options: { selectedPanel: 'html/panel' },
  },
  argTypes: {
    appearance: {
      name: 'Appearance',
      options: [
        ButtonAppearance.PRIMARY,
        ButtonAppearance.SECONDARY,
        ButtonAppearance.TEXT,
      ],
      control: { type: 'inline-radio' },
    },
    size: {
      name: 'Size',
      options: [ButtonSize.S, ButtonSize.M],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    content: 'Button label',
    appearance: ButtonAppearance.PRIMARY,
    size: ButtonSize.M,
    disabled: false,
  },
} as Meta;

const Template: StoryFn = (args) => ({
  props: args,
  /* template */
  template: `
    <div
      class="cvi-button cvi-button--appearance-{{ appearance }} cvi-button--size-{{ size }}"
    >
      <button type="button" class="cvi-button__button" disabled="{{ disabled ? true : null }}">{{ content }}</button>
    </div>
  `,
});

export const Default = {
  render: Template,
  args: {},
};

export const Secondary = {
  render: Template,

  args: {
    appearance: ButtonAppearance.SECONDARY,
  },
};

export const Small = {
  render: Template,

  args: {
    size: ButtonSize.S,
  },
};

export const Text = {
  render: Template,

  args: {
    appearance: ButtonAppearance.TEXT,
  },
};
