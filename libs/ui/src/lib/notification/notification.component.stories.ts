import { Meta, Story } from '@storybook/angular';
import { NotificationComponent } from './notification.component';
import notes from './notification.component.md';

export default {
  title: 'Angular/Notification',
  component: NotificationComponent,
  parameters: { notes },
  args: {
    type: 'info',
    showHeaderIcon: true,
    showCloseButton: true,
    header: 'Notification header',
    content:
      'By default header icon and close buttons are displayed except when notification type is compact',
  },
} as Meta<NotificationComponent>;

const Template: Story<NotificationComponent> = (
  args: NotificationComponent
) => ({
  props: args,
  /* template */
  template: `
    <veera-ng-notification [type]="type"
                           [showHeaderIcon]="showHeaderIcon"
                           [showCloseButton]="showCloseButton"
                           [header]="header"
    >
      {{content}}
    </veera-ng-notification>
  `,
});

export const Default = Template.bind({});
Default.args = {};
