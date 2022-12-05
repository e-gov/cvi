import { Meta, Story } from '@storybook/angular';
import notes from './feedback.component.md';
import { FeedbackComponent } from './feedback.component';

export default {
  title: 'Angular/Feedback',
  parameters: { notes },
  component: FeedbackComponent,
} as Meta<FeedbackComponent>;

const title = 'Did you find what you were looking for?';
const options = [
  { value: 'NO', label: 'No' },
  { value: 'PARTIALLY', label: 'Partially' },
  { value: 'YES', label: 'Yes' },
];

const Template: Story<FeedbackComponent> = (args: FeedbackComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title,
  options,
  showIcons: false,
};

const WithIconsTemplate: Story<FeedbackComponent> = (
  args: FeedbackComponent
) => ({
  props: args,
});

export const WithIcons = WithIconsTemplate.bind({});
WithIcons.args = {
  title,
  options,
  showIcons: true,
};
