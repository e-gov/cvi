import { Story, Meta } from '@storybook/angular';
import notes from './tab-group.html.md';

export default {
  title: 'HTML/Tab group',
  parameters: {
    notes,
    options: { selectedPanel: 'storybook/html/panel' },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div class="cvi-tab-group">
      <div role="tablist" class="cvi-tab-group__list">
        <button type="button"
                aria-selected="true"
                role="tab"
                id="tabgroup-tab-1"
                class="cvi-tab-group__tab-btn active"
                aria-controls="tabgroup-tabpanel-1">Tab 1</button>
        <button type="button"
                aria-selected="false"
                role="tab"
                id="tabgroup-tab-2"
                class="cvi-tab-group__tab-btn"
                aria-controls="tabgroup-tabpanel-2">Tab 2</button>
      </div>
      <div class="cvi-tab-group__tab-content"
           role="tabpanel"
           id="tabgroup-tabpanel-1"
           aria-labelledby="tabgroup-tab-1"
           tabindex="0">
        First tab content
      </div>
    </div>
  `,
});

export const Default = Template.bind({});
