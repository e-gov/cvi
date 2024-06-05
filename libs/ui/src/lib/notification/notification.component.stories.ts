import { Meta } from '@storybook/angular';
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

export const Default = {
  render: (args: NotificationComponent) => ({
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
  }),
};

export const HtmlSection = {
  render: (args: NotificationComponent) => ({
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
      <cvi-ng-html-section html="{{content}}"></cvi-ng-html-section>
      </cvi-ng-notification>
    `,
  }),
};

export const Success = {
  ...Default,
  args: { severity: 'success' },
};

export const Warning = {
  ...Default,
  args: { severity: 'warning' },
};

export const Error = {
  ...Default,
  args: { severity: 'error' },
};

export const Neutral = {
  ...Default,
  args: { severity: 'neutral' },
};

export const WithCompactSize = {
  ...Default,
  args: { severity: 'neutral', size: 'compact' },
};

export const WithCompactSizeAndIcon = {
  ...Default,
  args: { severity: 'info', size: 'compact' },
};

export const WithCompactSizeAndCustomIcon = {
  ...Default,
  args: {
    severity: 'neutral',
    size: 'compact',
    iconName: 'check_circle_outline',
  },
};
export const WithBoldTextAndLink = {
  ...HtmlSection,
  args: {
    severity: 'neutral',
    size: 'compact',
    content: "<b>Bold text</b> and link <a href=\"https://www.jenkins.io/\" target=\"_blank\" class=\"external-link\">Click here</a>"
  },
};
