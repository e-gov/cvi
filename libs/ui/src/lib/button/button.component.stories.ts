import { Story, Meta } from '@storybook/angular';
import notes from './button.component.md';
import { ButtonComponent } from './button.component';

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
    <cvi-ng-button [disabled]="disabled" [size]="size" [appearance]="appearance">{{ content }}</cvi-ng-button>
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
    <cvi-ng-button [disabled]="disabled" [size]="size" [appearance]="appearance">{{ content }}</cvi-ng-button>
  `,
});

export const WithCustomColor = TemplateWithCustomColor.bind({});

const TemplateTextButtonWithIcon: Story<ButtonComponent> = (
  args: ButtonComponent
) => ({
  props: args,
  /* template */
  template: `
    <cvi-ng-button appearance="text">
      <cvi-ng-labeled-icon name="add" iconPosition="before" verticalAlignment="center" [iconHeight]="16" [gap]="2">
        {{ content }}
      </cvi-ng-labeled-icon>
    </cvi-ng-button>
  `,
});

export const TextButtonWithIcon = TemplateTextButtonWithIcon.bind({});

const TemplateSmallButtonWithIcon: Story<ButtonComponent> = (
  args: ButtonComponent
) => ({
  props: args,
  /* template */
  template: `
    <cvi-ng-button [size]="size">
      <cvi-ng-labeled-icon name="exit_to_app" svgClass="cvi-button__white-icon" appearance="secondary" iconPosition="after" verticalAlignment="center" [iconHeight]="24">
        {{ content }}
      </cvi-ng-labeled-icon>
    </cvi-ng-button>
  `,
});

export const smallButtonWithIcon = TemplateSmallButtonWithIcon.bind({});
