import { Meta, Story } from '@storybook/angular';
import notes from './textarea.component.md';

import { TextareaComponent } from './textarea.component';

export default {
  title: 'Angular/Textarea',
  parameters: { notes },
  component: TextareaComponent,
} as Meta;

const Template: Story<TextareaComponent> = (args: TextareaComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

const CharacterCounterTemplate: Story<TextareaComponent> = (
  args: TextareaComponent
) => ({
  props: args,
  template: `
    <veera-ng-textarea veeraNgCharacterCounter [maxChars]="30"></veera-ng-textarea>
  `,
});

export const WithCharacterCounter = CharacterCounterTemplate.bind({});
