import { SelectComponent } from './select.component';
import notes from './select.component.md?raw';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
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
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {
    itemChanged: { action: 'Item changed!' },
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
    minTermLength: 0,
    htmlId: 'some-select',
    labelId: 'some-select-label',
    loading: false,
    sortItemsFn: undefined,
    valueFormatFn: null,
    addItemFn: undefined,
    addItemLabel: '',
    searchFn: null,
    bindLabel: '',
    bindValue: '',
    loadingLabel: 'Loading...',
    containerWidth: 220,
  },
} as Meta;

export const Default = {
  render: (args: SelectComponent) => ({
    props: args,
    /* template */
    template: `
      <div [ngStyle]="{'width.px': containerWidth}">
        <cvi-ng-form-item label="Some label" [htmlId]="htmlId" [labelId]="labelId">
          <cvi-ng-select [items]="items"
                         (itemChanged)="itemChanged($event)"
                         [disabled]="disabled"
                         [sortItemsFn]="sortItemsFn"
                         [searchFn]="searchFn"
                         [addItemLabel]="addItemLabel"
                         [addItemFn]="addItemFn"
                         [valueFormatFn]="valueFormatFn"
                         [minTermLength]="minTermLength"
                         [bindLabel]="bindLabel"
                         [bindValue]="bindValue"
                         [labelId]="labelId"
                         [loading]="loading"
                         [loadingLabel]="loadingLabel"
                         [backgroundDisabled]="backgroundDisabled"
                         [placeholder]="placeholder"
                         [htmlId]="htmlId"></cvi-ng-select>
        </cvi-ng-form-item>
      </div>
    `,
  }),
};

export const Disabled = {
  ...Default,
  args: {
    disabled: true,
  },
};

export const DisabledBackground = {
  ...Default,
  args: {
    backgroundDisabled: true,
  },
};

export const LoadingState = {
  ...Default,
  args: {
    loading: true,
  },
};

export const WithCustomValueFormatting = {
  render: (args: SelectComponent) => ({
    props: args,
    /* template */
    template: `
      <div [ngStyle]="{'width.px': containerWidth}">
        <cvi-ng-form-item label="Some label" [htmlId]="htmlId" [labelId]="labelId">
          <cvi-ng-select [items]="items"
                         (itemChanged)="itemChanged($event)"
                         [disabled]="disabled"
                         [addItemLabel]="addItemLabel"
                         [sortItemsFn]="sortItemsFn"
                         [addItemFn]="addItemFn"
                         [searchFn]="searchFn"
                         [valueFormatFn]="valueFormatFn"
                         [minTermLength]="minTermLength"
                         [bindLabel]="bindLabel"
                         [bindValue]="bindValue"
                         [labelId]="labelId"
                         [loading]="loading"
                         [loadingLabel]="loadingLabel"
                         [backgroundDisabled]="backgroundDisabled"
                         [placeholder]="placeholder"
                         [htmlId]="htmlId">
            <ng-template cviNgSelectOptionTemplate let-item="item">
              <cvi-ng-track verticalAlignment="center" [gap]="4">
                <ng-container *ngTemplateOutlet="icon"></ng-container>
                {{ item }}
              </cvi-ng-track>
            </ng-template>
            <ng-template cviNgSelectLabelTemplate let-item="item">
              <cvi-ng-track verticalAlignment="center" [gap]="4">
                <ng-container *ngTemplateOutlet="icon"></ng-container>
                {{ item }}
              </cvi-ng-track>
            </ng-template>
          </cvi-ng-select>
        </cvi-ng-form-item>
      </div>
      <ng-template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" style="flex: 0 0 auto"><path fill="#0072CE" d="M0,0h9.3v5.9H0V0z"/><path d="M0,2h9.3v4H0V2z"/><path fill="#ffffff" d="M0,4h9.3v2H0V4z" /></svg>
      </ng-template>
    `,
  }),
};

export const UserCanAddItems = {
  render: (args: SelectComponent) => ({
    props: {
      ...args,
      addItemFn: (text: string) => {
        return 'Added by YOU: ' + text;
      },
    },
    /* template */
    template: `
      <div [ngStyle]="{'width.px': containerWidth}">
        <cvi-ng-form-item label="Some label" [htmlId]="htmlId" [labelId]="labelId">
          <cvi-ng-select [items]="items"
                         (itemChanged)="itemChanged($event)"
                         [disabled]="disabled"
                         [addItemLabel]="addItemLabel"
                         [sortItemsFn]="sortItemsFn"
                         [addItemFn]="addItemFn"
                         [searchFn]="searchFn"
                         [valueFormatFn]="valueFormatFn"
                         [minTermLength]="minTermLength"
                         [bindLabel]="bindLabel"
                         [bindValue]="bindValue"
                         [labelId]="labelId"
                         [loading]="loading"
                         [loadingLabel]="loadingLabel"
                         [backgroundDisabled]="backgroundDisabled"
                         [placeholder]="placeholder"
                         [htmlId]="htmlId"></cvi-ng-select>
        </cvi-ng-form-item>
      </div>
    `,
  }),
  args: {
    placeholder: 'Otsi elementi või lisa uus',
    addItemLabel: 'Lisa element',
  },
};

