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
      'City of Sierra Nevada 1',
      'City of Bilbao 2',
      'valik 3 (cy test)',
      'Rest queen discovery stood far everything keep aside merely girl two making inch hard example remove steel right silent trunk central refused other 4',
      'City of London 5',
      'Option 6 with enough text to feed a saltwater crocodile',
      'Option 7 with enough text to feed a prehistoric jaguar',
    ],
    placeholder: 'Otsi elementi',
    disabled: false,
    backgroundDisabled: false,
    containerWidth: 220,
    htmlId: 'some-select',
    labelId: 'some-select-label',
    loading: false,
    sortItemsFn: undefined,
  },
} as Meta;

const Template: Story<SelectComponent> = (args: SelectComponent) => ({
  props: {
    ...args,
  },
  /* template */
  template: `
      <div [ngStyle]="{'width.px': containerWidth}">
        <cvi-ng-form-item label="Some label" [htmlId]="htmlId" [labelId]="labelId">
          <cvi-ng-select [items]="items"
                         [disabled]="disabled"
                         [labelId]="labelId"
                         [backgroundDisabled]="backgroundDisabled"
                         [placeholder]="placeholder"
                         [htmlId]="htmlId"></cvi-ng-select>
        </cvi-ng-form-item>
      </div>
  `,
});
export const Default = Template.bind({});

const WithCustomValueFormattingTemplate: Story<SelectComponent> = (
  args: SelectComponent
) => ({
  props: {
    ...args,
  },
  /* template */
  template: `
    <div [ngStyle]="{'width.px': containerWidth}">
      <cvi-ng-form-item label="Some label" [htmlId]="htmlId" [labelId]="labelId">
        <cvi-ng-select [items]="items"
                       [placeholder]="placeholder"
                       [backgroundDisabled]="backgroundDisabled"
                       [disabled]="disabled"
                       [htmlId]="htmlId"
                       [labelId]="labelId">
          <ng-template cviNgSelectOptionTemplate let-item="item">
            <cvi-ng-track verticalAlignment="center" [gap]="4">
              <ng-container *ngTemplateOutlet="icon"></ng-container>
              {{item}}
            </cvi-ng-track>
          </ng-template>
          <ng-template cviNgSelectLabelTemplate let-item="item">
            <cvi-ng-track verticalAlignment="center" [gap]="4">
              <ng-container *ngTemplateOutlet="icon"></ng-container>
              {{item}}
            </cvi-ng-track>
          </ng-template>
        </cvi-ng-select>
      </cvi-ng-form-item>
    </div>
    <ng-template #icon>
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" style="flex: 0 0 auto"><path fill="#0072CE" d="M0,0h9.3v5.9H0V0z"/><path d="M0,2h9.3v4H0V2z"/><path fill="#ffffff" d="M0,4h9.3v2H0V4z" /></svg>
    </ng-template>
  `,
});
export const WithCustomValueFormatting = WithCustomValueFormattingTemplate.bind(
  {}
);

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
        <cvi-ng-form-item label="Some label" [htmlId]="htmlId" [labelId]="labelId">
          <cvi-ng-select [items]="items"
                         [addItemFn]="addItemFn"
                         [disabled]="disabled"
                         [backgroundDisabled]="backgroundDisabled"
                         [htmlId]="htmlId"
                         [labelId]="labelId"
                         [placeholder]="placeholder"
                         addItemLabel="Lisa element"></cvi-ng-select>
        </cvi-ng-form-item>
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
        <cvi-ng-form-item label="Some label" [htmlId]="htmlId" [labelId]="labelId">
          <cvi-ng-select [items]="items"
                         [disabled]="disabled"
                         [htmlId]="htmlId"
                         [labelId]="labelId"
                         [backgroundDisabled]="backgroundDisabled"
                         [placeholder]="placeholder"></cvi-ng-select>
        </cvi-ng-form-item>
      </div>
  `,
});
export const DisabledBackground = DisabledBackgroundTemplate.bind({});
DisabledBackground.args = {
  backgroundDisabled: true,
};

const ObjectsAsItemsTemplate: Story<SelectComponent> = (
  args: SelectComponent
) => ({
  props: {
    ...args,
    searchFn: (term: string, item: any) => {
      console.log('custom searchFn works!');
      return (
        `${item.name} (${item.code})`
          .toLowerCase()
          .indexOf(term.toLowerCase()) > -1
      );
    },
    valueFormatFn: (item: any) => `${item.name} (${item.code})`,
  },
  /* template */
  template: `
    <cvi-ng-storybook-note>
      Use this approach when you provide objects as items and need to mix and match different properties of an item object in an option template. In addition to templates, you need to supply <code>valueFormatFn</code> input as well, in order for the chosen value to appear correctly.
    </cvi-ng-storybook-note>
    <div [ngStyle]="{'width.px': containerWidth}">
      <cvi-ng-form-item label="Some label" [htmlId]="htmlId" [labelId]="labelId">
        <cvi-ng-select [items]="items"
                       [placeholder]="placeholder"
                       [disabled]="disabled"
                       [htmlId]="htmlId"
                       [labelId]="labelId"
                       [backgroundDisabled]="backgroundDisabled"
                       [valueFormatFn]="valueFormatFn"
                       [searchFn]="searchFn">
          <ng-template cviNgSelectOptionTemplate let-item="item">
            {{item.name}} ({{item.code}})
          </ng-template>
          <ng-template cviNgSelectLabelTemplate let-item="item">
            {{item.name}} ({{item.code}})
          </ng-template>
        </cvi-ng-select>
      </cvi-ng-form-item>
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
};

