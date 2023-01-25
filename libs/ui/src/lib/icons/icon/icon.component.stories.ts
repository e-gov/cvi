import { Meta, Story } from '@storybook/angular/';
import { IconComponent } from './icon.component';
import notes from './icon.component.md';
import { storybookIconsNames } from '../storybook-icons';

export default {
  title: 'Angular/Icon',
  component: IconComponent,
  parameters: { notes },
  argTypes: {
    name: {
      name: 'Name',
      options: storybookIconsNames,
      control: { type: 'select' },
    },
  },
  args: {
    name: 'action',
    height: 40,
  },
} as Meta;

const Template: Story<IconComponent> = (args: IconComponent) => ({
  props: {
    ...args,
  },
  template: `
    <cvi-ng-icon [name]="name" [height]="height"></cvi-ng-icon>
  `,
});

export const Default = Template.bind({});

const TemplateWithDefaultHeight: Story<IconComponent> = (
  args: IconComponent
) => ({
  props: {
    ...args,
  },
  template: `
    <cvi-ng-icon [name]="name"></cvi-ng-icon>
  `,
});
export const WithDefaultHeight = TemplateWithDefaultHeight.bind({});

const TemplateWithStyling: Story<IconComponent> = (args: IconComponent) => ({
  props: {
    ...args,
  },
  template: `
    <cvi-ng-icon [name]="name" [svgClass]="svgClass"></cvi-ng-icon>
  `,
  styles: [
    `::ng-deep .red {
      fill: red;
      height: 50px;
    }`,
  ],
});

export const WithStyling = TemplateWithStyling.bind({});
WithStyling.args = { svgClass: 'red' };
