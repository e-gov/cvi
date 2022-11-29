import { Meta, Story } from '@storybook/angular';
import notes from './notification.html.md';

export default {
  title: 'HTML/Notification',
  parameters: { notes },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div class="veera-notification veera-notification--severity-info">
      <button aria-label="Close" type="button" class="veera-notification__close-button">
        <div class="veera-notification__close-button-inner">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="veera-notification__close-button-icon">
            <path d="M14 1.4 12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7 14 1.4z"></path>
          </svg>
        </div>
      </button>
      <div class="veera-notification__inner">
        <div class="veera-notification__header">
          <div class="veera-notification__header-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.8 40" class="veera-notification__header-icon">
              <path d="M13.3 1.1C-3.2 7-4.7 29.4 10.8 37.8c9.3 5 21.6 1 26.9-8.8 2-3.8 2.3-5.5 1.9-10.4C38.4 5.2 25.8-3.2 13.3 1.1zm16.2 6.4c8.8 6.7 8.4 19.1-1 26-3.9 2.9-13.3 2.9-17.2 0-5.3-4-7-7.2-7-13.4 0-4.8.5-6.4 2.9-9.5 1.6-2.1 4.3-4.4 6-5.2 4.7-2.3 11.9-1.3 16.3 2.1z"></path>
              <circle cx="19.9" cy="12" r="2"></circle>
              <ellipse cx="19.9" cy="24" rx="2" ry="6"></ellipse>
            </svg>
          </div>
          <h2 class="veera-notification__title">Notification title</h2>
        </div>
        <div class="veera-notification__content">
          Some content for the notification that might be excessively long and contain some parts that are not very important.
        </div>
      </div>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
