import { Meta, StoryFn } from '@storybook/angular';
import notes from './button.html.md';
import { ButtonAppearance, ButtonSize } from './button';

export default {
  title: 'HTML/Button',
  parameters: {
    notes,
    options: { selectedPanel: 'storybook/html/panel' },
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
      options: [ButtonSize.M, ButtonSize.S],
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
    <div class="cvi-button cvi-button--appearance-{{ appearance }} cvi-button--size-{{ size }}">
      <button type="button" class="cvi-button__button" disabled="{{ disabled ? true : null }}">{{ content }}</button>
    </div>
  `,
});

export const Default = {
  render: Template,
};

export const Secondary = {
  ...Default,
  args: {
    appearance: ButtonAppearance.SECONDARY,
  },
};

export const Small = {
  ...Default,
  args: {
    size: ButtonSize.S,
  },
};

export const Text = {
  ...Default,
  args: {
    appearance: ButtonAppearance.TEXT,
  },
};

const TemplateWithCustomColor: StoryFn = (args) => ({
  props: args,
  styles: [
    `:host {
      --cvi-button-color: var(--cvi-color-jasper-10);
      --cvi-button-color--hover: var(--cvi-color-jasper-12);
    }`,
  ],
  /* template */
  template: `
    <div class="cvi-button cvi-button--appearance-{{ appearance }} cvi-button--size-{{ size }}">
      <button type="button" class="cvi-button__button" disabled="{{ disabled ? true : null }}">{{ content }}</button>
    </div>
  `,
});

export const WithCustomColor = TemplateWithCustomColor.bind({});
