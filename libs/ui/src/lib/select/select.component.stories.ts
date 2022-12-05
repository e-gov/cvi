import { SelectComponent } from './select.component';
import notes from './select.component.md';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UiModule } from '../ui.module';

export default {
  title: 'Angular/Select',
  decorators: [
    moduleMetadata({
      imports: [UiModule, ReactiveFormsModule],
    }),
  ],
  parameters: { notes },
  argTypes: {},
  args: {
    items: ['valik 1', 'valik 2', 'valik 3'],
    placeholder: 'Otsi elementi',
  },
} as Meta;

const Template: Story<SelectComponent> = (args: SelectComponent) => ({
  props: {
    ...args,
  },
  template: `
      <div style="width: 200px">
        <veera-ng-select [items]="items"
                         [placeholder]="placeholder"></veera-ng-select>
      </div>
  `,
});
export const Default = Template.bind({});

const AddItemTemplate: Story<SelectComponent> = (args: SelectComponent) => {
  function addItem(text: string) {
    return text;
  }

  return {
    props: {
      ...args,
      addItemFn: addItem,
    },
    template: `
      <div style="width: 200px">
        <veera-ng-select [items]="items"
                         [addItemFn]="addItemFn"
                         [addItemLabel]="'Lisa element'"
                         [placeholder]="placeholder"></veera-ng-select>
      </div>
  `,
  };
};
export const AddItem = AddItemTemplate.bind({});

const DisabledBackgroundTemplate: Story<SelectComponent> = (
  args: SelectComponent
) => ({
  props: {
    ...args,
  },
  template: `
      <div style="width: 200px">
        <veera-ng-select [items]="items"
                         [backgroundDisabled]="true"
                         [placeholder]="placeholder"></veera-ng-select>
      </div>
  `,
});
export const DisabledBackground = DisabledBackgroundTemplate.bind({});

const ObjectsAsItemsTemplate: Story<SelectComponent> = (
  args: SelectComponent
) => ({
  props: {
    ...args,
  },
  template: `
      <div style="width: 200px">
        <veera-ng-select [items]="items"
                         [placeholder]="placeholder"
                         [searchFn]="searchFn">
          <ng-template veeraNgSelectOptionTemplate let-item="item">
            {{item.name}} ({{item.code}})
          </ng-template>
          <ng-template veeraNgSelectLabelTemplate let-item="item">
            {{item.name}} ({{item.code}})
          </ng-template>
        </veera-ng-select>
      </div>
  `,
});
export const ObjectsAsItems = ObjectsAsItemsTemplate.bind({});
ObjectsAsItems.args = {
  items: [
    {
      code: '123',
      name: 'Product',
    },
    {
      code: '222',
      name: 'Product',
    },
  ],
  searchFn: (term: string, item: any) =>
    `${item.name} (${item.code})`.toLowerCase().indexOf(term.toLowerCase()) >
    -1,
};

const FormTemplate: Story<SelectComponent> = (args: SelectComponent) => {
  const form = new FormGroup({
    item: new FormControl(null, Validators.required),
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
      <div style="width: 200px"
           [formGroup]="form">
        <veera-ng-select [items]="items"
                         formControlName="item"
                         [placeholder]="placeholder"></veera-ng-select>
        <div>Selected value: {{selectedValue()}}</div>
      </div>
  `,
  };
};
export const Form = FormTemplate.bind({});
