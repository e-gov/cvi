import { Story, Meta } from '@storybook/angular';
import notes from './tab-container.html.md';

export default {
  title: 'HTML/Tab Container',
  parameters: {
    notes,
    options: { selectedPanel: 'html/panel' },
  },
  args: {
    tabs: [
      {
        id: 1,
        active: true,
        title: 'Tab 1',
      },
      {
        id: 2,
        active: false,
        title: 'Tab 2',
      },
    ],
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div>
      <ul class="tab-container" role="tabslist">
        <li *ngFor="let tab of tabs" role="presentation">
          <button [ngClass]="{'active': tab.active}"
                  type="button"
                  role="tab"
                  aria-controls="tabpanel"
                  class="veera-tab__veera-tab-btn">
            {{ tab.title }}
          </button>
        </li>
      </ul>
      <div class="veera-tab__veera-tab-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
