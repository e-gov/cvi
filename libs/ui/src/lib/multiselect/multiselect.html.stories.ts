import { Story, Meta } from '@storybook/angular';
import notes from './multiselect.html.md';

export default {
  title: 'HTML/Form/Multiselect',
  parameters: {
    notes,
    options: { selectedPanel: 'storybook/html/panel' },
  },
  argTypes: {
    containerWidth: {
      name: 'Container width',
      table: {
        category: 'Playground',
      },
      control: { type: 'number' },
    },
  },
  args: {
    items: [
      'City of Sierra Nevada 1',
      'City of Bilbao 2',
      'valik 3 (cy test)',
      'Rest queen discovery stood far everything keep aside merely girl two making inch hard example remove steel right silent trunk central refused other 4',
      'City of London 5',
      'Option 6 with enough text to feed a saltwater crocodile',
      'Option 7 with enough text to feed a prehistoric jaguar',
    ],
    placeholder: 'Otsi elementi',
    disabled: false,
    backgroundDisabled: false,
    containerWidth: 220,
    htmlId: 'some-select',
    labelId: 'some-select-label',
    loading: false,
    sortItemsFn: undefined,
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
  <div [ngStyle]="{'width.px': containerWidth}">
  <cvi-ng-form-item label="Some label" [htmlId]="htmlId" [labelId]="labelId">
    <cvi-ng-multiselect [items]="items"
                   [disabled]="disabled"
                   [labelId]="labelId"
                   [backgroundDisabled]="backgroundDisabled"
                   [placeholder]="placeholder"
                   [htmlId]="htmlId"></cvi-ng-multiselect>
  </cvi-ng-form-item>
</div>
  `,
});

export const Default = Template.bind({});
