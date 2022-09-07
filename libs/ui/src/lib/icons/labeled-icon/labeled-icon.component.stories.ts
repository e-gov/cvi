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
    }
  },
  args: {
    name: 'call'
  }
} as Meta;

const Template: Story<LabeledIconComponent> = (args: LabeledIconComponent) => ({
  props: {
    ...args
  },
  template: `
    <ria-poc-labeled-icon [name]="name"></ria-poc-labeled-icon>
  `
});

export const Default = Template.bind({});