const WithBoundValuesTemplate: Story<SelectComponent> = (
  args: SelectComponent
) => {
  const form = new FormGroup({
    item: new FormControl(null, Validators.required),
  });

  function selectedValue() {
    return form.getRawValue().item;
  }

  function onSubmit(formValue: any) {
    console.log(formValue);
  }
  return {
    props: {
      ...args,
      form,
      selectedValue: selectedValue,
      onSubmit: onSubmit,
    },
    /* template */
    template: `
      <cvi-ng-storybook-note>
        Use <code>bindValue</code> and <code>bindLabel</code> inputs if you need to use custom item object properties, but don't want to supply fancy templates for option or selected value.
      </cvi-ng-storybook-note>
      <form [ngStyle]="{'width.px': containerWidth}" [formGroup]="form" (ngSubmit)="onSubmit(this.form.value)">
        <div [ngStyle]="{'width.px': containerWidth}">
          <cvi-ng-form-item label="Some label" [htmlId]="htmlId" [labelId]="labelId">
            <cvi-ng-select [items]="items"
                           [placeholder]="placeholder"
                           [disabled]="disabled"
                           [htmlId]="htmlId"
                           [labelId]="labelId"
                           [backgroundDisabled]="backgroundDisabled"
                           formControlName="item"
                           bindLabel="fancyLabel"
                           bindValue="rawValue">
            </cvi-ng-select>
          </cvi-ng-form-item>
        </div>
      </form>
      <div>Selected value: {{selectedValue()}}</div>
    `,
  };
};
export const WithBoundValues = WithBoundValuesTemplate.bind({});
WithBoundValues.args = {
  items: [
    {
      fancyLabel: 'Scrooge McDuck',
      rawValue: 'duck1',
    },
    {
      fancyLabel: 'Donald Duck',
      rawValue: 'duck2',
    },
  ],
};

const DisabledTemplate: Story<SelectComponent> = (args: SelectComponent) => ({
  props: {
    ...args,
  },
  /* template */
  template: `
      <div [ngStyle]="{'width.px': containerWidth}">
        <cvi-ng-form-item label="Some label" [htmlId]="htmlId" [labelId]="labelId">
          <cvi-ng-select [items]="items"
                         [disabled]="disabled"
                         [htmlId]="htmlId"
                         [labelId]="labelId"
                         [backgroundDisabled]="backgroundDisabled"
                         [placeholder]="placeholder"></cvi-ng-select>
        </cvi-ng-form-item>
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

  function onSubmit(formValue: any) {
    console.log(formValue);
  }

  return {
    props: {
      ...args,
      form: form,
      selectedValue: selectedValue,
      onSubmit: onSubmit,
    },
    /* template */
    template: `
      <form [ngStyle]="{'width.px': containerWidth}" [formGroup]="form" (ngSubmit)="onSubmit(this.form.value)">
        <cvi-ng-form-item label="Some label" [htmlId]="htmlId" [labelId]="labelId">
          <cvi-ng-select [items]="items"
                         [backgroundDisabled]="backgroundDisabled"
                         [disabled]="disabled"
                         [htmlId]="htmlId"
                         [labelId]="labelId"
                         formControlName="item"
                         [placeholder]="placeholder"></cvi-ng-select>
        </cvi-ng-form-item>
        <div>Selected value: {{selectedValue()}}</div>
      </form>
  `,
  };
};
export const Form = FormTemplate.bind({});

const LoadingStateTemplate: Story<SelectComponent> = (
  args: SelectComponent
) => ({
  props: {
    ...args,
  },
  /* template */
  template: `
      <div [ngStyle]="{'width.px': containerWidth}">
        <cvi-ng-form-item label="Some label" [htmlId]="htmlId" [labelId]="labelId">
          <cvi-ng-select [items]="items"
                         [disabled]="disabled"
                         [htmlId]="htmlId"
                         [labelId]="labelId"
                         [loading]="loading"
                         [backgroundDisabled]="backgroundDisabled"
                         [placeholder]="placeholder"></cvi-ng-select>
        </cvi-ng-form-item>
      </div>
  `,
});
export const LoadingState = LoadingStateTemplate.bind({});
LoadingState.args = {
  loading: true,
};

const SortedItemsTemplate: Story<SelectComponent> = (args: SelectComponent) => {
  function sortItemsFn(a: string, b: string): number {
    return a.localeCompare(b, 'et');
  }

  return {
    props: {
      ...args,
      sortItemsFn: sortItemsFn,
    },
    /* template */
    template: `
      <div [ngStyle]="{'width.px': containerWidth}">
        <cvi-ng-form-item label="Some label" [htmlId]="htmlId">
          <cvi-ng-select [items]="items"
                         [disabled]="disabled"
                         [backgroundDisabled]="backgroundDisabled"
                         [placeholder]="placeholder"
                         [sortItemsFn]="sortItemsFn"
                         [htmlId]="htmlId"></cvi-ng-select>
        </cvi-ng-form-item>
      </div>
  `,
  };
};
export const SortedItems = SortedItemsTemplate.bind({});
SortedItems.args = {
  items: ['ÄÄÄ', 'DDD', 'CCC', 'AAA', 'BBB'],
};
