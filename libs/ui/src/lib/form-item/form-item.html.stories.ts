import { Story, Meta } from '@storybook/angular';
import notes from './form-item.html.md';

export default {
  title: 'HTML/Form/Form item',
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
    <div class="cvi-form-item cvi-form-item--label-position-top">
      <label for="{{ htmlId }}" class="cvi-form-item__label">{{ label }}</label>
      <span class="cvi-textfield cvi-textfield--type-single-line">
        <input type="text" class="cvi-textfield__text-control" id="{{ htmlId }}" />
      </span>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
