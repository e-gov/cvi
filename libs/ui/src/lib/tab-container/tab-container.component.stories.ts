import { Story, Meta } from '@storybook/angular';
import notes from './tab-container.component.md';
import { TabContainerComponent } from './tab-container.component';

export default {
  title: 'Angular/Tab container',
  component: TabContainerComponent,
  parameters: { notes },
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
} as Meta<TabContainerComponent>;

const Template: Story<TabContainerComponent> = (
  args: TabContainerComponent
) => ({
  props: args,
  /* template */
  template: `
    <veera-ng-tab-container [tabs]="tabs">
      <div>Here's content</div>
    </veera-ng-tab-container>
  `,
});

export const Default = Template.bind({});
Default.args = {};
