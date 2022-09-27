import { Meta, Story } from '@storybook/angular';
import { NotificationComponent } from './notification.component';
import notes from './notification.component.md';

export default {
  title: 'Angular/Notification',
  component: NotificationComponent,
  parameters: { notes },
  args: {
    severity: 'info',
    size: 'regular',
    showHeaderIcon: true,
    showCloseButton: true,
    title: 'Notification title',
    content:
      'Header icon and close buttons are not displayed if notification size is compact',
    contentIconName: '',
  },
} as Meta<NotificationComponent>;

const Template: Story<NotificationComponent> = (
  args: NotificationComponent
) => ({
  props: args,
  /* template */
  template: `
    <veera-ng-notification [severity]="severity"
                           [size]="size"
                           [showHeaderIcon]="showHeaderIcon"
                           [showCloseButton]="showCloseButton"
                           [title]="title"
                           [contentIconName]="contentIconName"
    >
      {{content}}
    </veera-ng-notification>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Success = Template.bind({});
Success.args = { severity: 'success' };

export const Warning = Template.bind({});
Warning.args = { severity: 'warning' };

export const Error = Template.bind({});
Error.args = { severity: 'error' };

export const Neutral = Template.bind({});
Neutral.args = { severity: 'neutral' };

export const Compact = Template.bind({});
Compact.args = { size: 'compact' };

export const CompactWithIcon = Template.bind({});
CompactWithIcon.args = {
  severity: 'neutral',
  size: 'compact',
  contentIconName: 'arrow_a_left',
};
