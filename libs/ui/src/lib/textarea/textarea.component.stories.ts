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
