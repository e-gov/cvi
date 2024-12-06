import { componentWrapperDecorator, Meta, StoryObj } from '@storybook/angular';
import notes from '../progress-bar/progress-bar.component.md';
import { ProgressBarComponent } from './progress-bar.component';

const wrapperDecorators = [
  componentWrapperDecorator(ProgressBarComponent, ({ args }) => {
    return args;
  }),
];
export default {
  title: 'Angular/ProgressBar',
  component: ProgressBarComponent,
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'Gray',
    },
  },
  argTypes: {
    background: {
      name: 'background',
      control: { type: 'inline-radio' },
    },
    size: {
      name: 'Size',
      control: { type: 'inline-radio' },
    },
    progressValue: {
      name: 'progressValue',
      control: { type: 'range', min: 0, max: 3, step: 1 },
    },
  },
  args: {
    theme: 'dark',
    severity: 'none',
    size: 's',
    progressValue: 0,
  },
} as Meta<ProgressBarComponent>;

type Story = StoryObj<ProgressBarComponent>;

export const Default = {
  render: (args: ProgressBarComponent) => ({
    props: args,
    template: `{{ content }}`,
  }),
  decorators: wrapperDecorators,
};

export const Mobile0 = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12mini',
    },
  },
  args: {
    size: 's',
  },
};

export const Mobile1 = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12mini',
    },
  },
  args: {
    size: 's',
    progressValue: 1,
  },
};

export const Mobile2 = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12mini',
    },
  },
  args: {
    size: 's',
    progressValue: 2,
  },
};

export const Mobile3 = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12mini',
    },
  },
  args: {
    size: 's',
    progressValue: 3,
  },
};

export const Desktop0 = {
  ...Default,
  args: {
    size: 'm',
    progressValue: 0,
  },
};

export const Desktop1 = {
  ...Default,
  args: {
    size: 'm',
    progressValue: 1,
  },
};

export const Desktop2 = {
  ...Default,
  args: {
    size: 'm',
    progressValue: 2,
  },
};

export const Desktop3 = {
  ...Default,
  args: {
    size: 'm',
    progressValue: 3,
  },
};
