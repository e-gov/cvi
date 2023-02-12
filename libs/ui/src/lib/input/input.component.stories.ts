import { Story, Meta, moduleMetadata } from '@storybook/angular';
import notes from './input.component.md';
import { InputComponent } from './input.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { storybookIconsNames } from '../icons/storybook-icons';
import { UiModule } from '../ui.module';

export default {
  title: 'Angular/Form/Input',
  decorators: [
    moduleMetadata({
      imports: [UiModule, ReactiveFormsModule],
    }),
  ],
  parameters: { notes },
  argTypes: {
    suffixIconName: {
      name: 'Icon',
      options: storybookIconsNames,
      control: { type: 'select' },
    },
  },
  args: {
    placeholder: 'Username',
    disabled: false,
    htmlId: 'some-input',
  },
} as Meta<InputComponent>;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
  template: `
    <cvi-ng-input [placeholder]="placeholder"
                    [disabled]="disabled"
                    [suffixIconName]="suffixIconName"
                    [htmlId]="htmlId"></cvi-ng-input>
  `,
});

export const Default = Template.bind({});

export const WithSuffixIcon = Template.bind({});
WithSuffixIcon.args = {
  suffixIconName: 'loupe',
};

const FormTemplate: Story<InputComponent> = (args: InputComponent) => {
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
      selectedValue: selectedValue,
    },
    template: `
      <div [formGroup]="form">
        <cvi-ng-input formControlName="item"
                        [placeholder]="placeholder"
                        [disabled]="disabled"
                        [htmlId]="htmlId"></cvi-ng-input>
        <div>Inserted value: {{selectedValue()}}</div>
      </div>
    `,
  };
};
export const WithFormGroup = FormTemplate.bind({});
WithFormGroup.storyName = 'With FormGroup';

const CharacterCounterTemplate: Story<InputComponent> = (
  args: InputComponent
) => ({
  props: args,
  template: `
    <cvi-ng-input [placeholder]="placeholder"
                    [disabled]="disabled"
                    [htmlId]="htmlId"
                    cviNgCharacterCounter
                    [maxChars]="10"></cvi-ng-input>
  `,
});

export const WithCharacterCounter = CharacterCounterTemplate.bind({});

const FormItemTemplate: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
  template: `
    <cvi-ng-form-item label="Some label"
                        [htmlId]="htmlId">
      <cvi-ng-input [placeholder]="placeholder"
                      [disabled]="disabled"
                      [htmlId]="htmlId"></cvi-ng-input>
    </cvi-ng-form-item>
  `,
});

export const WithFormItem = FormItemTemplate.bind({});
WithFormItem.args = {
  htmlId: 'some-item',
};
