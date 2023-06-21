import { Meta, StoryFn } from '@storybook/angular';
import { NotificationComponent } from './notification.component';
import notes from './notification.component.md';

export default {
  title: 'Angular/Notification',
  component: NotificationComponent,
  parameters: { notes },
  args: {
    severity: 'info',
    size: 'regular',
    showIcon: true,
    showCloseButton: true,
    title: 'Notification title',
    content:
      'Header and close buttons are not displayed if notification size is compact. Header and close buttons are not displayed if notification size is compact. Header and close buttons are not displayed if notification size is compact.',
  },
} as Meta<NotificationComponent>;

const Template: StoryFn<NotificationComponent> = (
  args: NotificationComponent
) => ({
  props: args,
  /* template */
  template: `
    <cvi-ng-notification [severity]="severity"
                         [size]="size"
                         [showIcon]="showIcon"
                         [showCloseButton]="showCloseButton"
                         [title]="title"
                         [iconName]="iconName"
    >
      {{content}}
    </cvi-ng-notification>
  `,
});

export const Default = {
  render: Template,
};

export const Success = {
  render: Template,
  args: { severity: 'success' },
};

export const Warning = {
  render: Template,
  args: { severity: 'warning' },
};

export const Error = {
  render: Template,
  args: { severity: 'error' },
};

export const Neutral = {
  render: Template,
  args: { severity: 'neutral' },
};

export const WithCompactSize = {
  render: Template,
  args: { severity: 'neutral', size: 'compact' },
};

export const WithCompactSizeAndIcon = {
  render: Template,
  args: { severity: 'info', size: 'compact' },
};

export const WithCompactSizeAndCustomIcon = {
  render: Template,

  args: {
    severity: 'neutral',
    size: 'compact',
    iconName: 'check_circle_outline',
  },
};
