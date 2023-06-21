import { Meta, StoryFn } from '@storybook/angular';
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

const Template: StoryFn<FeedbackComponent> = (args: FeedbackComponent) => ({
  props: args,
});

export const Default = {
  render: Template,

  args: {
    title,
    options,
    showIcons: false,
  },
};

const WithIconsTemplate: StoryFn<FeedbackComponent> = (
  args: FeedbackComponent
) => ({
  props: args,
});

export const WithIcons = {
  render: WithIconsTemplate,

  args: {
    title,
    options,
    showIcons: true,
  },
};
