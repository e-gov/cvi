import { Story, Meta } from '@storybook/angular';
import notes from './form-item.component.md';
import { FormItemComponent } from './form-item.component';

export default {
  title: 'Angular/Form/Form item',
  component: FormItemComponent,
  parameters: { notes },
  args: {
    htmlId: 'fksd4kfds',
    label: 'Example label',
    placeholder: 'Placeholder text...',
  },
} as Meta<FormItemComponent>;

const Template: Story<FormItemComponent> = (args: FormItemComponent) => ({
  props: args,
  /* template */
  template: `
    <cvi-ng-form-item [labelPosition]="labelPosition"
                      [isLabelHidden]="isLabelHidden"
                      [required]="required"
                      [label]="label"
                      [labelId]="labelId"
                      [htmlId]="htmlId">
      <cvi-ng-input [placeholder]="placeholder"
                    [htmlId]="htmlId">
      </cvi-ng-input>
    </cvi-ng-form-item>
  `,
});

export const Default = Template.bind({});

const WithTextareaTemplate: Story<FormItemComponent> = (
  args: FormItemComponent
) => ({
  props: args,
  /* template */
  template: `
    <cvi-ng-form-item [labelPosition]="labelPosition"
                      [isLabelHidden]="isLabelHidden"
                      [required]="required"
                      [label]="label"
                      [labelId]="labelId"
                      [htmlId]="htmlId">
      <cvi-ng-textarea [placeholder]="placeholder"
                       [htmlId]="htmlId">
      </cvi-ng-textarea>
    </cvi-ng-form-item>
  `,
});

export const WithTextarea = WithTextareaTemplate.bind({});
WithTextarea.parameters = {
  chromatic: { disableSnapshot: true },
};

const WithInlineFormElementsTemplate: Story<FormItemComponent> = (
  args: FormItemComponent
) => ({
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
                      [htmlId]="htmlId">
        </cvi-ng-input>
      </cvi-ng-form-item>
      <cvi-ng-form-item label="Datepicker"
                        htmlId="datepicker-id">
        <cvi-ng-datepicker placeholder="Pick a date"
                           htmlId="datepicker-id">
        </cvi-ng-datepicker>
      </cvi-ng-form-item>
      <cvi-ng-form-item label="Select"
                        labelId="select-label-id"
                        htmlId="select-id"
                        [ngStyle]="{'width.px': 220}">
        <cvi-ng-select [items]="items"
                       labelId="select-label-id"
                       htmlId="select-id">
        </cvi-ng-select>
      </cvi-ng-form-item>
    </cvi-ng-track>
  `,
});

export const WithInlineFormElements = WithInlineFormElementsTemplate.bind({});
