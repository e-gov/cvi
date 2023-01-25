import { Meta, Story } from '@storybook/angular';
import notes from './textarea.component.md';

import { TextareaComponent } from './textarea.component';

export default {
  title: 'Angular/Form/Textarea',
  parameters: { notes },
  component: TextareaComponent,
} as Meta;

const Template: Story<TextareaComponent> = (args: TextareaComponent) => ({
  props: args,
  template: `
    <cvi-ng-textarea [disabled]="disabled" [maxLength]="maxLength" [minRows]="minRows" [maxRows]="maxRows" [placeholder]="placeholder" [htmlId]="htmlId" [resizable]="resizable"></cvi-ng-textarea>
  `,
});

export const Default = Template.bind({});

const CharacterCounterTemplate: Story<TextareaComponent> = (
  args: TextareaComponent
) => ({
  props: args,
  template: `
    <cvi-ng-textarea cviNgCharacterCounter [maxChars]="30" [resizable]="resizable"></cvi-ng-textarea>
  `,
});

export const WithCharacterCounter = CharacterCounterTemplate.bind({});

const FormItemTemplate: Story<TextareaComponent> = (
  args: TextareaComponent
) => ({
  props: args,
  template: `
    <cvi-ng-form-item label="Some label"
                        [htmlId]="htmlId">
      <cvi-ng-textarea [htmlId]="htmlId" [resizable]="resizable"></cvi-ng-textarea>
    </cvi-ng-form-item>
  `,
});

export const WithFormItem = FormItemTemplate.bind({});
WithFormItem.args = {
  htmlId: 'some-item',
};
