import { Meta, Story } from '@storybook/angular/';
import { IconComponent } from './icon.component';
import notes from './icon.component.md';

export default {
  title: 'Angular/Icon',
  component: IconComponent,
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

const Template: Story<IconComponent> = (args: IconComponent) => ({
  props: {
    ...args,
  },
  template: `
    <veera-ng-icon [name]="name"></veera-ng-icon>
  `,
});

export const Default = Template.bind({});
