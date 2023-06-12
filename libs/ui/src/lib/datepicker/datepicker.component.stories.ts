import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui.module';
import notes from './datepicker.component.md';
import { DatepickerComponent } from './datepicker.component';

export default {
  title: 'Angular/Form/Datepicker',
  decorators: [
    moduleMetadata({
      imports: [UiModule, ReactiveFormsModule],
    }),
  ],
  parameters: { notes },
  args: {
    placeholder: 'pp.kk.aaaa',
    disabled: false,
    htmlId: 'datepicker-html-id',
  },
} as Meta<DatepickerComponent>;

const Template: Story<DatepickerComponent> = (args: DatepickerComponent) => ({
  props: args,
  template: `
    <cvi-ng-datepicker  [placeholder]="placeholder"
                        [disabled]="disabled"
                        [htmlId]="htmlId">
    </cvi-ng-datepicker>
  `,
});

export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {};

const FormTemplate: Story<DatepickerComponent> = (
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
        <cvi-ng-form-item label="Some label"
                          [htmlId]="htmlId">
            <cvi-ng-datepicker  formControlName="date"
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
export const WithFormGroup = FormTemplate.bind({});

export const WithCustomPlaceholder = Template.bind({});
WithCustomPlaceholder.args = {
  placeholder: 'dd.mm.yyyy',
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  disabled: true,
};
