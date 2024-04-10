import { StoryObj, Meta } from '@storybook/angular';

import { FormMessageComponent } from './form-message.component';

export default {
  title: 'Angular/Form/Form message',
  component: FormMessageComponent,
  args: {
    displayMessage: true,
    severityLevel: 'warning',
    message: 'Error',
    title: 'Warning message',
  },
} as Meta<FormMessageComponent>;
type Story = StoryObj<FormMessageComponent>;

export const Default: Story = {
  render: (args: FormMessageComponent) => ({
    props: {
      ...args,
      selectItems: [
        'City of Sierra Nevada 1',
        'City of Bilbao 2',
        'valik 3 (cy test)',
        'Rest queen discovery stood far everything keep aside merely girl two making inch hard example remove steel right silent trunk central refused other 4',
        'City of London 5',
        'Option 6 with enough text to feed a saltwater crocodile',
        'Option 7 with enough text to feed a prehistoric jaguar',
      ],
    },
    template: `
      <cvi-ng-track [gap]="4" [flexIsMultiline]="true" verticalAlignment="top">
        <cvi-ng-form-item label="This is a test label. Scone – and it's gone! And once again" htmlId="input-id1">
          <cvi-ng-input htmlId="input-id1"
                        cviNgFormMessage
                        [displayMessage]="displayMessage"
                        [severityLevel]="severityLevel"
                        [message]="message"
                        [title]="title">
          </cvi-ng-input>
        </cvi-ng-form-item>
        <cvi-ng-form-item label="Input field 2 that shows a need in aligning the fields to top in containing track" htmlId="input-id2">
          <cvi-ng-input htmlId="input-id2"></cvi-ng-input>
        </cvi-ng-form-item>
        <cvi-ng-form-item label="This input is intentionally made erroneous" htmlId="input-id3">
          <cvi-ng-input htmlId="input-id3"
                        cviNgFormMessage
                        [displayMessage]="true"
                        severityLevel="error"
                        message="Hello, me is message"
                        title="Here comes daddy">
          </cvi-ng-input>
        </cvi-ng-form-item>
        <cvi-ng-form-item label="Datepicker"
                          htmlId="datepicker-id">
          <cvi-ng-datepicker htmlId="datepicker-id"
                            cviNgFormMessage
                            [severityLevel]="severityLevel"
                            [displayMessage]="displayMessage"
                            [message]="message"
                            [title]="title">
          </cvi-ng-datepicker>
        </cvi-ng-form-item>
        <cvi-ng-form-item label="Select"
                          labelId="select-label-id"
                          htmlId="select-id">
          <cvi-ng-select [items]="selectItems"
                        labelId="select-label-id"
                        htmlId="select-id"
                        cviNgFormMessage
                        severityLevel="warning"
                        [displayMessage]="true"
                        message="Some message"
                        title="Some title">
          </cvi-ng-select>
        </cvi-ng-form-item>
      </cvi-ng-track>
    `,
  }),
};

export const Warning: Story = {
  ...Default,
  args: {
    severityLevel: 'warning',
    title: 'Warning message',
  },
};

export const Error: Story = {
  ...Default,
  args: {
    severityLevel: 'error',
    title: 'Error message',
  },
};
