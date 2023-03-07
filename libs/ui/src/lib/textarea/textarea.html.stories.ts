import { Meta, Story } from '@storybook/angular';
import notes from './textarea.html.md';

export default {
  title: 'HTML/Form/Textarea',
  parameters: { notes },
  args: {
    placeholder: 'Placeholder...',
    maxLength: 2000,
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <span class="cvi-textfield cvi-textfield--type-multiple-lines">
      <textarea class="cvi-textfield__text-control"
                [placeholder]="placeholder"
                [maxLength]="maxLength"
      ></textarea>
    </span>
  `,
});

export const Default = Template.bind({});
Default.args = {};

const CharacterCounterTemplate: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <span class="cvi-textfield cvi-textfield--type-multiple-lines">
      <textarea class="cvi-textfield__text-control"
                [placeholder]="placeholder"
                [maxLength]="maxLength"
      ></textarea>
    </span>
    <div class="cvi-character-counter">0 / 2000</div>
  `,
});

export const WithCharacterCounter = CharacterCounterTemplate.bind({});
