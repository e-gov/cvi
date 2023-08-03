import { Meta, Story } from '@storybook/angular';
import notes from './html-section.html.md';

export default {
  title: 'HTML/Html section',
  parameters: {
    notes,
    options: { selectedPanel: 'storybook/html/panel' },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div class="cvi-html-section">
      <h3 class="cvi-html-section__title">Some title</h3>
      <div class="cvi-html-section__content">
        <div class="cvi-html-section__content-elements">
          <p>Võta ühendust perekonnaseisuasutusega, kus soovid abielu sõlmida</p>
        </div>
        <div class="cvi-html-section__content-elements">
          <p> Ordered <b>list</b></p>
          <ol>
            <li>Item 1</li>
            <li>Item 2</li>
          </ol>
          <p> Unordered <i>list</i></p>
          <ul>
            <li><a href="#" target="_blank" class="external-link">Item 1</a></li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
    </div>
  `,
});

export const Default = Template.bind({});
