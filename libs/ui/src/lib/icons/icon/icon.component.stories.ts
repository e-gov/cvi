import { Meta, Story, componentWrapperDecorator } from '@storybook/angular';
import { IconComponent } from './icon.component';
import notes from './icon.component.md';
import { storybookIconsNames } from '../storybook-icons';
import { iconSizeDefault } from './icon';

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
    height: iconSizeDefault,
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

export const WithCustomSize = Template.bind({});
WithCustomSize.args = {
  height: 140,
};
WithCustomSize.parameters = {
  layout: 'padded',
};
WithCustomSize.decorators = [
  componentWrapperDecorator((story) => {
    return `
      <cvi-ng-storybook-note>
        To change size of an icon (in both dimensions), set its <code>height</code> prop. The icon will be resized proportionally.
      </cvi-ng-storybook-note>
      ${story}
    `;
  }),
];

const TemplateWithStyling: Story<IconComponent> = (args: IconComponent) => ({
  props: {
    ...args,
  },
  template: `
    <cvi-ng-storybook-note>
      To change color of an icon, just add <code>fill</code> CSS property either to icon component selector itself or its ancestor. It is not required to apply <code>fill</code> to SVG node itself.
    </cvi-ng-storybook-note>
    <div class="wrapper-class">
      <cvi-ng-icon [name]="name" [height]="height"></cvi-ng-icon>
    </div>
  `,
  styles: [
    `.wrapper-class {
      fill: red;
    }`,
  ],
});

export const WithStyling = TemplateWithStyling.bind({});
WithStyling.parameters = {
  layout: 'padded',
};
