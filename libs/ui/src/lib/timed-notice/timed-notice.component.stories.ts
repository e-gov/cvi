import { StoryObj, Meta } from '@storybook/angular';
import notes from './timed-notice.component.md';
import { TimedNoticeComponent } from './timed-notice.component';

export default {
  title: 'Angular/Timed Notice',
  parameters: { notes, layout: 'padded' },
  argTypes: {
    severity: {
      name: 'Severity style',
      options: ['info', 'success', 'error'],
      control: { type: 'select' },
    },
  },
  args: {
    severity: 'info',
    title: 'KMD Käibedeklaratsioon',
    titleHref: 'https://www.eesti.ee',
    dueDate: '01.03.2023',
    time: '23:59',
    asideItems: [
      {
        label: '138€',
        iconName: 'info',
        tooltipLabel: 'Hey this is the tooltip on the tabletop',
      },
    ],
  },
} as Meta<TimedNoticeComponent>;
type Story = StoryObj<TimedNoticeComponent>;

export const Default: Story = {
  render: (args: TimedNoticeComponent) => ({
    props: args,
    /* template */
    template: `
      <cvi-ng-timed-notice [iconName]="iconName" [severity]="severity" [asideItems]="asideItems" title="KMD Käibedeklaratsioon" titleHref="https://www.eesti.ee" dueDate="01.03.2023" time="22:59">
        <cvi-ng-track cvi-ng-timed-notice="subtitle" layout="flex" [gap]="2">
          <div>Maksu- ja tolliamet</div>
          <cvi-ng-icon name="warning_amber" height="20"></cvi-ng-icon>
        </cvi-ng-track>
        <cvi-ng-button cvi-timed-notice="action" size="s" [iconName]="'exit_to_app'" [iconPosition]="'after'" [iconHeight]="24">
          kohustust täitma
        </cvi-ng-button>
      </cvi-ng-timed-notice>
    `,
  }),
};

export const Error: Story = {
  render: (args: TimedNoticeComponent) => ({
    props: args,
    /* template */
    template: `
      <cvi-ng-timed-notice [iconName]="iconName" [severity]="'error'" title="KMD Käibedeklaratsioon" titleHref="https://www.eesti.ee" dueDate="01.03.2023" time="22:59" [asideItems]="asideItems">
        <cvi-ng-track cvi-ng-timed-notice="subtitle" layout="flex" [gap]="2">
          <div>Maksu- ja tolliamet</div>
          <cvi-ng-icon name="warning_amber" height="20"></cvi-ng-icon>
        </cvi-ng-track>
        <cvi-ng-track cvi-ng-timed-notice="aside" layout="flex" horizontalAlignment="justify" verticalAlignment="center" [gap]="4">
          <div>138.00€</div>
          <cvi-ng-icon [name]="'info'" [height]="'24'" [cviNgTooltip]="'some tooltip info'"></cvi-ng-icon>
        </cvi-ng-track>
        <cvi-ng-button cvi-timed-notice="action" size="s" [iconName]="'exit_to_app'" [iconPosition]="'after'" [iconHeight]="24">
          kohustust täitma
        </cvi-ng-button>
      </cvi-ng-timed-notice>
    `,
  }),
};

export const Success: Story = {
  render: (args: TimedNoticeComponent) => ({
    props: args,
    /* template */
    template: `
      <cvi-ng-timed-notice [iconName]="iconName" [severity]="'success'" title="KMD Käibedeklaratsioon" titleHref="https://www.eesti.ee" dueDate="01.03.2023" time="22:59" [asideItems]="asideItems">
        <cvi-ng-track cvi-ng-timed-notice="subtitle" layout="flex" [gap]="2">
          <div>Maksu- ja tolliamet</div>
          <cvi-ng-icon name="warning_amber" height="20"></cvi-ng-icon>
        </cvi-ng-track>
        <cvi-ng-button size="s" cvi-timed-notice="action" appearance="secondary">Lisainfo</cvi-ng-button>
      </cvi-ng-timed-notice>
    `,
  }),
};

export const WithMultipleAsideItems: Story = {
  render: (args: TimedNoticeComponent) => ({
    props: args,
    /* template */
    template: `
      <cvi-ng-timed-notice [iconName]="iconName" [severity]="'info'" title="KMD Käibedeklaratsioon" titleHref="https://www.eesti.ee" dueDate="01.03.2023" time="22:59" [asideItems]="asideItems">
        <cvi-ng-track cvi-ng-timed-notice="subtitle" layout="flex" [gap]="2">
          <div>Maksu- ja tolliamet</div>
          <cvi-ng-icon name="warning_amber" height="20"></cvi-ng-icon>
        </cvi-ng-track>
        <cvi-ng-button cvi-timed-notice="action" size="s" [iconName]="'exit_to_app'" [iconPosition]="'after'" [iconHeight]="24">
          kohustust täitma
        </cvi-ng-button>
      </cvi-ng-timed-notice>
    `,
  }),
  args: {
    asideItems: [
      {
        label: '28.02.2023',
      },
      {
        label: 'Tasutud',
        iconName: 'info',
        tooltipLabel: 'Some other tooltip',
      },
      {
        label: '138€',
        iconName: 'info',
        tooltipLabel: 'Some other tooltip yet',
      },
    ],
  },
};
