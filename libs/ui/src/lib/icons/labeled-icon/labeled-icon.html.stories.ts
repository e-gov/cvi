import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import notes from './labeled-icon.html.md';

export default {
  title: 'HTML/Labeled icon',
  parameters: {
    notes,
    options: { selectedPanel: 'storybook/html/panel' },
  },
  argTypes: {
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
  },
  args: {
    gap: 4,
    content: 'This is a labeled icon',
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div class="cvi-labeled-icon">
      <div class="cvi-track cvi-track--direction-horizontal cvi-track--layout-flex" style="--gap:{{ gap }};">
        <div class="cvi-labeled-icon__content">{{ content }}</div>
        <div class="cvi-labeled-icon__icon-wrapper">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="cvi-labeled-icon__icon-svg" height="24px">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 3h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.2-.19.45-.29.71-.29.1 0 .21.01.31.05 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1Zm2.54 2c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51Zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19Z"></path>
          </svg>
        </div>
      </div>
    </div>
  `,
});

export const Default = Template.bind({});

export const LabeledIconInsideButton = Template.bind({});
LabeledIconInsideButton.decorators = [
  componentWrapperDecorator((story) => {
    /* template */
    return `
      <div class="cvi-button cvi-button--appearance-secondary cvi-button--size-m">
        <button type="button" class="cvi-button__button">
          ${story}
        </button>
      </div>
    `;
  }),
];
