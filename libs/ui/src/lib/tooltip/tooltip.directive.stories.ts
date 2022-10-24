import { Meta, Story } from '@storybook/angular';
import { TooltipDirective } from './tooltip.directive';
import notes from './tooltip.directive.md';

export default {
  title: 'Angular/Tooltip',
  component: TooltipDirective,
  parameters: { notes },
  argTypes: {},
} as Meta;

const Template: Story<TooltipDirective> = (args: TooltipDirective) => ({
  props: {
    ...args,
  },
  template: `
    <p [veeraNgTooltip]="'This tooltip is displayed when hovering, if you move mouse out of the element then tooltip dissapears'">
      Hover over this element to display tooltip
    </p>
  `,
});
export const Default = Template.bind({});
