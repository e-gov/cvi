import { Story, Meta } from '@storybook/angular';
import notes from './status-badge.component.md';
import { StatusBadgeComponent } from './status-badge.component';

export default {
  title: 'Angular/Status badge',
  parameters: { notes, layout: 'padded' },
  argTypes: {
    severity: {
      name: 'Severity style',
      options: ['info', 'success', 'warning'],
      control: { type: 'select' },
    },
  },
  args: {
    severity: 'info',
    label: 'Pending review',
  },
} as Meta<StatusBadgeComponent>;

const Template: Story<StatusBadgeComponent> = (args: StatusBadgeComponent) => ({
  props: args,
  template: `
    <veera-ng-status-badge [severity]="severity" [label]="label"></veera-ng-status-badge>
  `,
});

export const Default = Template.bind({});
