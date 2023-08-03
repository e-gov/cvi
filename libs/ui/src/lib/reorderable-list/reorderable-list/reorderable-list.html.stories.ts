import { Story, Meta } from '@storybook/angular';
import notes from './reorderable-list.html.md';

export default {
  title: 'HTML/Reorderable list',
  parameters: {
    notes,
    layout: 'padded',
    options: { selectedPanel: 'storybook/html/panel' },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div class="cvi-reorderable-list">
      <div class="cvi-reorderable-list__item">
        <button aria-label="Close" type="button" class="cvi-reorderable-list__remove-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="cvi-reorderable-list__close-icon" height="24px">
            <path d="M14 1.4 12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7 14 1.4z"></path>
          </svg>
        </button>
        <div class="cvi-reorderable-list__ordering-buttons">
          <button aria-label="Next">
            <svg viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg" class="cvi-reorderable-list__order-button-icon" height="24px">
              <path d="m6.5.295-6 6 1.41 1.41 4.59-4.58 4.59 4.58 1.41-1.41-6-6Z"></path>
            </svg>
          </button>
          <div class="cvi-reorderable-list__order-nr">2</div>
          <button aria-label="Previous">
            <svg viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg" class="cvi-reorderable-list__order-button-icon" height="24px">
              <path d="M11.09.295 6.5 4.875 1.91.295.5 1.705l6 6 6-6-1.41-1.41Z"></path>
            </svg>
          </button>
        </div>
        <div class="cvi-reorderable-list__form-item-wrapper">And so am I</div>
      </div>
      <div class="cvi-reorderable-list__item">
        <button aria-label="Close" type="button" class="cvi-reorderable-list__remove-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="cvi-reorderable-list__close-icon" height="24px">
            <path d="M14 1.4 12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7 14 1.4z"></path>
          </svg>
        </button>
        <div class="cvi-reorderable-list__ordering-buttons">
          <button aria-label="Next">
            <svg viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg" class="cvi-reorderable-list__order-button-icon" height="24px">
              <path d="m6.5.295-6 6 1.41 1.41 4.59-4.58 4.59 4.58 1.41-1.41-6-6Z"></path>
            </svg>
          </button>
          <div class="cvi-reorderable-list__order-nr">1</div>
          <button aria-label="Previous" class="hidden">
            <svg viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg" class="cvi-reorderable-list__order-button-icon" height="24px">
              <path d="M11.09.295 6.5 4.875 1.91.295.5 1.705l6 6 6-6-1.41-1.41Z"></path>
            </svg>
          </button>
        </div>
        <div class="cvi-reorderable-list__form-item-wrapper">Me as well</div>
      </div>
    </div>
  `,
});

export const Default = Template.bind({});
