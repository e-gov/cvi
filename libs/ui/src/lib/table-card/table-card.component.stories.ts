import { Meta, Story } from '@storybook/angular';
import notes from './table-card.component.md';
import { TableCardComponent } from './table-card.component';

export default {
  title: 'Angular/Table Card',
  parameters: { notes },
} as Meta<TableCardComponent>;

const Template: Story<TableCardComponent> = (args: TableCardComponent) => ({
  props: {
    ...args,
  },
  /* template */
  template: `
  <cvi-ng-table-card>
    <cvi-ng-labeled-item label="Item 1">How do you do?</cvi-ng-labeled-item>
    <cvi-ng-labeled-item label="Item 2, so long it does not fit ever even on a longest viewport eva">Hello!</cvi-ng-labeled-item>
    <cvi-ng-labeled-item label="Item 3">Some text</cvi-ng-labeled-item>
  </cvi-ng-table-card>
  `,
});

export const Default = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};
