import {
  StoryFn,
  Meta,
  moduleMetadata,
  componentWrapperDecorator,
} from '@storybook/angular';
import notes from './input.component.md';
import { InputComponent } from './input.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { storybookIconsNames } from '../icons/storybook-icons';

export default {
  title: 'Angular/Form/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
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
    suffixIconName: '',
    htmlId: 'some-input',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChanged: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onTouched: () => {},
  },
} as Meta;

export const Default = {
  render: (args: InputComponent) => ({
    props: args,
  }),
  decorators: [
    componentWrapperDecorator((story) => {
      return `
          <cvi-ng-form-item label="Some label" [htmlId]="htmlId">
            ${story}
          </cvi-ng-form-item>
        `;
    }),
  ],
};

export const Disabled = {
  ...Default,
  args: {
    disabled: true,
  },
};

export const WithSuffixIcon = {
  ...Default,
  args: {
    suffixIconName: 'loupe',
  },
};

const FormTemplate: StoryFn<InputComponent> = (args: InputComponent) => {
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
                        [suffixIconName]="suffixIconName"
                        [disabled]="disabled"
                        [placeholder]="placeholder"
                        [htmlId]="htmlId"></cvi-ng-input>
        </cvi-ng-form-item>
      </form>
      <cvi-ng-track layout="flex" gap="3">
        <cvi-ng-button data-cy="disable-button" (click)="disableInput()">Disable input</cvi-ng-button>
        <cvi-ng-button data-cy="enable-button" (click)="enableInput()">Enable input</cvi-ng-button>
      </cvi-ng-track>
      <div>Inserted value: {{selectedValue()}}</div>
    `,
  };
};

export const WithFormGroup = {
  render: FormTemplate,
  name: 'With FormGroup',
  argTypes: {
    disabled: {
      control: false,
    },
  },
};

export const WithCharacterCounter = {
  render: (args: InputComponent) => ({
    props: args,
    /* template */
    template: `
      <cvi-ng-form-item label="Some label" [htmlId]="htmlId">
        <cvi-ng-input [placeholder]="placeholder"
                      [disabled]="disabled"
                      [suffixIconName]="suffixIconName"
                      [htmlId]="htmlId"
                      cviNgCharacterCounter
                      [maxChars]="10"></cvi-ng-input>
      </cvi-ng-form-item>
    `,
  }),
};
