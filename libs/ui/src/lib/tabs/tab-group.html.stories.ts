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
    <div class="cvi-tab-group">
      <div role="tablist" class="cvi-tab-group__list">
        <button type="button" role="tab" aria-controls="tabpanel" class="cvi-tab-group__tab-btn active">Tab 1</button>
        <button type="button" role="tab" aria-controls="tabpanel" class="cvi-tab-group__tab-btn">Tab 2</button>
      </div>
      <div class="cvi-tab-group__tab-content">
        First tab content
      </div>
    </div>
  `,
});

export const Default = Template.bind({});
