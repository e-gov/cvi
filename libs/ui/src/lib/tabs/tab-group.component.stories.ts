import notes from './tab-group.component.md';
import { Meta, Story } from '@storybook/angular';
import { TabGroupComponent } from './tab-group.component';

export default {
  title: 'Angular/Tab group',
  component: TabGroupComponent,
  parameters: { notes },
  argTypes: {},
} as Meta;

const Template: Story<TabGroupComponent> = (args: TabGroupComponent) => ({
  props: {
    ...args,
  },
  template: `
    <veera-ng-tab-group>
      <veera-ng-tab title="Tab 1">First tab content</veera-ng-tab>
      <veera-ng-tab title="Tab 2">Second tab content</veera-ng-tab>
    </veera-ng-tab-group>
  `,
});
export const Default = Template.bind({});
