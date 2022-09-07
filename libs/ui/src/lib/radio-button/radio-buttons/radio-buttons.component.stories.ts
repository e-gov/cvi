import { Story, Meta } from '@storybook/angular';
import notes from './radio-buttons.component.md';
import { RadioButtonsComponent } from './radio-buttons.component';

export default {
  title: 'Angular/Radio button',
  component: RadioButtonsComponent,
  parameters: { notes },
  args: {
    title: 'Did you find what you were looking for?',
    appearance: 'regular',

  }
} as Meta<RadioButtonsComponent>;

const Template: Story<RadioButtonsComponent> = (args: RadioButtonsComponent) => ({
  props: args,
  /* template */
  template: `
    <ria-poc-radio-buttons [title]="title">
      <ria-poc-radio-button name="Name" value="1" label="Label 1"></ria-poc-radio-button>
      <ria-poc-radio-button name="Name" value="2" label="Label 2"></ria-poc-radio-button>
      <ria-poc-radio-button name="Name" value="3" label="Label 3"></ria-poc-radio-button>
    </ria-poc-radio-buttons>
  `
});

export const Default = Template.bind({});
Default.args = {}


const OptionButtonTemplate: Story<RadioButtonsComponent> = (args: RadioButtonsComponent) => ({
  props: args,
  /* template */
  template: `
    <ria-poc-radio-buttons [title]="title" [appearance]="appearance">
      <ria-poc-option-button name="found" value="no" label="No"></ria-poc-option-button>
      <ria-poc-option-button name="found" value="partially" label="Partially"></ria-poc-option-button>
      <ria-poc-option-button name="found" value="yes" label="Yes"></ria-poc-option-button>
    </ria-poc-radio-buttons>
  `
});

export const OptionButton = OptionButtonTemplate.bind({});
OptionButton.args = {}


const OptionButtonCompactTemplate: Story<RadioButtonsComponent> = (args: RadioButtonsComponent) => ({
  props: args,
  /* template */
  template: `
    <ria-poc-radio-buttons [title]="title" [appearance]="appearance">
      <ria-poc-option-button name="found" value="1" label="1"></ria-poc-option-button>
      <ria-poc-option-button name="found" value="2" label="2"></ria-poc-option-button>
      <ria-poc-option-button name="found" value="3" label="3"></ria-poc-option-button>
    </ria-poc-radio-buttons>
  `
});

export const OptionButtonCompact = OptionButtonCompactTemplate.bind({});
OptionButtonCompact.args = {
  appearance: 'compact'
}
