import { Meta, componentWrapperDecorator } from '@storybook/angular';
import notes from './form-item.component.md';
import { FormItemComponent } from './form-item.component';

export default {
  title: 'Angular/Form/Form item',
  component: FormItemComponent,
  parameters: { notes },
  args: {
    htmlId: 'fksd4kfds',
    label: 'Example label',
    placeholder: 'Placeholder text...',
  },
  decorators: [
    componentWrapperDecorator(FormItemComponent, ({ args }) => {
      return args;
    }),
  ],
} as Meta<FormItemComponent>;

export const Default = {
  render: (args: FormItemComponent) => ({
    props: args,
    /* template */
    template: `
      <cvi-ng-input [placeholder]="placeholder" [htmlId]="htmlId"></cvi-ng-input>
    `,
  }),
};

export const WithTextarea = {
  render: (args: FormItemComponent) => ({
    props: args,
    /* template */
    template: `
      <cvi-ng-textarea [placeholder]="placeholder" [htmlId]="htmlId"></cvi-ng-textarea>
    `,
  }),
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};
