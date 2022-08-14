import { moduleMetadata, Story, Meta } from '@storybook/angular';
import notes from './input.md';
import { InputComponent } from './input.component';

export default {
  title: 'Angular/Input',
  component: InputComponent,
  parameters: { notes },
} as Meta<InputComponent>;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
