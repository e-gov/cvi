import { Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import notes from './button.component.md';
import { ButtonComponent } from './button.component';
import { storybookIconsNames } from '../icons/storybook-icons';

export default {
  title: 'Angular/Button',
  component: ButtonComponent,
  parameters: { notes },
  argTypes: {
    appearance: {
      name: 'Appearance',
      options: ['primary', 'secondary', 'text'],
      control: { type: 'inline-radio' },
    },
    iconName: {
      name: 'Icon name',
      options: storybookIconsNames,
      control: { type: 'select' },
    },
    content: {
      name: 'Content',
      table: {
        category: 'Playground',
      },
    },
    onClick: { action: 'Button clicked!' },
  },
  svgClass: { control: false },
  args: {
    content: 'Button label',
    appearance: 'primary',
    disabled: false,
  },
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  /* template */
  template: `
    <cvi-ng-button [disabled]="disabled" [size]="size" [appearance]="appearance" [iconName]="iconName" [iconPosition]="iconPosition"[iconHeight]="iconHeight">{{ content }}</cvi-ng-button>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  appearance: 'secondary',
};

export const Small = Template.bind({});
Small.args = {
  size: 's',
};

export const Text = Template.bind({});
Text.args = {
  appearance: 'text',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  iconName: 'add',
  iconPosition: 'after',
};

export const WithIconSmall = Template.bind({});
WithIconSmall.args = {
  size: 's',
  iconName: 'add',
  iconPosition: 'after',
};

export const WithIconBefore = Template.bind({});
WithIconBefore.args = {
  iconName: 'add',
  iconPosition: 'before',
};

const TemplateWithCustomColor: Story<ButtonComponent> = (
  args: ButtonComponent
) => ({
  props: args,
  styles: [
    `:host {
      --cvi-button-color: var(--cvi-color-jasper-10);
      --cvi-button-color--hover: var(--cvi-color-jasper-12);
    }`,
  ],
  /* template */
  template: `
    <cvi-ng-button [disabled]="disabled" [size]="size" [appearance]="appearance" [iconName]="iconName" [iconPosition]="iconPosition" [iconHeight]="iconHeight">
      {{ content }}
    </cvi-ng-button>
  `,
});

export const WithCustomColor = TemplateWithCustomColor.bind({});

const TemplateTextWithoutUnderline: Story<ButtonComponent> = (
  args: ButtonComponent
) => ({
  props: args,
  styles: [
    `:host {
      --cvi-button--text-decoration: none;
    }`,
  ],
  /* template */
  template: `
    <cvi-ng-button [disabled]="disabled" [size]="size" [appearance]="appearance" [iconName]="iconName" [iconPosition]="iconPosition" [iconHeight]="iconHeight">
      {{ content }}
    </cvi-ng-button>
  `,
});

export const TextWithoutUnderline = TemplateTextWithoutUnderline.bind({});
TextWithoutUnderline.args = {
  appearance: 'text',
};
TextWithoutUnderline.decorators = [
  componentWrapperDecorator((story) => {
    return `
      <cvi-ng-storybook-note>
        Apply <code>--cvi-button--text-decoration: none</code> CSS variable on the component host or its ancestor to remove the underline.
      </cvi-ng-storybook-note>
      ${story}
    `;
  }),
];

const TemplateWithCustomIconStyle: Story<ButtonComponent> = (
  args: ButtonComponent
) => ({
  props: args,
  styles: [
    `
      ::ng-deep .svg-class {
        fill: red;
      }
    `,
  ],
  /* template */
  template: `
    <cvi-ng-button [disabled]="disabled" [size]="size" [appearance]="appearance" [iconName]="iconName" [iconPosition]="iconPosition" [iconHeight]="iconHeight" svgClass="svg-class">
      {{ content }}
    </cvi-ng-button>
  `,
});

export const WithCustomIconStyle = TemplateWithCustomIconStyle.bind({});
WithCustomIconStyle.args = {
  iconName: 'add',
  iconPosition: 'after',
};