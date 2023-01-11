import { Story, Meta } from '@storybook/angular';
import notes from './form-item.component.md';
import { FormItemComponent } from './form-item.component';

export default {
  title: 'Angular/Form item',
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
    <veera-ng-form-item [labelPosition]="labelPosition"
                        [isLabelHidden]="isLabelHidden"
                        [required]="required"
                        [label]="label"
                        [htmlId]="htmlId">
      <veera-ng-input [placeholder]="placeholder"
                      [htmlId]="htmlId">
      </veera-ng-input>
    </veera-ng-form-item>
  `,
});

export const Default = Template.bind({});

const TextareaTemplate: Story<FormItemComponent> = (
  args: FormItemComponent
) => ({
  props: args,
  /* template */
  template: `
    <veera-ng-form-item [labelPosition]="labelPosition"
                        [isLabelHidden]="isLabelHidden"
                        [required]="required"
                        [label]="label"
                        [htmlId]="htmlId">
      <veera-ng-textarea [placeholder]="placeholder"
                         [htmlId]="htmlId">
      </veera-ng-textarea>
    </veera-ng-form-item>
  `,
});

export const WithTextarea = TextareaTemplate.bind({});
