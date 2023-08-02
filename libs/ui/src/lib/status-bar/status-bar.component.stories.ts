import { Story, Meta } from '@storybook/angular';
import notes from './status-bar.component.md';
import { StatusBarComponent } from './status-bar.component';
import { storybookIconsNames } from '../icons/storybook-icons';

export default {
  title: 'Angular/Status bar',
  parameters: { notes, layout: 'centered' },
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
        <div>
          <cvi-ng-track layout="flex" horizontalAlignment="justify" verticalAlignment="center">
              <div>01.03.2023</div>
              <div><b>KMD käibedeklaratsioon</b></div>
          </cvi-ng-track>
          <cvi-ng-track layout="flex" horizontalAlignment="justify">
            <div>23:59</div>
            <div>Maksu- ja Tolliamet</div>
          </cvi-ng-track>
        </div>
        <div>
          <div>01.03.2023</div>
          <cvi-ng-track layout="flex" horizontalAlignment="center" verticalAlignment="center">
          <div>Tasutud</div>
          <div>Lisainfo</div>
          </cvi-ng-track>
          <div>138.00 £</div>
        </div>
      </cvi-ng-track>
    </cvi-ng-status-bar>
  `,
});

export const Default = Template.bind({});
