import { Story, Meta } from '@storybook/angular';
import notes from './input.html.md';

export default {
  title: 'HTML/Input',
  parameters: {
    notes,
    options: { selectedPanel: 'html/panel' },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <span class="veera-textfield">
      <input type="text" class="veera-textfield__input" id="some-id" />
    </span>
  `,
});

export const Default = Template.bind({});
Default.args = {};

const CharacterCounterTemplate: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <span class="veera-textfield">
      <input type="text" class="veera-textfield__input" id="some-id" />
      <div class="veera-character-counter">0 / 10</div>
    </span>
  `,
});

export const WithCharacterCounter = CharacterCounterTemplate.bind({});
