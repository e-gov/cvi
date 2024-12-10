import { Meta, StoryObj } from '@storybook/angular';
import notes from './progress-bar.html.md';

export default {
  title: 'HTML/Progress bar',
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
    options: { selectedPanel: 'storybook/html/panel' },
    layout: 'padded',
  },
  argTypes: {
    content: {
      name: 'Content',
      table: {
        category: 'Playground',
      },
    },
  },
} as Meta;

export const Default: StoryObj = {
  render: (args: any) => ({
    props: args,
    template: `
      <div class="cvi-progress-bar" style="--progress: 67%; --circle-stroke-width: 16; --circle-radius: 90;">
        <div class="cvi-progress-bar__label-wrapper">
          <span class="cvi-progress-bar__label">Lõpetatud tegevused: </span
          ><span class="cvi-progress-bar__numeric-content"> 2/3 </span>
        </div>
        <div class="cvi-progress-bar__horizontal-bar"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="cvi-progress-bar__circular-bar"
          width="180"
          height="180"
          viewBox="0 0 180 180">
          <circle
            class="cvi-progress-bar__circular-bar-background"
            cx="90"
            cy="90"
            r="82"></circle>
          <circle
            class="cvi-progress-bar__circular-bar-progress"
            cx="90"
            cy="90"
            r="82"
            style="stroke-dasharray: 565.487, 565.487; stroke-dashoffset: 186.611;"></circle></svg
      ></div>
    `,
  }),
};

export const Mobile = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12mini',
    },
  },
};
