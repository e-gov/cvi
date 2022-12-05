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
  template: `
    <div class="veera-modal">
      <div class="veera-modal__dialog" role="dialog" aria-labelledby="modal_title">
        <button class="veera-modal__close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14px">
            <path d="M14,1.4L12.6,0L7,5.6L1.4,0L0,1.4L5.6,7L0,12.6L1.4,14L7,8.4l5.6,5.6l1.4-1.4L8.4,7L14,1.4z"/>
          </svg>
        </button>
        <h2 class="veera-modal__title">Hi!</h2>
        <div class="veera-modal__content">
          <p>I'm modal</p>
        </div>
      </div>
      <div class="veera-modal__backdrop"></div>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
