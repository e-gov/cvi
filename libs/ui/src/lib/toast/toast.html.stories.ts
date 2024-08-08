import { Meta } from '@storybook/angular';
import notes from './toast.html.md';

export default {
  title: 'HTML/Toast',
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
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

export const Default = {
  render: (args: unknown) => ({
    props: args,
    /* template */
    template: `
      <div class="cvi-toast-container">
        <div class="cvi-toast cvi-toast--appearance-error" role="alert" aria-live="assertive" aria-atomic="true">
          <h1 class="cvi-toast__title">
            <span class="cvi-toast__icon-wrapper">
              <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" class="cvi-toast__icon" height="24px">
                <path d="M6.333 3.666h1.334V5H6.334V3.666Zm0 2.667h1.334v4H6.334v-4Zm.667-6A6.67 6.67 0 0 0 .333 7 6.669 6.669 0 0 0 7 13.666 6.669 6.669 0 0 0 13.667 7 6.669 6.669 0 0 0 7 .333Zm0 12A5.34 5.34 0 0 1 1.667 7 5.34 5.34 0 0 1 7 1.666 5.34 5.34 0 0 1 12.334 7 5.34 5.34 0 0 1 7 12.333Z"></path>
              </svg>
            </span>
            <span class="cvi-toast__title-text">{{ title }}</span>
            <button aria-label="Close" class="cvi-toast__close-button">
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
  }),
};
