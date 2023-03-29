import { Story, Meta } from '@storybook/angular';
import notes from './select.html.md';

export default {
  title: 'HTML/Form/Select',
  parameters: {
    notes,
    options: { selectedPanel: 'html/panel' },
  },
  argTypes: {
    containerWidth: {
      name: 'Container width',
      table: {
        category: 'Playground',
      },
      control: { type: 'number' },
    },
  },
  args: {
    placeholder: 'Otsi elementi või lisa uss 🐍',
    containerWidth: 220,
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div style="width: {{ containerWidth }}px">
      <div>
        <div class="cvi-select">
          <div class="cvi-select__container">
            <div class="cvi-select__value-container">
              <div class="cvi-select__placeholder">{{ placeholder }}</div>
            </div>
            <div class="cvi-select__input-container">
              <input
                type="text"
                role="presentation"
                autocomplete="off"
                class="cvi-select__input"
              />
            </div>
            <span class="cvi-select__icon-wrapper">
              <svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg" class="cvi-select__icon-svg" height="24px">
                <path d="M5.366 7.485.264 2.384a.897.897 0 0 1 0-1.272l.848-.848a.897.897 0 0 1 1.272 0L6 3.881 9.616.264a.897.897 0 0 1 1.272 0l.848.848a.896.896 0 0 1 0 1.272L6.633 7.485a.892.892 0 0 1-1.268 0Z"></path>
              </svg>
            </span>
          </div>
          <div class="cvi-select__dropdown">
            <ul role="listbox">
              <li role="option" class="cvi-select__dropdown-item">
                <span class="cvi-select__item-label">Item 1 that is not that short but actually quite long</span>
              </li>
              <li role="option" class="cvi-select__dropdown-item">
                <span class="cvi-select__item-label">Item 2</span>
              </li>
              <li role="option" class="cvi-select__dropdown-item">
                <span class="cvi-select__item-label">Item 3</span>
              </li>
              <li role="option" class="cvi-select__dropdown-item">
                <span class="cvi-select__item-label">Item 4</span>
              </li>
              <li role="option" class="cvi-select__dropdown-item">
                <span class="cvi-select__item-label">Item 5</span>
              </li>
              <li role="option" class="cvi-select__dropdown-item">
                <span class="cvi-select__item-label">Item 6 with a very long text spanning many lines</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
});

export const Default = Template.bind({});
