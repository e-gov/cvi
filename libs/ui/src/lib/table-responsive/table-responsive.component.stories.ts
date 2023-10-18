import { Meta, moduleMetadata, Story } from '@storybook/angular';
import notes from './table-responsive.component.md';
import { TableResponsiveComponent } from './table-responsive.component';
import { UiModule } from '../ui.module';

export default {
  title: 'Angular/Responsive table',
  parameters: { notes },
  args: {
    headerLabels: ['Lõppkuupäev', 'Sündmus', 'Staatus', 'Tegevus'],
    data: [
      {
        event: 'Abielu sõlmimine',
        statusSeverity: 'info',
        lastChanged: '2021-07-20',
        tooltipText: 'Lõppenud',
        button: 'Vaata',
        icon: 'arrow_b_right',
      },
      {
        event: 'Abielu sõlmimine',
        statusSeverity: 'error',
        lastChanged: '2018-07-17',
        tooltipText: 'Katkenud',
        button: 'Vaata',
        icon: 'arrow_b_right',
      },
    ],
  },
  decorators: [
    moduleMetadata({
      imports: [UiModule],
    }),
  ],
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
    <ng-template #headerTemplate let-label let-idx="idx">
      <ng-container *ngIf="idx !== 3">{{ label }}</ng-container>
      <cvi-ng-screenreader-text [label]="label" *ngIf="idx === 3"></cvi-ng-screenreader-text>
    </ng-template>
  </cvi-ng-table-responsive>
  `,
});

export const WithCustomHeader = TemplateWithCustomHeader.bind({});
