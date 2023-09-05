import { Story, Meta } from '@storybook/angular';

import { FormMessageComponent } from './form-message.component';

export default {
  title: 'Angular/Form/FormMessage',
  component: FormMessageComponent,
  args: {
    displayMessage: true,
    severityLevel: 'warning',
    message: 'Error',
    title: 'Warning message',
  },
} as Meta<FormMessageComponent>;

const Template: Story<FormMessageComponent> = (args: FormMessageComponent) => ({
  props: args,
  /* template */
  template: `
     <cvi-ng-track [gap]="4">
      <cvi-ng-form-item label="Input field" htmlId="input-id">
        <cvi-ng-input htmlId="input-id"
                      cviNgFormMessage
                      [displayMessage]="displayMessage"
                      [severityLevel]="severityLevel"
                      [message]="message"
                      [title]="title">
        </cvi-ng-input>
      </cvi-ng-form-item>
      <cvi-ng-form-item label="Datepicker"
                        htmlId="datepicker-id">
        <cvi-ng-datepicker htmlId="datepicker-id"
                           cviNgFormMessage
                           [severityLevel]="severityLevel"
                           [displayMessage] ="displayMessage"
                           [message]="message"
                           [title]="title">
        </cvi-ng-datepicker>
      </cvi-ng-form-item>
    </cvi-ng-track>
  `,
});

export const Default = Template.bind({});

export const Warning = Template.bind({});
Warning.args = {
  severityLevel: 'warning',
  title: 'Warning message',
};
export const Error = Template.bind({});
Error.args = {
  severityLevel: 'error',
  title: 'Error message',
};
