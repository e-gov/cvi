import { Meta, Story } from '@storybook/angular';
import notes from './radio-buttons.html.md';

export default {
  title: 'HTML/Radio button',
  parameters: {
    notes,
    options: { selectedPanel: 'html/panel' },
  },
  argTypes: {
    appearance: {
      name: 'Appearance',
      options: ['regular', 'compact'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    title: 'Example title',
    appearance: 'regular',
    label: 'Option 1',
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div class="veera-radio-buttons">
      <fieldset class="veera-radio-buttons__inner">
        <legend class="veera-radio-buttons__title">{{title}}</legend>
        <ul class="veera-radio-buttons__list">
          <li class="veera-radio-buttons__item">
            <label class="veera-radio-buttons__item-inner">
              <input name="name"
                     value="value_1"
                     class="c-radio"
                     type="radio"
              >
              <span>
                {{label}}
              </span>
            </label>
          </li>
          <li class="veera-radio-buttons__item">
            <label class="veera-radio-buttons__item-inner">
              <input name="name"
                     value="value_2"
                     class="c-radio"
                     type="radio"
              >
              <span>
                Option 2
              </span>
            </label>
          </li>
        </ul>
      </fieldset>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  title: 'Default radio buttons example',
};

const OptionButtonTemplate: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div class="veera-radio-buttons veera-radio-buttons--appearance-{{appearance}}">
      <fieldset class="veera-radio-buttons__inner">
        <legend class="veera-radio-buttons__title">{{title}}</legend>
        <ul class="veera-radio-buttons__list">
          <li class="veera-radio-buttons__item">
            <label class="veera-radio-buttons__item-inner">
              <input type="radio"
                     class="veera-radio-buttons__input"
                     name="example-name"
                     value="value_1"
              />
              <span class="veera-radio-buttons__button">{{label}}</span>
            </label>
          </li>
          <li class="veera-radio-buttons__item">
            <label class="veera-radio-buttons__item-inner">
              <input type="radio"
                     class="veera-radio-buttons__input"
                     name="example-name"
                     value="value_2"
              />
              <span class="veera-radio-buttons__button">
                Option 2
              </span>
            </label>
          </li>
        </ul>
      </fieldset>
    </div>
  `,
});

export const OptionButton = OptionButtonTemplate.bind({});
OptionButton.args = {
  title: 'Radio buttons with labels that look like buttons',
  appearance: 'regular',
};

const OptionButtonCompactTemplate: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div class="veera-radio-buttons veera-radio-buttons--appearance-{{appearance}}">
      <fieldset class="veera-radio-buttons__inner">
        <legend class="veera-radio-buttons__title">{{title}}</legend>
        <ul class="veera-radio-buttons__list">
          <li class="veera-radio-buttons__item">
            <label class="veera-radio-buttons__item-inner">
              <input type="radio"
                     class="veera-radio-buttons__input"
                     name="example-name"
                     value="value_1"
              />
              <span class="veera-radio-buttons__button">{{label}}</span>
            </label>
          </li>
          <li class="veera-radio-buttons__item">
            <label class="veera-radio-buttons__item-inner">
              <input type="radio"
                     class="veera-radio-buttons__input"
                     name="example-name"
                     value="value_2"
              />
              <span class="veera-radio-buttons__button">
                Option 2
              </span>
            </label>
          </li>
        </ul>
      </fieldset>
    </div>
  `,
});

export const OptionButtonCompact = OptionButtonCompactTemplate.bind({});
OptionButtonCompact.args = {
  title: 'Radio buttons with labels that look like compact buttons',
  appearance: 'compact',
};
