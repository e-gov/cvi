import { Meta, Story } from '@storybook/angular';
import { RadioButtonComponent } from './radio-button.component';

export default {
  title: 'Angular/Radio button',
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
    <veera-ng-radio-button [name]="name"
                           [value]="value"
                           [label]="label"
    ></veera-ng-radio-button>
  `,
});

export const Default = Template.bind({});
Default.args = {};
