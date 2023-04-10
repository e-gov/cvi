import { Story, Meta } from '@storybook/angular';
import notes from './tab-group.html.md';

export default {
  title: 'HTML/Tab group',
  parameters: {
    notes,
    options: { selectedPanel: 'html/panel' },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
      <ul role="tablist" class="cvi-tab-group">
        <li role="presentation">
          <button type="button" role="tab" aria-controls="tabpanel" class="cvi-tab-group__tab-btn active">Tab 1</button>
        </li>
        <li role="presentation">
          <button type="button" role="tab" aria-controls="tabpanel" class="cvi-tab-group__tab-btn">Tab 2</button>
        </li>
      </ul>
      <div class="cvi-tab-group__tab-content">
        First tab content
      </div>

  `,
});

export const Default = Template.bind({});
