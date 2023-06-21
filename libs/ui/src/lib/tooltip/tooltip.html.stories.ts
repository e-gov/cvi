import { Meta, StoryFn } from '@storybook/angular';
import notes from './tooltip.html.md';

export default {
  title: 'HTML/Tooltip',
  parameters: {
    notes,
    options: { selectedPanel: 'html/panel' },
  },
} as Meta;

const Template: StoryFn = (args) => ({
  props: args,
  template: `
    <div class="cvi-tooltip" style="position: relative; max-width: 400px; min-width: 125px">
        <div class="cvi-tooltip__content">
            This is a tooltip
        </div>
        <div class="cvi-tooltip__arrow" style="position: absolute; right: 55px; bottom: -47px"></div>
    </div>
    `,
});

export const Default = {
  render: Template,
};
