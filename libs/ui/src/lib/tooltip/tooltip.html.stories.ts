import { Meta } from '@storybook/angular';
import notes from './tooltip.html.md?raw';

export default {
  title: 'HTML/Tooltip',
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
    options: { selectedPanel: 'storybook/html/panel' },
  },
} as Meta;

export const Default = {
  render: (args: unknown) => ({
    props: args,
    /* template */
    template: `
      <div class="cvi-tooltip" style="position: relative; max-width: 400px; min-width: 125px">
        <div class="cvi-tooltip__content">
          This is a tooltip
        </div>
        <div class="cvi-tooltip__arrow" style="position: absolute; right: 55px; bottom: -47px"></div>
      </div>
    `,
  }),
};
