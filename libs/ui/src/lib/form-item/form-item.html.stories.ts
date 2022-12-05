import { Story, Meta } from '@storybook/angular';
import notes from './form-item.html.md';

export default {
  title: 'HTML/Form item',
  parameters: {
    notes,
    options: { selectedPanel: 'html/panel' },
  },
  args: {
    htmlId: 'fksd4kfds',
    label: 'Your email',
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div class="veera-form-item veera-form-item--label-position-top">
      <label for="{{ htmlId }}" class="veera-form-item__label">{{ label }}</label>
      <span class="veera-textfield">
        <input type="text" class="veera-textfield__input" id="{{ htmlId }}" />
      </span>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
