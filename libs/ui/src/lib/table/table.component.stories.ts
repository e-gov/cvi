import { FormControl, FormGroup } from '@angular/forms';
import { Meta, StoryFn } from '@storybook/angular';
import { TableComponent } from './table.component';
import { StatusBadgeSeverity } from '../status-badge/status-badge';
import notes from './table.component.md';

const statuses = [
  {
    severity: 'info',
    label: 'Avaldamise ootel',
  },
  {
    severity: 'warning',
    label: 'Mustand',
  },
  {
    severity: 'success',
    label: 'Avaldatud',
  },
];

const getStatusBadgeLabelBySeverity = (severity: StatusBadgeSeverity) =>
  statuses.find((st: any) => st.severity === severity)?.label;

export default {
  title: 'Angular/Table',
  component: TableComponent,
  parameters: { notes },
  args: {
    headerLabels: ['Sündmusteenus', 'Staatus', 'Viimati muudetud'],
    data: [
      {
        event: 'Abiellumine',
        statusSeverity: 'warning',
        lastChanged: '2021-07-15',
        icons: [
          { iconName: 'edit_simple', actionLabel: 'Edit' },
          { iconName: 'delete', actionLabel: 'Delete' },
        ],
      },
      {
        event: 'Abiellumine',
        statusSeverity: 'success',
        lastChanged: '2018-07-17',
        icons: [{ iconName: 'add', actionLabel: 'Add' }],
      },
      {
        event: 'Abiellumine',
        statusSeverity: 'info',
        lastChanged: '2016-07-05',
        icons: [{ iconName: 'edit_simple', actionLabel: 'Edit' }],
      },
    ],
    rowIconHeight: 18,
    rowIconGap: 3,
  },
} as Meta<TableComponent>;

export const Default = {
  render: (args: TableComponent) => ({
    props: {
      ...args,
      getStatusBadgeLabelBySeverity,
    },
    /* template */
    template: `
      <cvi-ng-table [data]="data">
        <ng-template #headers>
          <ng-container *ngFor="let headerLabel of headerLabels">
            <th cvi-ng-header-cell>{{ headerLabel }}</th>
          </ng-container>
        </ng-template>
        <ng-template #rows let-row>
          <td cvi-ng-body-cell>{{ row.event }}</td>
          <td cvi-ng-body-cell>
            <cvi-ng-status-badge [severity]="row.statusSeverity" [label]="getStatusBadgeLabelBySeverity(row.statusSeverity)"></cvi-ng-status-badge>
          </td>
          <td cvi-ng-body-cell>{{ row.lastChanged }}</td>
          <td cvi-ng-body-cell>
            <cvi-ng-track [gap]="rowIconGap">
              <button *ngFor="let icon of row.icons" [attr.title]="icon.actionLabel">
                <cvi-ng-screenreader-text [label]="icon.actionLabel"></cvi-ng-screenreader-text>
                <cvi-ng-icon [name]="icon.iconName" [height]="rowIconHeight">
                </cvi-ng-icon>
              </button>
            </cvi-ng-track>
          </td>
        </ng-template>
      </cvi-ng-table>
    `,
  }),
};

export const Mobile = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12mini',
    },
  },
};

const TemplateWithToolbar: StoryFn<TableComponent> = (args: TableComponent) => {
  const form = new FormGroup({
    item: new FormControl(null),
  });

  return {
    props: {
      ...args,
      form: form,
    },
    /* template */
    template: `
      <cvi-ng-table [data]="data">
        <cvi-ng-track horizontalAlignment="justify">
          <cvi-ng-form-item label="Otsi sündmusteenust" htmlId="some-table-search-id">
            <cvi-ng-input placeholder="Abiellumine" htmlId="some-table-search-id" suffixIconName="loupe"></cvi-ng-input>
          </cvi-ng-form-item>
          <cvi-ng-button appearance="text">
            <cvi-ng-track [gap]="2">
              <cvi-ng-icon name="add" [height]="14"></cvi-ng-icon>
              Lisa uus sündmusteenus
            </cvi-ng-track>
          </cvi-ng-button>
        </cvi-ng-track>

        <ng-template #headers>
          <ng-container *ngFor="let headerLabel of headerLabels">
            <th cvi-ng-header-cell>{{ headerLabel }}</th>
          </ng-container>
        </ng-template>

        <ng-template #rows let-row>
          <td cvi-ng-body-cell>{{ row.event }}</td>
          <td cvi-ng-body-cell>{{ row.status }}</td>
          <td cvi-ng-body-cell>{{ row.lastChanged }}</td>
          <td cvi-ng-body-cell>
            <cvi-ng-track [gap]="rowIconGap">
              <button *ngFor="let icon of row.icons" [attr.title]="icon.actionLabel">
                <cvi-ng-screenreader-text [label]="icon.actionLabel"></cvi-ng-screenreader-text>
                <cvi-ng-icon [name]="icon.iconName"
                              [height]="rowIconHeight">
                </cvi-ng-icon>
              </button>
            </cvi-ng-track>
          </td>
        </ng-template>
      </cvi-ng-table>
    `,
  };
};

export const WithToolbar = {
  render: TemplateWithToolbar,
};
