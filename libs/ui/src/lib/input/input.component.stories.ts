import { Story, Meta, moduleMetadata } from '@storybook/angular';
import notes from './input.component.md';
import { InputComponent } from './input.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui.module';

export default {
  title: 'Angular/Input',
  decorators: [
    moduleMetadata({
      imports: [UiModule, ReactiveFormsModule],
    }),
  ],
  parameters: { notes },
  args: {
    placeholder: 'Username',
    disabled: false,
    htmlId: '',
  },
} as Meta<InputComponent>;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
  template: `
    <veera-ng-input [placeholder]="placeholder"
                    [disabled]="disabled"
                    [htmlId]="htmlId"></veera-ng-input>
  `,
});

export const Default = Template.bind({});
Default.args = {};

const FormTemplate: Story<InputComponent> = (args: InputComponent) => {
  const form = new FormGroup({
    item: new FormControl(null),
  });

  function selectedValue() {
    return form.getRawValue().item;
  }

  return {
    props: {
      ...args,
      form: form,
      selectedValue: selectedValue,
    },
    template: `
      <div [formGroup]="form">
        <veera-ng-input formControlName="item"
                        [placeholder]="placeholder"
                        [disabled]="disabled"
                        [htmlId]="htmlId"></veera-ng-input>
        <div>Inserted value: {{selectedValue()}}</div>
      </div>
    `,
  };
};
export const Form = FormTemplate.bind({});

const CharacterCounterTemplate: Story<InputComponent> = (
  args: InputComponent
) => ({
  props: args,
  template: `
    <veera-ng-input [placeholder]="placeholder"
                    [disabled]="disabled"
                    [htmlId]="htmlId"
                    veeraNgCharacterCounter
                    [maxChars]="10"></veera-ng-input>
  `,
});

export const WithCharacterCounter = CharacterCounterTemplate.bind({});
