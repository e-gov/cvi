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
    <veera-ng-button [disabled]="disabled" [size]="size" [appearance]="appearance">{{ content }}</veera-ng-button>
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

const TemplateTextWithIcon: Story<ButtonComponent> = (
  args: ButtonComponent
) => ({
  props: args,
  /* template */
  template: `
    <veera-ng-button [appearance]="appearance">
      <veera-ng-labeled-icon [name]="'add'" [iconPosition]="'before'" [alignment]="'center'" [iconClass]="'size-20'">
        {{ content }}
      </veera-ng-labeled-icon>
    </veera-ng-button>
  `,
  styles: [
    `::ng-deep .size-20 {
      height: 20px;
    }`,
  ],
});

export const TextWithIcon = TemplateTextWithIcon.bind({});
TextWithIcon.args = {
  appearance: 'text',
};
