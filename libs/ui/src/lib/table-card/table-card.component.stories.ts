import { Meta, Story } from '@storybook/angular';
import notes from './table-card.component.md';
import { TableCardComponent } from './table-card.component';

const statuses = [
  {
    severity: 'info',
    label: 'Lõppenud',
  },
  {
    severity: 'error',
    label: 'Katkenud',
  },
];

const getStatusBadgeLabelBySeverity = (severity: any) =>
  statuses.find((st: any) => st.severity === severity)?.label;

export default {
  title: 'Angular/Table Card',
  parameters: { notes },
  args: {
    headerLabels: ['Lõppkuupäev', 'Sündmus', 'Staatus'],
    data: [
      {
        event: 'Abielu sõlmimine',
        statusSeverity: 'info',
        lastChanged: '2021-07-20',
        tooltip: 'Lõppenud',
        button: 'Vaata',
        icon: 'arrow_b_right',
      },
      {
        event: 'Abielu sõlmimine',
        statusSeverity: 'error',
        lastChanged: '2018-07-17',
        tooltip: 'Katkenud',
        button: 'Vaata',
        icon: 'arrow_b_right',
      },
    ],
  },
} as Meta<TableCardComponent>;

const Template: Story<TableCardComponent> = (args: TableCardComponent) => ({
  props: {
    ...args,
    getStatusBadgeLabelBySeverity,
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
