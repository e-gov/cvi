import { Meta, Story } from '@storybook/angular';
import notes from './textarea.html.md';

export default {
  title: 'HTML/Textarea',
  parameters: { notes },
  args: {
    placeholder: 'Placeholder...',
    maxLength: 2000,
    minRows: 3,
    maxRows: 5,
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <textarea class="c-textarea"
              [placeholder]="placeholder"
              [maxLength]="maxLength"
              cdkTextareaAutosize
              #autosize="cdkTextareaAutosize"
              [cdkAutosizeMinRows]="minRows"
              [cdkAutosizeMaxRows]="maxRows"
    ></textarea>
  `,
});

export const Default = Template.bind({});
Default.args = {};
