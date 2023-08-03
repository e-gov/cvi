import { Story, Meta } from '@storybook/angular';
import notes from './toast.html.md';

export default {
  title: 'HTML/Toast',
  parameters: {
    notes,
    options: { selectedPanel: 'storybook/html/panel' },
  },
  argTypes: {
    title: {
      name: 'Title',
      table: {
        category: 'Playground',
      },
      control: { type: 'text' },
    },
    content: {
      name: 'Content',
      table: {
        category: 'Playground',
      },
      control: { type: 'text' },
    },
  },
  args: {
    title: 'Toast title',
    content: 'Message',
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div class="cvi-toast-container">
      <div class="cvi-toast cvi-toast--appearance-error" role="alert" aria-live="assertive" aria-atomic="true" style="opacity: 1;">
        <h1 class="cvi-toast__title">
          <span svgclass="cvi-toast__icon" class="cvi-toast__icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cvi-toast__icon" height="24px">
              <path d="M11 15h2v2h-2zM11 7h2v6h-2z"></path>
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"></path>
            </svg>
          </span>
          <span class="cvi-toast__title-text">{{ title }}</span>
          <button class="cvi-toast__close-button" aria-label="Close">
            <span class="cvi-toast__close-button-inner">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="cvi-toast__close-button-icon" height="24px">
                <path d="M14 1.4 12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7 14 1.4z"></path>
              </svg>
            </span>
          </button>
        </h1>
        <div class="cvi-toast__message">{{ content }}</div>
        <div class="cvi-toast__progress-bar" style="width: 9.4816%;"></div>
      </div>
    </div>
  `,
});

export const Default = Template.bind({});
