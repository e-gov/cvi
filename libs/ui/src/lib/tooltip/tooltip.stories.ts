import { Meta, Story } from '@storybook/angular';
import notes from './tooltip.directive.md';
import { TooltipComponent } from './tooltip.component';

type TooltipComponentWithCustomArgs = TooltipComponent & {
  configurableZIndexCSSVar: string | null;
};

export default {
  title: 'Angular/Tooltip/Tooltip',
  component: TooltipComponent,
  parameters: { notes },
  argTypes: {
    configurableZIndexCSSVar: {
      name: 'Custom z-index',
      table: {
        category: 'Playground',
      },
      control: { type: 'number' },
    },
  },
  args: {
    configurableZIndexCSSVar: null,
  },
} as Meta;

const Template: Story<TooltipComponentWithCustomArgs> = (
  args: TooltipComponentWithCustomArgs
) => ({
  props: {
    ...args,
    width: document.body.getBoundingClientRect().width,
    height: document.body.getBoundingClientRect().height,
  },
  template: `
    <div [ngStyle]="{'--veera-tooltip-zindex': configurableZIndexCSSVar}">
      <veera-ng-tooltip [message]="'This is a tooltip'" [left]="width / 2 - 67.5" [top]="175" [arrowLeft]="width / 2 - 7.5" [arrowTop]="207.5"></veera-ng-tooltip>
    </div>
  `,
});

export const Tooltip = Template.bind({});

export const TooltipWithCustomZIndex = Template.bind({});
TooltipWithCustomZIndex.storyName = 'Tooltip with custom z-index';
TooltipWithCustomZIndex.args = {
  configurableZIndexCSSVar: '1002',
};
