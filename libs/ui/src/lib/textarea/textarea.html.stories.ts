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
    <textarea class="veera-textfield__text-control"
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

const CharacterCounterTemplate: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <textarea class="veera-textfield__text-control"
              [placeholder]="placeholder"
              [maxLength]="maxLength"
              cdkTextareaAutosize
              #autosize="cdkTextareaAutosize"
              [cdkAutosizeMinRows]="minRows"
              [cdkAutosizeMaxRows]="maxRows"
    ></textarea>
    <div class="veera-character-counter">0 / 2000</div>
  `,
});

export const WithCharacterCounter = CharacterCounterTemplate.bind({});
