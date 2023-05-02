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
