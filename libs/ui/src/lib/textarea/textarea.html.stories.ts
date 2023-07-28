import { Meta } from '@storybook/angular';
import notes from './textarea.html.md';

export default {
  title: 'HTML/Form/Textarea',
  parameters: { notes },
  args: {
    placeholder: 'Placeholder...',
    maxLength: 2000,
    resizable: true,
  },
} as Meta;

export const Default = {
  render: (args: unknown) => ({
    props: args,
    /* template */
    template: `
      <span class="cvi-textfield cvi-textfield--type-multiple-lines {{ resizable ? '' : 'cvi-textfield--no-resize' }}">
        <textarea class="cvi-textfield__text-control" placeholder="{{ placeholder }}" maxLength="{{ maxLength }}"></textarea>
      </span>
    `,
  }),
};

export const WithCharacterCounter = {
  render: (args: unknown) => ({
    props: args,
    /* template */
    template: `
      <span class="cvi-textfield cvi-textfield--type-multiple-lines {{ resizable ? '' : 'cvi-textfield--no-resize' }}">
        <textarea class="cvi-textfield__text-control" placeholder="{{ placeholder }}" maxLength="{{ maxLength }}"></textarea>
      </span>
      <div class="cvi-character-counter">0 / 2000</div>
    `,
  }),
};
