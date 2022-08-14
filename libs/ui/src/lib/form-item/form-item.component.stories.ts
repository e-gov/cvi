import { Story, Meta } from '@storybook/angular';
import notes from './form-item.md';
import { FormItemComponent } from './form-item.component';

export default {
  title: 'Angular/Form item',
  component: FormItemComponent,
  parameters: { notes },
  args: {
    htmlId: 'fksd4kfds',
    label: 'Your email'
  }
} as Meta<FormItemComponent>;

const Template: Story<FormItemComponent> = (args: FormItemComponent) => ({
  props: args,
  /* template */
  template: `
    <ria-poc-form-item [labelPosition]="labelPosition" [isLabelHidden]="isLabelHidden" [required]="required" [label]="label" [htmlId]="htmlId">
      <ria-poc-input [htmlId]="htmlId"></ria-poc-input>
    </ria-poc-form-item>
  `
});

export const Default = Template.bind({});
Default.args = {};
