import { Story, Meta } from '@storybook/angular';
import notes from './input.html.md';

export default {
  title: 'HTML/Form/Input',
  parameters: {
    notes,
    options: { selectedPanel: 'storybook/html/panel' },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div class="cvi-form-item cvi-form-item--label-position-top">
      <label for="some-id" class="cvi-form-item__label">Some label</label>
      <div class="cvi-textfield cvi-textfield--type-single-line">
        <input type="text" class="cvi-textfield__text-control" id="some-id" />
      </div>
    </div>
  `,
});

export const Default = Template.bind({});

const CharacterCounterTemplate: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div class="cvi-form-item cvi-form-item--label-position-top">
      <label for="some-id" class="cvi-form-item__label">Some label</label>
      <div class="cvi-textfield cvi-textfield--type-single-line">
        <input type="text" class="cvi-textfield__text-control" id="some-id" />
        <div class="cvi-character-counter">0 / 10</div>
      </div>
    </div>
  `,
});

export const WithCharacterCounter = CharacterCounterTemplate.bind({});

const TemplateWithSuffixIcon: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div class="cvi-form-item cvi-form-item--label-position-top">
      <label for="some-id" class="cvi-form-item__label">Some label</label>
      <div class="cvi-textfield cvi-textfield--type-single-line cvi-textfield--has-suffix-icon">
        <input type="text" class="cvi-textfield__text-control" id="some-id" />
        <div class="cvi-textfield__suffix-icon-wrapper">
          <svg width="16" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="cvi-textfield__suffix-icon">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.712 10.063h.723L16 14.637 14.637 16l-4.574-4.565v-.723l-.247-.256a5.92 5.92 0 0 1-3.87 1.437 5.946 5.946 0 1 1 5.947-5.947 5.92 5.92 0 0 1-1.437 3.87l.256.247ZM1.83 5.947a4.111 4.111 0 0 0 4.117 4.116 4.111 4.111 0 0 0 4.116-4.116A4.111 4.111 0 0 0 5.947 1.83 4.111 4.111 0 0 0 1.83 5.947Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  `,
});

export const WithSuffixIcon = TemplateWithSuffixIcon.bind({});
