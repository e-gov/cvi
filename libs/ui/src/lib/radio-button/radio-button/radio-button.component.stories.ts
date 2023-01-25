import { Meta, Story } from '@storybook/angular';
import { RadioButtonComponent } from './radio-button.component';

export default {
  title: 'Angular/Form/Radio button',
  component: RadioButtonComponent,
  args: {
    name: 'Name',
    value: 'Value',
    label: 'Label',
  },
} as Meta<RadioButtonComponent>;

const Template: Story<RadioButtonComponent> = (args: RadioButtonComponent) => ({
  props: args,
  /* template */
  template: `
    <cvi-ng-radio-button [name]="name"
                           [value]="value"
                           [label]="label"
    ></cvi-ng-radio-button>
  `,
});

export const Default = Template.bind({});
Default.args = {};
