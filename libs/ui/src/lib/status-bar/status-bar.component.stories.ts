import { Story, Meta } from '@storybook/angular';
import notes from './status-bar.component.md';
import { StatusBarComponent } from './status-bar.component';
import { storybookIconsNames } from '../icons/storybook-icons';

export default {
  title: 'Angular/Status bar',
  parameters: { notes, layout: 'padded' },
  argTypes: {
    severity: {
      name: 'Severity style',
      options: ['info', 'success', 'error'],
      control: { type: 'select' },
    },
    tooltipText: {
      if: { arg: 'withTooltip', eq: true },
    },
    tooltipIcon: {
      options: storybookIconsNames,
      control: { type: 'select' },
      if: { arg: 'withTooltip', eq: true },
    },
  },
  args: {
    severity: 'info',
    iconName: 'calendar',
    content:
      'Header and close buttons are not displayed if notification size is compact. Header and close buttons are not displayed if notification size is compact. Header and close buttons are not displayed if notification size is compact.',
  },
} as Meta<StatusBarComponent>;

const Template: Story<StatusBarComponent> = (args: StatusBarComponent) => ({
  props: args,
  template: `
    <cvi-ng-status-bar [iconName]="iconName" [severity]="severity" >
      <cvi-ng-track layout="flex" horizontalAlignment="justify">
      <cvi-ng-track layout="flex" horizontalAlignment="left" verticalAlignment="top" flexDirection="vertical">
          <cvi-ng-track layout="flex" horizontalAlignment="justify" verticalAlignment="center" [gap]="4">
              <div>01.03.2023</div>
              <cvi-ng-button appearance="text">
              KMD käibedeklaratsioon
            </cvi-ng-button>
          </cvi-ng-track>
          <cvi-ng-track layout="flex" horizontalAlignment="justify" [gap]="4">
            <div>23:59</div>
            <div>Maksu- ja Tolliamet</div>
          </cvi-ng-track>
        </cvi-ng-track>
        <cvi-ng-track layout="flex" horizontalAlignment="right" verticalAlignment="center" [gap]="6">
          <cvi-ng-track layout="flex" horizontalAlignment="center" verticalAlignment="top" [gap]="4" flexDirection="vertical">
          <div>01.03.2023</div>
          <cvi-ng-track layout="flex" horizontalAlignment="justify" verticalAlignment="center" [gap]="4" [ngStyle]="{'width': '100%'}">
          Tasutud
          <cvi-ng-icon
          [name]="'info'"
          [height]="'24'"
          [cviNgTooltip]="'This tooltip is displayed when hovering, if you move mouse out of element then tooltip dissapears'"
        ></cvi-ng-icon>
          </cvi-ng-track>
          <cvi-ng-track layout="flex" horizontalAlignment="justify" verticalAlignment="center" [gap]="4">
          138.0000$
          <cvi-ng-icon
          [name]="'info'"
          [height]="'24'"
          [cviNgTooltip]="'This tooltip is displayed when hovering, if you move mouse out of element then tooltip dissapears'"
        ></cvi-ng-icon>
          </cvi-ng-track>
          </cvi-ng-track>
          <cvi-ng-button appearance="secondary">
          Lisainfo
        </cvi-ng-button>
        </cvi-ng-track>
      </cvi-ng-track>
    </cvi-ng-status-bar>
  `,
});

export const Default = Template.bind({});
