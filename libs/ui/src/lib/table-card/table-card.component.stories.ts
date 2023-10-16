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
  <cvi-ng-table-card [data]="data" [headers]="headerLabels">
    <ng-template #body let-headers="headers" let-row="cardBody">
      <cvi-ng-labeled-item [label]="headers[0]">{{row.lastChanged}}</cvi-ng-labeled-item>
      <cvi-ng-labeled-item [label]="headers[1]">{{row.event}}</cvi-ng-labeled-item>
      <cvi-ng-labeled-item [label]="headers[2]">
        <div>
          <cvi-ng-status-badge [severity]="row.statusSeverity" [label]="getStatusBadgeLabelBySeverity(row.statusSeverity)" 
            [withTooltip]="true" [tooltipText]="row.tooltip" [hasBackground]="false"></cvi-ng-status-badge>
        </div>
      </cvi-ng-labeled-item>
      <cvi-ng-track [gap]="1">
        <cvi-ng-button [appearance]="'text'">
          <cvi-ng-track horizontalAlignment="center" verticalAlignment="center">
            <cvi-ng-labeled-icon [iconPosition]="'after'" [name]="row.icon" [iconHeight]="14">
                    {{ row.button }}
              </cvi-ng-labeled-icon>
            </cvi-ng-track>
        </cvi-ng-button>
      </cvi-ng-track>
    </ng-template>
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

export const Tablet = Template.bind({});
Tablet.parameters = {
  viewport: {
    defaultViewport: 'ipad',
  },
};
