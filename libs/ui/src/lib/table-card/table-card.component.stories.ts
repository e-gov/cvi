import { Meta, StoryObj } from '@storybook/angular';
import notes from './table-card.component.md';
import { TableCardComponent } from './table-card.component';

export default {
  title: 'Angular/Table Card',
  parameters: { notes },
} as Meta<TableCardComponent>;
type Story = StoryObj<TableCardComponent>;

export const Default: Story = {
  render: (args: TableCardComponent) => ({
    props: args,
    template: `
      <cvi-ng-table-card>
        <cvi-ng-labeled-item label="Item 1">How do you do?</cvi-ng-labeled-item>
        <cvi-ng-labeled-item label="Item 2, so long it does not fit ever even on a longest viewport eva">Hello!</cvi-ng-labeled-item>
        <cvi-ng-labeled-item label="Item 3">Some text</cvi-ng-labeled-item>
      </cvi-ng-table-card>
    `,
  }),
};

export const Mobile: Story = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12mini',
    },
  },
};
