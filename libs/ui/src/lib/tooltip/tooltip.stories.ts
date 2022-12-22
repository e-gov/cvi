import { Meta, Story } from '@storybook/angular';
import notes from './tooltip.directive.md';
import { TooltipComponent } from './tooltip.component';

export default {
  title: 'Angular/Static tooltip',
  component: TooltipComponent,
  parameters: { notes },
  argTypes: {},
} as Meta;

console.log(document.body.getBoundingClientRect());

const TemplateHTML: Story<TooltipComponent> = (args: TooltipComponent) => ({
  props: {
    ...args,
    width: document.body.getBoundingClientRect().width,
    height: document.body.getBoundingClientRect().height,
  },
  template: `
    <veera-ng-tooltip [message]="'This is a tooltip'" [left]="width / 2 - 67.5" [top]="175" 
    [arrowLeft]="width / 2 - 7.5" [arrowTop]="207.5"></veera-ng-tooltip>
  `,
});

export const TooltipStatic = TemplateHTML.bind({});
