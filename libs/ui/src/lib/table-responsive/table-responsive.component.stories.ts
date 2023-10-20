import { Meta, Story } from '@storybook/angular';
import notes from './table-responsive.component.md';
import { TableResponsiveComponent } from './table-responsive.component';
import { StatusBadgeSeverity } from '../status-badge/status-badge';

const statuses: { severity: StatusBadgeSeverity; label: string }[] = [
  {
    severity: 'info',
    label: 'Lõppenud',
  },
  {
    severity: 'error',
    label: 'Katkenud',
  },
];

const getStatusBadgeLabelBySeverity = (severity: StatusBadgeSeverity) =>
  statuses.find(
    (st: { severity: StatusBadgeSeverity; label: string }) =>
      st.severity === severity
  )?.label || 'info';

export default {
  title: 'Angular/Responsive table',
  parameters: { notes },
  args: {
    headerLabels: [
      'First column',
      'Another second column',
      'Third column',
      'Fourth one and that is it!',
    ],
    data: [
      {
        event: 'Abielu sõlmimine',
        statusSeverity: 'info',
        lastChanged: '2021-07-20',
        statusLabel: 'Lõppenud',
      },
      {
        event: 'Lapse saamine',
        statusSeverity: 'error',
        lastChanged: '2018-07-17',
        statusLabel: 'Katkenud',
      },
    ],
  },
} as Meta<TableResponsiveComponent>;

const Template: Story<TableResponsiveComponent> = (
  args: TableResponsiveComponent
) => ({
  props: {
    ...args,
  },
  /* template */
  template: `
  <cvi-ng-table-responsive [data]="data" [headerLabels]="headerLabels"></cvi-ng-table-responsive>
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

const TemplateWithCustomHeader: Story<TableResponsiveComponent> = (
  args: TableResponsiveComponent
) => ({
  props: {
    ...args,
  },
  /* template */
  template: `
  <cvi-ng-table-responsive [data]="data" [headerLabels]="headerLabels">
    <ng-template #headerTemplate let-label let-colIdx="colIdx">
      <ng-container *ngIf="colIdx < 2">{{ label }}</ng-container>
      <ng-container *ngIf="colIdx === 2">
        {{ label }}
        <cvi-ng-icon name="warning_amber" [height]="12"></cvi-ng-icon>
      </ng-container>
      <cvi-ng-button *ngIf="colIdx === 3" size="s" appearance="text">Click</cvi-ng-button>
    </ng-template>
  </cvi-ng-table-responsive>
  `,
});

export const WithCustomHeader = TemplateWithCustomHeader.bind({});

const TemplateWithCustomHeaderBody: Story<TableResponsiveComponent> = (
  args: TableResponsiveComponent
) => ({
  props: {
    ...args,
    headerLabels: ['Lõppkuupäev', 'Sündmus', 'Staatus', 'Tegevus'],
    data: [
      {
        event: 'Abielu sõlmimine',
        statusSeverity: 'info',
        lastChanged: '2021-07-20',
        statusLabel: 'Lõppenud',
      },
      {
        event: 'Abielu sõlmimine',
        statusSeverity: 'error',
        lastChanged: '2018-07-17',
        statusLabel: 'Katkenud',
      },
    ],
    getStatusBadgeLabelBySeverity,
  },
  styles: [
    `:host {
      --cvi-button--text-decoration: none;
    }`,
  ],
  /* template */
  template: `
    <cvi-ng-table-responsive [data]="data" [headerLabels]="headerLabels">

      <ng-template #headerTemplate let-label let-colIdx="colIdx">
        <ng-container *ngIf="colIdx !== 3">{{ label }}</ng-container>
        <cvi-ng-screenreader-text [label]="label" *ngIf="colIdx === 3"></cvi-ng-screenreader-text>
      </ng-template>

      <ng-template #bodyTemplate let-row let-colIdx="colIdx">
        <ng-container *ngIf="colIdx === 0">{{ row.lastChanged | date: 'dd.MM.YYYY' }}</ng-container>
        <ng-container *ngIf="colIdx === 1">{{ row.event }}</ng-container>
        <cvi-ng-status-badge *ngIf="colIdx === 2" [severity]="row.statusSeverity" [label]="getStatusBadgeLabelBySeverity(row.statusSeverity)" [withTooltip]="true" [tooltipText]="row.statusLabel" [hasBackground]="false"></cvi-ng-status-badge>
        <ng-container *ngIf="colIdx === 3">
          <cvi-ng-button appearance="text">
            <cvi-ng-track horizontalAlignment="center" verticalAlignment="center" [gap]="3">
              <cvi-ng-labeled-icon [gap]="3" iconPosition="after" name="arrow_b_right" [iconHeight]="14">Vaata</cvi-ng-labeled-icon>
            </cvi-ng-track>
          </cvi-ng-button>
        </ng-container>
      </ng-template>
    </cvi-ng-table-responsive>
  `,
});

export const WithCustomHeaderAndBody = TemplateWithCustomHeaderBody.bind({});
