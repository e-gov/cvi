import { Story, Meta } from '@storybook/angular';
import notes from './status-badge.component.md';
import { StatusBadgeComponent } from './status-badge.component';
import { storybookIconsNames } from '../icons/storybook-icons';

export default {
  title: 'Angular/Status badge',
  parameters: { notes, layout: 'centered' },
  argTypes: {
    severity: {
      name: 'Severity style',
      options: ['info', 'success', 'warning'],
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
    label: 'Pending review',
    withTooltip: false,
    tooltipText: 'some tooltip text',
    tooltipIcon: 'info',
  },
} as Meta<StatusBadgeComponent>;

const Template: Story<StatusBadgeComponent> = (args: StatusBadgeComponent) => ({
  props: args,
  template: `
    <cvi-ng-status-badge [severity]="severity" [label]="label" [withTooltip]="withTooltip" [tooltipText]="tooltipText" [tooltipIcon]="tooltipIcon">
    </cvi-ng-status-badge>
  `,
});

export const Default = Template.bind({});

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  withTooltip: true,
};
