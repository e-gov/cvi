import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextareaComponent } from './textarea.component';
import notes from './textarea.component.md';

export default {
  title: 'Angular/Form/Textarea',
  component: TextareaComponent,
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
    // Disabling Chromatic because cvi-ng-textarea triggers a visual change on every build
    chromatic: { disableSnapshot: true },
  },
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
  args: {
    placeholder: 'Placeholder',
    disabled: false,
    resizable: true,
    maxLength: 2000,
    minRows: 3,
    htmlId: 'some-textarea',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChanged: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onTouched: () => {},
  },
} as Meta<TextareaComponent>;

export const Default = {
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

export const WithCharacterCounter = {
  render: (args: TextareaComponent) => ({
    props: args,
    /* template */
    template: `
      <cvi-ng-form-item label="Some label" [htmlId]="htmlId">
        <cvi-ng-textarea cviNgCharacterCounter [maxChars]="30" [resizable]="resizable" [htmlId]="htmlId"></cvi-ng-textarea>
      </cvi-ng-form-item>
    `,
  }),
};

const FormGroupTemplate: StoryFn<TextareaComponent> = (
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
      // unwrapping args manually, because otherwise selectedValue() won't be updated - https://github.com/storybookjs/storybook/issues/14627#issuecomment-821291541
      placeholder: args.placeholder,
      disabled: args.disabled,
      maxLength: args.maxLength,
      maxRows: args.maxRows,
      htmlId: args.htmlId,
      resizable: args.resizable,
      minRows: 3,
      form: form,
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

export const WithFormGroup = {
  render: FormGroupTemplate,
  name: 'With FormGroup',
};
