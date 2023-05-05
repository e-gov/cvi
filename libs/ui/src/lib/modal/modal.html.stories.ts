import { Meta, Story } from '@storybook/angular';
import notes from './modal.html.md';

export default {
  title: 'HTML/Modal',
  parameters: {
    notes,
    options: { selectedPanel: 'html/panel' },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div class="cvi-modal">
      <div class="cvi-modal__dialog" role="dialog" aria-label="Hi!">
        <button class="cvi-modal__close" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14px">
            <path d="M14,1.4L12.6,0L7,5.6L1.4,0L0,1.4L5.6,7L0,12.6L1.4,14L7,8.4l5.6,5.6l1.4-1.4L8.4,7L14,1.4z"/>
          </svg>
        </button>
        <h2 class="cvi-modal__title">Hi!</h2>
        <div class="cvi-modal__content">
          <p>I'm modal</p>
        </div>
        <div class="cvi-modal__footer">
          <div class="cvi-track cvi-track--direction-vertical-reversed-on-mobile cvi-track--layout-flex" style="--gap:2; --horizontal-alignment: flex-end;">
            <div class="cvi-button cvi-button--appearance-secondary cvi-button--size-m">
              <button type="button" class="cvi-button__button">Cancel</button>
            </div>
            <div class="cvi-button cvi-button--appearance-primary cvi-button--size-m">
              <button type="button" class="cvi-button__button">Confirm</button>
            </div>
          </div>
        </div>
      </div>
      <div class="cvi-modal__backdrop"></div>
    </div>
  `,
});

export const Default = Template.bind({});
