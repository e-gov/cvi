import { FormControl, FormGroup } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { UiModule } from '../ui.module';
import { TableComponent } from './table.component';
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

const getStatusBadgeLabelBySeverity = (severity: any) =>
  statuses.find((st: any) => st.severity === severity)?.label;

export default {
  title: 'Angular/Table',
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
  decorators: [
    moduleMetadata({
      imports: [UiModule],
    }),
  ],
} as Meta<TableComponent>;

const Template: Story<TableComponent> = (args: TableComponent) => ({
  props: {
    ...args,
    getStatusBadgeLabelBySeverity,
  },
  /* template */
  template: `
  <veera-ng-table [data]="data">
    <ng-template #headers>
      <ng-container *ngFor="let headerLabel of headerLabels">
        <th veera-ng-header-cell>{{ headerLabel }}</th>
      </ng-container>
    </ng-template>
    <ng-template #rows let-row>
      <td veera-ng-body-cell>{{ row.event }}</td>
      <td veera-ng-body-cell>
        <veera-ng-status-badge [severity]="row.statusSeverity" [label]="getStatusBadgeLabelBySeverity(row.statusSeverity)"></veera-ng-status-badge>
      </td>
      <td veera-ng-body-cell>{{ row.lastChanged }}</td>
      <td veera-ng-body-cell>
        <veera-ng-track [gap]="rowIconGap">
          <button *ngFor="let icon of row.icons" [attr.title]="icon.actionLabel">
            <veera-ng-screenreader-text [label]="icon.actionLabel"></veera-ng-screenreader-text>
            <veera-ng-icon [name]="icon.iconName"
                           [svgClass]="svgClass"
                           [height]="rowIconHeight">
            </veera-ng-icon>
          </button>
        </veera-ng-track>
      </td>
    </ng-template>
  </veera-ng-table>
  `,
});

export const Default = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};

const TemplateWithToolbar: Story<TableComponent> = (args: TableComponent) => {
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
    <veera-ng-table [data]="data">

      <veera-ng-track horizontalAlignment="justify">
        <veera-ng-form-item label="Otsi sündmusteenust" htmlId="some-table-search-id">
          <veera-ng-input placeholder="Abiellumine" htmlId="some-table-search-id" suffixIconName="loupe"></veera-ng-input>
        </veera-ng-form-item>
        <veera-ng-button appearance="text">
          <veera-ng-track [gap]="2">
            <veera-ng-icon name="add" [height]="14"></veera-ng-icon>
            Lisa uus sündmusteenus
          </veera-ng-track>
        </veera-ng-button>
      </veera-ng-track>

      <ng-template #headers>
        <ng-container *ngFor="let headerLabel of headerLabels">
          <th veera-ng-header-cell>{{ headerLabel }}</th>
        </ng-container>
      </ng-template>

      <ng-template #rows let-row>
        <td veera-ng-body-cell>{{ row.event }}</td>
        <td veera-ng-body-cell>{{ row.status }}</td>
        <td veera-ng-body-cell>{{ row.lastChanged }}</td>
        <td veera-ng-body-cell>
          <veera-ng-track [gap]="rowIconGap">
            <button *ngFor="let icon of row.icons" [attr.title]="icon.actionLabel">
              <veera-ng-screenreader-text [label]="icon.actionLabel"></veera-ng-screenreader-text>
              <veera-ng-icon [name]="icon.iconName"
                             [height]="rowIconHeight">
              </veera-ng-icon>
            </button>
          </veera-ng-track>
        </td>
      </ng-template>
    </veera-ng-table>
    `,
  };
};

export const WithToolbar = TemplateWithToolbar.bind({});
