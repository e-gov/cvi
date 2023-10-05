import { Meta, moduleMetadata, Story } from '@storybook/angular';
import notes from './card.component.md';
import { UiModule } from '../ui.module';
import { CardComponent } from './card.component';

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
  title: 'Angular/Card',
  parameters: { notes },
  args: {
    headerLabels: ['Lõppkuupäev', 'Sündmus', 'Staatus'],
    data: [
      {
        event: 'Abielu sõlmimine',
        statusSeverity: 'info',
        lastChanged: '2021-07-20',
        button: 'Vaata',
        icon: 'arrow_b_right',
      },
      {
        event: 'Abielu sõlmimine',
        statusSeverity: 'error',
        lastChanged: '2018-07-17',
        button: 'Vaata',
        icon: 'arrow_b_right',
      },
    ],
    flexDirection: 'vertical',
    rowIconHeight: 14,
    rowGap: 1,
  },
  decorators: [
    moduleMetadata({
      imports: [UiModule],
    }),
  ],
} as Meta<CardComponent>;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: {
    ...args,
    getStatusBadgeLabelBySeverity,
  },
  /* template */
  template: `
  <cvi-ng-card [data]="data" [headers]="headerLabels">
    <ng-template #body let-headers="headers" let-row="cardBody">
      <cvi-ng-track [gap]="rowGap" [flexDirection]="flexDirection">
        <div class="cvi-card__header-cell">{{headers[0]}}</div>
        <div>{{row.event}}</div>
      </cvi-ng-track>
      <cvi-ng-track [gap]="rowGap" [flexDirection]="flexDirection">
        <div class="cvi-card__header-cell">{{headers[1]}}</div>
        <div>{{row.lastChanged}}</div>
      </cvi-ng-track>
      <cvi-ng-track [gap]="rowGap" [flexDirection]="flexDirection">
        <div class="cvi-card__header-cell">{{headers[2]}}</div>
        <div>
          <cvi-ng-status-badge [severity]="row.statusSeverity" [label]="getStatusBadgeLabelBySeverity(row.statusSeverity)" [withTooltip]="true"
                                 [hasBackground]="false"></cvi-ng-status-badge>
        </div>
      </cvi-ng-track>
      <cvi-ng-track [gap]="rowGap">
        <cvi-ng-button [appearance]="'text'" class="cvi-card__text-button">
          <cvi-ng-track horizontalAlignment="center" verticalAlignment="center">
            <cvi-ng-labeled-icon [iconPosition]="'after'" [name]="row.icon" [iconHeight]="rowIconHeight">
                    {{ row.button }}
              </cvi-ng-labeled-icon>
            </cvi-ng-track>
        </cvi-ng-button>
      </cvi-ng-track>
    </ng-template>
  </cvi-ng-card>
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
