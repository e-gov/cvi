import { Meta, StoryObj } from '@storybook/angular';
import notes from './tabs.html.md';

export default {
  title: 'HTML/Tabs/Tabs',
  parameters: {
    notes,
    options: { selectedPanel: 'storybook/html/panel' },
  },
} as Meta;

export const Default: StoryObj = {
  render: (args: any) => ({
    props: args,
    /* template */
    template: `
      <div class="cvi-tabs">
        <div role="tablist" class="cvi-tabs__list">
          <button
            type="button"
            role="tab"
            class="cvi-tabs__tab-btn active"
            id="tabgroup-f6b9e907-e2bc-40bd-948b-d6332df9c00f-tab-0"
            aria-selected="true"
            aria-controls="tabgroup-f6b9e907-e2bc-40bd-948b-d6332df9c00f-tabpanel-0">
            Tab 1
          </button>
          <button
            type="button"
            role="tab"
            class="cvi-tabs__tab-btn"
            id="tabgroup-f6b9e907-e2bc-40bd-948b-d6332df9c00f-tab-1"
            aria-selected="false"
            tabindex="-1"
            aria-controls="tabgroup-f6b9e907-e2bc-40bd-948b-d6332df9c00f-tabpanel-1">
            Tab 2, with a form
          </button>
          <button
            type="button"
            role="tab"
            class="cvi-tabs__tab-btn"
            id="tabgroup-f6b9e907-e2bc-40bd-948b-d6332df9c00f-tab-2"
            aria-selected="false"
            tabindex="-1"
            aria-controls="tabgroup-f6b9e907-e2bc-40bd-948b-d6332df9c00f-tabpanel-2">
            Tab 3 with lots and lots of random text
          </button>
        </div>
        <div class="cvi-tabs__list-mobile">
          <button
            role="button"
            type="button"
            aria-expanded="false"
            class="cvi-tabs__mobile-button"
            id="tabgroup-f6b9e907-e2bc-40bd-948b-d6332df9c00f-tab-button">
            Tab 1
            <span class="cvi-tabs__icon">
              <svg viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg" class="cvi-tabs__arrow-icon" height="24px">
                <path d="M11.09.295 6.5 4.875 1.91.295.5 1.705l6 6 6-6-1.41-1.41Z"></path>
              </svg>
            </span>
          </button>
        </div>
        <div
          tabindex="0"
          role="tabpanel"
          class="cvi-tabs__tab-content"
          aria-labelledby="tabgroup-f6b9e907-e2bc-40bd-948b-d6332df9c00f-tab-0 tabgroup-f6b9e907-e2bc-40bd-948b-d6332df9c00f-dropdown-button-0"
          id="tabgroup-f6b9e907-e2bc-40bd-948b-d6332df9c00f-tabpanel-0">
          First tab content with some more text that might overflow
        </div>
      </div>
    `,
  }),
};

export const Mobile: StoryObj = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12mini',
    },
  },
};
