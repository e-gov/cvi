import { componentWrapperDecorator, Meta } from '@storybook/angular';
import notes from '../progress-bar/progress-bar.component.md';
import { ProgressBarComponent } from './progress-bar.component';

const wrapperDecorators = [
  componentWrapperDecorator(ProgressBarComponent, ({ args }) => {
    return args;
  }),
];

export default {
  title: 'Angular/Progress bar',
  component: ProgressBarComponent,
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
    layout: 'padded',
  },
  args: {
    progressValue: 0,
    progressMessage: 'Lõpetatud tegevused:',
    successMessage: 'Kõik tegevused lõpetatud',
  },
} as Meta<ProgressBarComponent>;

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
};

export const Mobile1 = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12mini',
    },
  },
  args: {
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
    progressValue: 3,
  },
};

export const Desktop0 = {
  ...Default,
  args: {
    progressValue: 0,
  },
};

export const Desktop1 = {
  ...Default,
  args: {
    progressValue: 1,
  },
};

export const Desktop2 = {
  ...Default,
  args: {
    progressValue: 2,
  },
};

export const Desktop3 = {
  ...Default,
  args: {
    progressValue: 3,
  },
};
