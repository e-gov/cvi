import { Meta } from '@storybook/angular';
import notes from './feedback.component.md';
import { FeedbackComponent } from './feedback.component';

export default {
  title: 'Angular/Feedback',
  parameters: { notes },
  component: FeedbackComponent,
} as Meta<FeedbackComponent>;

export const Default = {
  render: (args: FeedbackComponent) => ({
    props: args,
  }),
};

export const WithIcons = {
  ...Default,
  args: {
    showIcons: true,
  },
};
