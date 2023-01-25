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
    <cvi-ng-tab-group>
      <cvi-ng-tab title="Tab 1">First tab content</cvi-ng-tab>
      <cvi-ng-tab title="Tab 2">Second tab content</cvi-ng-tab>
    </cvi-ng-tab-group>
  `,
});
export const Default = Template.bind({});
