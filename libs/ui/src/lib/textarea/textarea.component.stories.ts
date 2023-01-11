import { Meta, Story } from '@storybook/angular';
import notes from './textarea.component.md';

import { TextareaComponent } from './textarea.component';

export default {
  title: 'Angular/Textarea',
  parameters: { notes },
  component: TextareaComponent,
} as Meta;

const Template: Story<TextareaComponent> = (args: TextareaComponent) => ({
  props: args,
  template: `
    <veera-ng-textarea [disabled]="disabled" [maxLength]="maxLength" [minRows]="minRows" [maxRows]="maxRows" [placeholder]="placeholder" [htmlId]="htmlId"></veera-ng-textarea>
  `,
});

export const Default = Template.bind({});

const CharacterCounterTemplate: Story<TextareaComponent> = (
  args: TextareaComponent
) => ({
  props: args,
  template: `
    <veera-ng-textarea veeraNgCharacterCounter [maxChars]="30"></veera-ng-textarea>
  `,
});

export const WithCharacterCounter = CharacterCounterTemplate.bind({});

const FormItemTemplate: Story<TextareaComponent> = (
  args: TextareaComponent
) => ({
  props: args,
  template: `
    <veera-ng-form-item label="Some label"
                        [htmlId]="htmlId">
      <veera-ng-textarea [htmlId]="htmlId"></veera-ng-textarea>
    </veera-ng-form-item>
  `,
});

export const WithFormItem = FormItemTemplate.bind({});
WithFormItem.args = {
  htmlId: 'some-item',
};
