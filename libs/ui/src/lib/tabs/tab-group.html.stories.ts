import { Meta } from '@storybook/angular';
import notes from './tab-group.html.md';

export default {
  title: 'HTML/Tabs/Tab group',
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
    options: { selectedPanel: 'storybook/html/panel' },
  },
} as Meta;

export const Default = {
  render: (args: unknown) => ({
    props: args,
    /* template */
    template: `
      <div class="cvi-tab-group">
        <div role="tablist" class="cvi-tab-group__list">
          <button
            type="button"
            role="tab"
            class="cvi-tab-group__tab-btn active"
            id="tabgroup-3dc61ee2-801d-43e9-9f93-9a6e78598144-tab-0"
            aria-selected="true"
            aria-controls="tabgroup-3dc61ee2-801d-43e9-9f93-9a6e78598144-tabpanel-0">
            Tab 1
          </button>
          <button
            type="button"
            role="tab"
            class="cvi-tab-group__tab-btn"
            id="tabgroup-3dc61ee2-801d-43e9-9f93-9a6e78598144-tab-1"
            aria-selected="false"
            tabindex="-1"
            aria-controls="tabgroup-3dc61ee2-801d-43e9-9f93-9a6e78598144-tabpanel-1">
            Tab 2, with a form
          </button>
          <button
            type="button"
            role="tab"
            class="cvi-tab-group__tab-btn"
            id="tabgroup-3dc61ee2-801d-43e9-9f93-9a6e78598144-tab-2"
            aria-selected="false"
            tabindex="-1"
            aria-controls="tabgroup-3dc61ee2-801d-43e9-9f93-9a6e78598144-tabpanel-2">
            Tab 3 with lots and lots of random text
          </button>
        </div>
        <div
          role="tabpanel"
          tabindex="0"
          class="cvi-tab-group__tab-content"
          aria-labelledby="tabgroup-3dc61ee2-801d-43e9-9f93-9a6e78598144-tab-0"
          id="tabgroup-3dc61ee2-801d-43e9-9f93-9a6e78598144-tabpanel-0">
          First tab content with some more text that might overflow
        </div>
      </div>
    `,
  }),
};

export const Mobile = {
  ...Default,
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};
