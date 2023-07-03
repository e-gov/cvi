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
  /* template */
  template: `
    <cvi-ng-form-item label="Some label" [htmlId]="htmlId">
      <cvi-ng-input [placeholder]="placeholder"
                    [disabled]="disabled"
                    [suffixIconName]="suffixIconName"
                    [htmlId]="htmlId"></cvi-ng-input>
    </cvi-ng-form-item>
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

  function onSubmit(formValue: any) {
    console.log(formValue);
  }

  function disableInput() {
    form.controls.item.disable();
  }

  function enableInput() {
    form.controls.item.enable();
  }

  return {
    props: {
      ...args,
      form,
      selectedValue,
      onSubmit,
      disableInput,
      enableInput,
    },
    /* template */
    template: `
      <form [formGroup]="form" (ngSubmit)="onSubmit(this.form.value)">
        <cvi-ng-form-item label="Some label"
                          [htmlId]="htmlId">
          <cvi-ng-input formControlName="item"
                        [placeholder]="placeholder"
                        [htmlId]="htmlId"></cvi-ng-input>
        </cvi-ng-form-item>
        <cvi-ng-track layout="flex" horizontalAlignment="justify" gap="3">
            <cvi-ng-button data-cy="disable-button" (click)="disableInput()">Disable input</cvi-ng-button>
            <cvi-ng-button data-cy="enable-button" (click)="enableInput()">Enable input</cvi-ng-button>
        </cvi-ng-track>
        <div></div>

      </form>
      <div>Inserted value: {{selectedValue()}}</div>
    `,
  };
};
export const WithFormGroup = FormTemplate.bind({});
WithFormGroup.storyName = 'With FormGroup';

const CharacterCounterTemplate: Story<InputComponent> = (
  args: InputComponent
) => ({
  props: args,
  /* template */
  template: `
    <cvi-ng-form-item label="Some label" [htmlId]="htmlId">
      <cvi-ng-input [placeholder]="placeholder"
                    [disabled]="disabled"
                    [htmlId]="htmlId"
                    cviNgCharacterCounter
                    [maxChars]="10"></cvi-ng-input>
    </cvi-ng-form-item>
  `,
});

export const WithCharacterCounter = CharacterCounterTemplate.bind({});
