import { Story, Meta } from '@storybook/angular';
import notes from './form-item.html.md';

export default {
  title: 'HTML/Form/Form item',
  parameters: {
    notes,
    options: { selectedPanel: 'storybook/html/panel' },
  },
  args: {
    htmlId: 'fksd4kfds',
    label: 'Your email',
    placeholder: 'Placeholder text...',
    labelPosition: 'top',
    isLabelHidden: false,
    required: false,
  },
  argTypes: {
    labelPosition: {
      name: 'Label position',
      options: ['top', 'side'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div class="cvi-form-item cvi-form-item--label-position-{{ labelPosition }}{{ required ? ' cvi-form-item--is-required' : ''}}">
      <label for="{{ htmlId }}" class="{{ isLabelHidden ? 'cvi-screenreader-text' : 'cvi-form-item__label' }}">{{ label }}{{ required ? ' *' : ''}}</label>
      <span class="cvi-textfield cvi-textfield--type-single-line">
        <input type="text" placeholder="{{ placeholder }}" class="cvi-textfield__text-control" id="{{ htmlId }}" />
      </span>
    </div>
  `,
});

export const Default = Template.bind({});
