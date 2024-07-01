import { Meta, StoryObj } from '@storybook/angular';
import notes from './labeled-item.html.md?raw';

export default {
  title: 'HTML/Labeled item',
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
    options: { selectedPanel: 'storybook/html/panel' },
  },
} as Meta;

export const Default: StoryObj = {
  render: (args: any) => ({
    props: args,
    /* template */
    template: `
      <div class="cvi-labeled-item">
        <div class="cvi-track cvi-track--direction-vertical cvi-track--layout-flex" style="--gap: 1; --horizontal-alignment: normal;">
          <div class="cvi-labeled-item__label" id="labeled-item-5e7e44d1">Sündmus</div>
          <span class="cvi-labeled-item__content" aria-labelledby="labeled-item-5e7e44d1">Abielu sõlmimine</span>
        </div>
      </div>
    `,
  }),
};
