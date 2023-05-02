import notes from './tab-group.component.md';
import { Meta, Story } from '@storybook/angular';
import { TabGroupComponent } from './tab-group.component';

export default {
  title: 'Angular/Tab group',
  component: TabGroupComponent,
  parameters: { notes },
  argTypes: {
    content: {
      name: 'Content',
      table: {
        category: 'Playground',
      },
      control: { type: 'text' },
    },
  },
  args: {
    content: 'First tab content with some more text that might overflow',
  },
} as Meta;

const Template: Story<TabGroupComponent> = (args: TabGroupComponent) => ({
  props: {
    ...args,
  },
  /* template */
  template: `
    <cvi-ng-tab-group>
      <cvi-ng-tab title="Tab 1">{{ content }}</cvi-ng-tab>
      <cvi-ng-tab title="Tab 2">Second tab content</cvi-ng-tab>
      <cvi-ng-tab title="Tab 3 with lots and lots of random text">Third tab content. File not found. I was having the most wonderful dream. Except you were there, and you were there, and you were there! And when we woke up, we had these bodies. I could if you hadn't turned on the light and shut off my stereo.</cvi-ng-tab>
    </cvi-ng-tab-group>
  `,
});
export const Default = Template.bind({});
