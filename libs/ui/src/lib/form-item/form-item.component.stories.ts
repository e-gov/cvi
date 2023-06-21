import { StoryFn, Meta } from '@storybook/angular';
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

const Template: StoryFn<FormItemComponent> = (args: FormItemComponent) => ({
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

export const Default = {
  render: Template,
};

const WithTextareaTemplate: StoryFn<FormItemComponent> = (
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

export const WithTextarea = {
  render: WithTextareaTemplate,

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};
