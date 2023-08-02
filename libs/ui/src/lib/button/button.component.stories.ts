import { Story, Meta } from '@storybook/angular';
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
