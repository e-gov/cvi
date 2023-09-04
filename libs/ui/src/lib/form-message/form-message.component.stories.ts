import { Story, Meta } from '@storybook/angular';

import { FormMessageComponent } from './form-message.component';

export default {
  title: 'Angular/Form/FormMessage',
  component: FormMessageComponent,
  args: {
    display: true,
    severity: 'warning',
    message: 'Error',
    label: '',
  },
} as Meta<FormMessageComponent>;

const Template: Story<FormMessageComponent> = (args: FormMessageComponent) => ({
  props: args,
  /* template */
  template: `
     <cvi-ng-track [gap]="4">
      <cvi-ng-form-item label="Input field"
                        htmlId="input-id">
        <cvi-ng-input [placeholder]="placeholder"
                      [htmlId]="htmlId"
                      cviNgFormMessage
                      [display] ="display"
                      [severityLevel]="severity"
                      [message]="message"
                      [errorLabel]="label">
        </cvi-ng-input>
      </cvi-ng-form-item>
      <cvi-ng-form-item label="Datepicker"
                        htmlId="datepicker-id">
        <cvi-ng-datepicker placeholder="Pick a date"
                           htmlId="datepicker-id"
                           cviNgFormMessage
                           [severityLevel]="severity"
                           [display] ="display"
                           [message]="message"
                           [errorLabel]="label">
        </cvi-ng-datepicker>
      </cvi-ng-form-item>
    </cvi-ng-track>
  `,
});

export const Default = Template.bind({});

export const Warning = Template.bind({});
Warning.args = {
  severity: 'warning',
};
export const Error = Template.bind({});
Error.args = {
  severity: 'error',
};