export const ObjectsAsItems = {
  render: (args: SelectComponent) => ({
    props: {
      ...args,
      searchFn: (term: string, item: { name: string; code: string }) => {
        console.log('custom searchFn works!');
        return (
          `${item.name} (${item.code})`
            .toLowerCase()
            .indexOf(term.toLowerCase()) > -1
        );
      },
      valueFormatFn: (item: { name: string; code: string }) =>
        `${item.name} (${item.code})`,
    },
    /* template */
    template: `
      <cvi-ng-storybook-note>
        Use this approach when you provide objects as items and need to mix and match different properties of an item object in an option template. In addition to templates, you need to supply <code>valueFormatFn</code> input as well, in order for the chosen value to appear correctly.
      </cvi-ng-storybook-note>
      <div [ngStyle]="{'width.px': containerWidth}">
        <cvi-ng-form-item label="Some label" [htmlId]="htmlId" [labelId]="labelId">
          <cvi-ng-select [items]="items"
                         (itemChanged)="itemChanged($event)"
                         [disabled]="disabled"
                         [addItemLabel]="addItemLabel"
                         [sortItemsFn]="sortItemsFn"
                         [addItemFn]="addItemFn"
                         [searchFn]="searchFn"
                         [valueFormatFn]="valueFormatFn"
                         [minTermLength]="minTermLength"
                         [bindLabel]="bindLabel"
                         [bindValue]="bindValue"
                         [labelId]="labelId"
                         [loading]="loading"
                         [loadingLabel]="loadingLabel"
                         [backgroundDisabled]="backgroundDisabled"
                         [placeholder]="placeholder"
                         [htmlId]="htmlId">
            <ng-template cviNgSelectOptionTemplate let-item="item">
              {{ item.name }} ({{ item.code }})
            </ng-template>
            <ng-template cviNgSelectLabelTemplate let-item="item">
              {{ item.name }} ({{ item.code }})
            </ng-template>
          </cvi-ng-select>
        </cvi-ng-form-item>
      </div>
    `,
  }),
  args: {
    items: [
      {
        code: '123',
        name: 'Product 1',
      },
      {
        code: '222',
        name: 'Product 2',
      },
    ],
  },
};

const WithBoundValuesTemplate: StoryFn<SelectComponent> = (
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
                           [htmlId]="htmlId"
                           [labelId]="labelId"
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

export const WithBoundValues = {
  render: WithBoundValuesTemplate,
  args: {
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
  },
};

const FormTemplate: StoryFn<SelectComponent> = (args: SelectComponent) => {
  const form = new FormGroup({
    item: new FormControl(null, Validators.required),
  });

  function selectedValue() {
    return form.getRawValue().item;
  }

  function onSubmit(formValue: unknown) {
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
                         (itemChanged)="itemChanged($event)"
                         [disabled]="disabled"
                         [addItemLabel]="addItemLabel"
                         [sortItemsFn]="sortItemsFn"
                         [addItemFn]="addItemFn"
                         [searchFn]="searchFn"
                         [valueFormatFn]="valueFormatFn"
                         [minTermLength]="minTermLength"
                         [bindLabel]="bindLabel"
                         [bindValue]="bindValue"
                         [labelId]="labelId"
                         [loading]="loading"
                         [loadingLabel]="loadingLabel"
                         [backgroundDisabled]="backgroundDisabled"
                         [placeholder]="placeholder"
                         [htmlId]="htmlId"
                         formControlName="item"></cvi-ng-select>
        </cvi-ng-form-item>
        <div>Selected value: {{selectedValue()}}</div>
      </form>
    `,
  };
};

export const Form = {
  render: FormTemplate,
};

export const SortedItems = {
  render: (args: SelectComponent) => ({
    props: {
      ...args,
      sortItemsFn: (a: string, b: string): number => {
        return a.localeCompare(b, 'et');
      },
    },
    /* template */
    template: `
      <div [ngStyle]="{'width.px': containerWidth}">
        <cvi-ng-form-item label="Some label" [htmlId]="htmlId">
          <cvi-ng-select [items]="items"
                         (itemChanged)="itemChanged($event)"
                         [disabled]="disabled"
                         [addItemLabel]="addItemLabel"
                         [sortItemsFn]="sortItemsFn"
                         [addItemFn]="addItemFn"
                         [searchFn]="searchFn"
                         [valueFormatFn]="valueFormatFn"
                         [minTermLength]="minTermLength"
                         [bindLabel]="bindLabel"
                         [bindValue]="bindValue"
                         [labelId]="labelId"
                         [loading]="loading"
                         [loadingLabel]="loadingLabel"
                         [backgroundDisabled]="backgroundDisabled"
                         [placeholder]="placeholder"
                         [htmlId]="htmlId"></cvi-ng-select>
        </cvi-ng-form-item>
      </div>
    `,
  }),
  args: {
    items: ['ÄÄÄ', 'DDD', 'CCC', 'AAA', 'BBB'],
  },
};
