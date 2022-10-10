import { SelectComponent } from './select.component';
import notes from './select.component.md';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'Angular/Select',
  component: SelectComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
  parameters: { notes },
  argTypes: {},
  args: {
    items: ['Valik 1', 'Valik 2', 'Valik 3'],
    placeholder: 'Otsi elementi',
  },
} as Meta;

const Template: Story<SelectComponent> = (args: SelectComponent) => {
  const formGroup = new FormGroup({
    item: new FormControl(undefined),
  });

  return {
    props: {
      ...args,
      form: formGroup,
    },
    template: `
      <form [formGroup]="form" style="min-width: 200px">
        <veera-ng-select [items]="items"
                         [placeholder]="placeholder"
                         formControlName="item"></veera-ng-select>
      </form>
  `,
  };
};

export const Default = Template.bind({});
