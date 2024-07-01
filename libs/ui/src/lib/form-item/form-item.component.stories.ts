import { Meta, componentWrapperDecorator } from '@storybook/angular';
import notes from './form-item.component.md?raw';
import { FormItemComponent } from './form-item.component';

const wrapperDecorators = [
  componentWrapperDecorator(FormItemComponent, ({ args }) => {
    return args;
  }),
];

export default {
  title: 'Angular/Form/Form item',
  component: FormItemComponent,
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {
    displayMessage: {
      name: 'Show form message?',
      table: {
        category: 'Playground',
      },
    },
    title: {
      name: 'Form message title',
      if: { arg: 'displayMessage', eq: true },
      table: {
        category: 'Playground',
      },
    },
    message: {
      name: 'Form message text',
      if: { arg: 'displayMessage', eq: true },
      table: {
        category: 'Playground',
      },
    },
    severityLevel: {
      name: 'Form message severity level',
      if: { arg: 'displayMessage', eq: true },
      options: ['warning', 'error'],
      control: { type: 'inline-radio' },
      table: {
        category: 'Playground',
      },
    },
  },
  args: {
    htmlId: 'fksd4kfds',
    label: 'Example label',
    placeholder: 'Placeholder text...',
    displayMessage: false,
    message: 'Error',
    severityLevel: 'warning',
    title: 'Warning message',
  },
} as Meta<FormItemComponent>;

export const Default = {
  render: (args: FormItemComponent) => ({
    props: args,
    /* template */
    template: `
      <cvi-ng-input [placeholder]="placeholder" [htmlId]="htmlId"></cvi-ng-input>
    `,
  }),
  decorators: wrapperDecorators,
};

export const WithTextarea = {
  render: (args: FormItemComponent) => ({
    props: args,
    /* template */
    template: `
      <cvi-ng-textarea [placeholder]="placeholder" [htmlId]="htmlId"></cvi-ng-textarea>
    `,
  }),
  decorators: wrapperDecorators,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const WithInlineFormElements = {
  render: (args: FormItemComponent) => ({
    props: {
      ...args,
      items: [
        'City of Sierra Nevada 1',
        'City of Bilbao 2',
        'valik 3 (cy test)',
        'Rest queen discovery stood far everything keep aside merely girl two making inch hard example remove steel right silent trunk central refused other 4',
        'City of London 5',
        'Option 6 with enough text to feed a saltwater crocodile',
        'Option 7 with enough text to feed a prehistoric jaguar',
      ],
    },
    /* template */
    template: `
      <cvi-ng-storybook-note>
        The goal of this story is to verify that height of inline form components is the same.
      </cvi-ng-storybook-note>
      <cvi-ng-track [gap]="4">
        <cvi-ng-form-item [labelPosition]="labelPosition"
                          [isLabelHidden]="isLabelHidden"
                          [required]="required"
                          [label]="label"
                          [labelId]="labelId"
                          [htmlId]="htmlId">
          <cvi-ng-input [placeholder]="placeholder"
                        [htmlId]="htmlId"
                        cviNgFormMessage
                        [displayMessage]="displayMessage"
                        [severityLevel]="severityLevel"
                        [message]="message"
                        [title]="title">
          </cvi-ng-input>
        </cvi-ng-form-item>
        <cvi-ng-form-item label="Datepicker"
                          htmlId="datepicker-id">
          <cvi-ng-datepicker placeholder="Pick a date"
                            htmlId="datepicker-id"
                            cviNgFormMessage
                            [severityLevel]="severityLevel"
                            [displayMessage] ="displayMessage"
                            [message]="message"
                            [title]="title">
          </cvi-ng-datepicker>
        </cvi-ng-form-item>
        <cvi-ng-form-item label="Select"
                          labelId="select-label-id"
                          htmlId="select-id"
                          [ngStyle]="{'width.px': 220}">
          <cvi-ng-select [items]="items"
                        labelId="select-label-id"
                        htmlId="select-id"
                        cviNgFormMessage
                        [severityLevel]="severityLevel"
                        [displayMessage] ="displayMessage"
                        [message]="message"
                        [title]="title">
          </cvi-ng-select>
        </cvi-ng-form-item>
      </cvi-ng-track>
    `,
  }),
};
