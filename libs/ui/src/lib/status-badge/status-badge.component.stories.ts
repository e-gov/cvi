import { Meta } from '@storybook/angular';
import notes from './status-badge.component.md';
import { StatusBadgeComponent } from './status-badge.component';
import { storybookIconsNames } from '../icons/storybook-icons';

export default {
  title: 'Angular/Status badge',
  component: StatusBadgeComponent,
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

export const Default = {};

export const WithTooltip = {
  ...Default,
  args: {
    withTooltip: true,
  },
};
