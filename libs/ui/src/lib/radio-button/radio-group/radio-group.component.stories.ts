import { Meta, Story } from '@storybook/angular';
import notes from './radio-group.component.md';
import { RadioGroupComponent } from './radio-group.component';
import { RadioGroupAppearance } from './radio-group';

export default {
  title: 'Angular/Radio button group',
  component: RadioGroupComponent,
  parameters: { notes },
  args: {
    title: 'Did you find what you were looking for?',
    appearance: RadioGroupAppearance.REGULAR,
  },
} as Meta<RadioGroupComponent>;

const Template: Story<RadioGroupComponent> = (args: RadioGroupComponent) => ({
  props: args,
  /* template */
  template: `
    <veera-ng-radio-group [title]="title">
      <veera-ng-radio-button value="1" label="Label 1" dataAttribute="option_1"></veera-ng-radio-button>
      <veera-ng-radio-button value="2" label="Label 2"></veera-ng-radio-button>
      <veera-ng-radio-button value="3" label="Label 3"></veera-ng-radio-button>
    </veera-ng-radio-group>
  `,
});

export const Default = Template.bind({});
Default.args = {};

const OptionButtonTemplate: Story<RadioGroupComponent> = (
  args: RadioGroupComponent
) => ({
  props: args,
  /* template */
  template: `
    <veera-ng-radio-group [title]="title" [appearance]="appearance">
      <veera-ng-option-button value="no" label="No" dataAttribute="option_1"></veera-ng-option-button>
      <veera-ng-option-button value="partially" label="Partially"></veera-ng-option-button>
      <veera-ng-option-button value="yes" label="Yes"></veera-ng-option-button>
    </veera-ng-radio-group>
  `,
});

export const OptionButton = OptionButtonTemplate.bind({});
OptionButton.args = {};

const OptionButtonCompactTemplate: Story<RadioGroupComponent> = (
  args: RadioGroupComponent
) => ({
  props: args,
  /* template */
  template: `
    <veera-ng-radio-group [title]="title" [appearance]="appearance">
      <veera-ng-option-button value="1" label="1" dataAttribute="option_1"></veera-ng-option-button>
      <veera-ng-option-button value="2" label="2"></veera-ng-option-button>
      <veera-ng-option-button value="3" label="3"></veera-ng-option-button>
    </veera-ng-radio-group>
  `,
});

export const OptionButtonCompact = OptionButtonCompactTemplate.bind({});
OptionButtonCompact.args = {
  appearance: RadioGroupAppearance.COMPACT,
};
