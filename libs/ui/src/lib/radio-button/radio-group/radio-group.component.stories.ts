import { Meta } from '@storybook/angular';
import notes from './radio-group.component.md';
import { RadioGroupComponent } from './radio-group.component';
import { RadioGroupAppearance } from './radio-group';

export default {
  title: 'Angular/Form/Radio button group',
  component: RadioGroupComponent,
  parameters: { notes },
  args: {
    title: 'Did you find what you were looking for?',
    appearance: RadioGroupAppearance.REGULAR,
  },
} as Meta<RadioGroupComponent>;

export const Default = {
  render: (args: RadioGroupComponent) => ({
    props: args,
    /* template */
    template: `
      <cvi-ng-radio-group [title]="title">
        <cvi-ng-radio-button value="1" label="Label 1" dataAttribute="option_1"></cvi-ng-radio-button>
        <cvi-ng-radio-button value="2" label="Label 2"></cvi-ng-radio-button>
        <cvi-ng-radio-button value="3" label="Label 3"></cvi-ng-radio-button>
      </cvi-ng-radio-group>
    `,
  }),
};

export const WithOptionButtons = {
  render: (args: RadioGroupComponent) => ({
    props: args,
    /* template */
    template: `
      <cvi-ng-radio-group [title]="title" [appearance]="appearance">
        <cvi-ng-option-button value="no" label="No" dataAttribute="option_1"></cvi-ng-option-button>
        <cvi-ng-option-button value="partially" label="Partially"></cvi-ng-option-button>
        <cvi-ng-option-button value="yes" label="Yes"></cvi-ng-option-button>
      </cvi-ng-radio-group>
    `,
  }),
  args: {
    appearance: RadioGroupAppearance.REGULAR,
  },
};

export const WithCompactOptionButtons = {
  ...WithOptionButtons,
  args: {
    appearance: RadioGroupAppearance.COMPACT,
  },
};
