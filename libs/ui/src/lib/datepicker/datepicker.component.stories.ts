import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import notes from './datepicker.component.md';
import { DatepickerComponent } from './datepicker.component';

export default {
  title: 'Angular/Form/Datepicker',
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
  parameters: { notes },
  args: {
    placeholder: 'pp.kk.aaaa',
    disabled: false,
    htmlId: 'datepicker-html-id',
  },
} as Meta<DatepickerComponent>;

export const Default = {
  render: (args: DatepickerComponent) => ({
    props: args,
    /* template */
    template: `
      <cvi-ng-datepicker [placeholder]="placeholder" [disabled]="disabled" [htmlId]="htmlId"></cvi-ng-datepicker>
    `,
  }),
};

export const WithCustomPlaceholder = {
  ...Default,
  args: {
    placeholder: 'dd.mm.yyyy',
  },
};

export const WithDisabled = {
  ...Default,
  args: {
    disabled: true,
  },
};

export const OnNonWhiteBackground = {
  ...Default,
  parameters: {
    backgrounds: {
      default: 'Gray',
    },
  },
};

const FormTemplate: StoryFn<DatepickerComponent> = (
  args: DatepickerComponent
) => {
  const form = new FormGroup({
    date: new FormControl('04.05.2023'),
  });

  function selectedValue() {
    return form.controls.date.value;
  }

  function onSubmit(formValue: any) {
    console.log(formValue);
  }

  return {
    props: {
      ...args,
      form,
      selectedValue,
      onSubmit,
    },
    /* template */
    template: `
      <form [formGroup]="form" (ngSubmit)="onSubmit(this.form.value)">
        <cvi-ng-form-item label="Some label" [htmlId]="htmlId">
          <cvi-ng-datepicker formControlName="date"
                             [placeholder]="placeholder"
                             [disabled]="disabled"
                             [htmlId]="htmlId">
          </cvi-ng-datepicker>
        </cvi-ng-form-item>
      </form>
      <div>Inserted value: {{selectedValue()}}</div>
    `,
  };
};

export const WithFormGroup = {
  render: FormTemplate,
};
