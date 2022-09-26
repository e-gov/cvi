import { Meta, Story } from '@storybook/angular/';
import { LabeledIconComponent } from './labeled-icon.component';
import notes from './labeled-icon.component.md';

export default {
  title: 'Angular/Labeled icon',
  component: LabeledIconComponent,
  parameters: { notes },
  argTypes: {
    name: {
      name: 'Name',
    },
  },
  args: {
    name: 'call',
  },
} as Meta;

const Template: Story<LabeledIconComponent> = (args: LabeledIconComponent) => ({
  props: {
    ...args,
  },
  template: `
    <veera-ng-labeled-icon [name]="name">This is a labeled icon</veera-ng-labeled-icon>
  `,
});

export const Default = Template.bind({});

const TemplateIconAfter: Story<LabeledIconComponent> = (
  args: LabeledIconComponent
) => ({
  props: {
    ...args,
    iconPosition: 'after',
  },
  template: `
    <veera-ng-labeled-icon [name]="name" [iconPosition]="iconPosition">This is a icon'ed label</veera-ng-labeled-icon>
  `,
});

export const WithIconAfter = TemplateIconAfter.bind({});
