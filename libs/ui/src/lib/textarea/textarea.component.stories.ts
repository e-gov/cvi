import { Meta, moduleMetadata, Story } from '@storybook/angular';
import notes from './textarea.component.md';

import { TextareaComponent } from './textarea.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui.module';

export default {
  title: 'Angular/Form/Textarea',
  parameters: {
    notes,
    // Disabling Chromatic because cvi-ng-textarea triggers a visual change on every build
    chromatic: { disableSnapshot: true },
  },
  decorators: [
    moduleMetadata({
      imports: [UiModule, ReactiveFormsModule],
    }),
  ],
  args: {
    placeholder: 'Placeholder',
    disabled: false,
    resizable: true,
    maxLength: 2000,
    minRows: 3,
    htmlId: 'some-textarea',
  },
} as Meta<TextareaComponent>;

const Template: Story<TextareaComponent> = (args: TextareaComponent) => ({
  props: args,
  /* template */
  template: `
    <cvi-ng-form-item label="Some label" [htmlId]="htmlId">
      <cvi-ng-textarea [disabled]="disabled" [maxLength]="maxLength" [minRows]="minRows" [maxRows]="maxRows" [placeholder]="placeholder" [htmlId]="htmlId" [resizable]="resizable"></cvi-ng-textarea>
    </cvi-ng-form-item>
  `,
});

export const Default = Template.bind({});

const CharacterCounterTemplate: Story<TextareaComponent> = (
  args: TextareaComponent
) => ({
  props: args,
  /* template */
  template: `
    <cvi-ng-form-item label="Some label" [htmlId]="htmlId">
      <cvi-ng-textarea cviNgCharacterCounter [maxChars]="30" [resizable]="resizable" [htmlId]="htmlId"></cvi-ng-textarea>
    </cvi-ng-form-item>
  `,
});

export const WithCharacterCounter = CharacterCounterTemplate.bind({});

const FormGroupTemplate: Story<TextareaComponent> = (
  args: TextareaComponent
) => {
  const form = new FormGroup({
    item: new FormControl('initial value'),
  });

  function selectedValue() {
    return form.controls.item.value;
  }

  return {
    props: {
      ...args,
      form: form,
      minRows: 3,
      selectedValue: selectedValue,
    },
    /* template */
    template: `
      <div [formGroup]="form">
        <cvi-ng-form-item label="Some label" [htmlId]="htmlId">
          <cvi-ng-textarea formControlName="item"
                          [placeholder]="placeholder"
                          [disabled]="disabled"
                          [maxLength]="maxLength"
                          [minRows]="minRows"
                          [maxRows]="maxRows"
                          [htmlId]="htmlId"
                          [resizable]="resizable">
          </cvi-ng-textarea>
        </cvi-ng-form-item>
        <div>Inserted value: {{selectedValue()}}</div>
      </div>
    `,
  };
};
export const WithFormGroup = FormGroupTemplate.bind({});
WithFormGroup.storyName = 'With FormGroup';
