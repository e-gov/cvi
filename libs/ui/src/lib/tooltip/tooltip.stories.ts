import { Meta, componentWrapperDecorator } from '@storybook/angular';
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

export const Default = {
  render: (args: TooltipComponentWithCustomArgs) => ({
    props: {
      ...args,
      width: document.body.getBoundingClientRect().width,
      height: document.body.getBoundingClientRect().height,
    },
    /* template */
    template: `
      <div [ngStyle]="{'--cvi-tooltip-zindex': configurableZIndexCSSVar}">
        <cvi-ng-tooltip [message]="'This is a tooltip'" [left]="width / 2 - 67.5" [top]="175" [arrowLeft]="width / 2 - 7.5" [arrowTop]="207.5"></cvi-ng-tooltip>
      </div>
    `,
  }),
};

export const TooltipWithCustomZIndex = {
  ...Default,
  decorators: [
    componentWrapperDecorator((story) => {
      /* template */
      return `
        <div [ngStyle]="{'z-index': 1000, 'width.px': 100, 'height.px': 100, 'background': 'red', 'position': 'relative', 'top.px': -150}"></div>
        ${story}
      `;
    }),
  ],
  name: 'Tooltip with custom z-index',
  args: {
    configurableZIndexCSSVar: '1002',
  },
};
