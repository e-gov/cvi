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
  title: 'Angular/Form/Select',
  decorators: [
    moduleMetadata({
      imports: [UiModule, ReactiveFormsModule],
    }),
  ],
  parameters: { notes },
  argTypes: {
    containerWidth: {
      name: 'Container width',
      table: {
        category: 'Playground',
      },
      control: { type: 'number' },
    },
  },
  args: {
    items: [
      'valik 1',
      'valik 2',
      'valik 3 (cy test)',
      'valik 4 ja palju sõnu millestega ei ole täiesti võimalik midagi seletada või kirjeldada',
    ],
    placeholder: 'Otsi elementi',
    disabled: false,
    containerWidth: 220,
  },
} as Meta;

const Template: Story<SelectComponent> = (args: SelectComponent) => ({
  props: {
    ...args,
  },
  /* template */
  template: `
      <div [ngStyle]="{'width.px': containerWidth}">
        <cvi-ng-select [items]="items"
                       [disabled]="disabled"
                       [placeholder]="placeholder"></cvi-ng-select>
      </div>
  `,
});
export const Default = Template.bind({});

const UserCanAddItemsTemplate: Story<SelectComponent> = (
  args: SelectComponent
) => {
  function addItem(text: string) {
    return text;
  }

  return {
    props: {
      ...args,
      addItemFn: addItem,
    },
    /* template */
    template: `
      <div [ngStyle]="{'width.px': containerWidth}">
        <cvi-ng-select [items]="items"
                       [addItemFn]="addItemFn"
                       [addItemLabel]="'Lisa element'"
                       [placeholder]="placeholder"></cvi-ng-select>
      </div>
  `,
  };
};
export const UserCanAddItems = UserCanAddItemsTemplate.bind({});
UserCanAddItems.args = {
  placeholder: 'Otsi elementi või lisa uus',
};

const DisabledBackgroundTemplate: Story<SelectComponent> = (
  args: SelectComponent
) => ({
  props: {
    ...args,
  },
  /* template */
  template: `
      <div [ngStyle]="{'width.px': containerWidth}">
        <cvi-ng-select [items]="items"
                       [backgroundDisabled]="true"
                       [placeholder]="placeholder"></cvi-ng-select>
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
  /* template */
  template: `
      <div [ngStyle]="{'width.px': containerWidth}">
        <cvi-ng-select [items]="items"
                         [placeholder]="placeholder"
                         [searchFn]="searchFn">
          <ng-template cviNgSelectOptionTemplate let-item="item">
            {{item.name}} ({{item.code}})
          </ng-template>
          <ng-template cviNgSelectLabelTemplate let-item="item">
            {{item.name}} ({{item.code}})
          </ng-template>
        </cvi-ng-select>
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

const DisabledTemplate: Story<SelectComponent> = (args: SelectComponent) => ({
  props: {
    ...args,
  },
  /* template */
  template: `
      <div [ngStyle]="{'width.px': containerWidth}">
        <cvi-ng-select [items]="items"
                       [disabled]="disabled"
                       [placeholder]="placeholder"></cvi-ng-select>
      </div>
  `,
});
export const Disabled = DisabledTemplate.bind({});
Disabled.args = {
  disabled: true,
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
    /* template */
    template: `
      <div [ngStyle]="{'width.px': containerWidth}" [formGroup]="form">
        <cvi-ng-select [items]="items" formControlName="item" [placeholder]="placeholder"></cvi-ng-select>
        <div>Selected value: {{selectedValue()}}</div>
      </div>
  `,
  };
};
export const Form = FormTemplate.bind({});
