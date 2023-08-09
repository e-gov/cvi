import { Meta, Story } from '@storybook/angular';
import notes from './notification-message.component.md';
import { NotificationMessageComponent } from './notification-message.component';

export default {
  title: 'Angular/Notification/Notification mesage',
  component: NotificationMessageComponent,
  parameters: { notes },
  args: {
    severity: 'info',
    size: 'regular',
    showIcon: true,
    showCloseButton: true,
    title: 'Notification title',
    contentPrefix: 'Teade',
    content:
      'Header and close buttons are not displayed if notification size is compact. Header and close buttons are not displayed if notification size is compact. Header and close buttons are not displayed if notification size is compact.',
  },
} as Meta<NotificationMessageComponent>;

const Template: Story<NotificationMessageComponent> = (
  args: NotificationMessageComponent
) => ({
  props: args,
  /* template */
  template: `
    <cvi-ng-notification-message [severity]="severity"
                         [size]="size"
                         [showIcon]="showIcon"
                         [showCloseButton]="showCloseButton"
                         [title]="title"
                         [iconName]="iconName"
                         [contentPrefix]="contentPrefix"
    >
      {{content}}
    </cvi-ng-notification-message>
  `,
});

export const Default = Template.bind({});

export const Success = Template.bind({});
Success.args = { severity: 'success' };

export const Warning = Template.bind({});
Warning.args = { severity: 'warning' };

export const Error = Template.bind({});
Error.args = { severity: 'error' };

export const Neutral = Template.bind({});
Neutral.args = { severity: 'neutral' };

export const WithCompactSize = Template.bind({});
WithCompactSize.args = { severity: 'neutral', size: 'compact' };

export const WithCompactSizeAndIcon = Template.bind({});
WithCompactSizeAndIcon.args = { severity: 'info', size: 'compact' };

export const WithCompactSizeAndCustomIcon = Template.bind({});
WithCompactSizeAndCustomIcon.args = {
  severity: 'neutral',
  size: 'compact',
  iconName: 'check_circle_outline',
};
