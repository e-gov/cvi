import { Meta, Story } from '@storybook/angular';
import { TooltipDirective } from './tooltip.directive';
import notes from './tooltip.directive.md';

export default {
  title: 'Angular/Tooltip Directive',
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

const TemplateOnButton: Story<TooltipDirective> = (args: TooltipDirective) => ({
  props: {
    ...args,
  },
  template: `
    <veera-ng-notification [showIcon]="false" [showCloseButton]="false" [size]="'compact'">
      <p>When hovering on the questionmark, a tooltip appears.</p>
      <p>When clicking just on the tooltip, nothing should happen.</p>
      <p>When clicking on just the button but not the tooltip, a box appears.</p>
      <p>Clicking on a tooltip should not activate any other elements.</p>
    </veera-ng-notification>

    <veera-ng-track [horizontalAlignment]="'center'">
      <veera-ng-button appearance="secondary" (click)="visible = !visible">
        Click
        <veera-ng-icon [name]="'info'" [height]="'16'" [veeraNgTooltip]=
        "'This tooltip is displayed when hovering, if you move mouse out of element then tooltip dissapears'">
        </veera-ng-icon>
      </veera-ng-button>
    </veera-ng-track>

    <veera-ng-notification [showIcon]="false" [showCloseButton]="false" [size]="'compact'" *ngIf="visible">
      <p>This should only appear when clicking on a button, not on the tooltip</p>
    </veera-ng-notification>
  `,
});

const TemplateEdgeTest: Story<TooltipDirective> = (args: TooltipDirective) => ({
  props: {
    ...args,
  },
  template: `
    <veera-ng-track [horizontalAlignment]="'center'">
      <veera-ng-notification [showIcon]="false" [showCloseButton]="false" [size]="'compact'">
        <p>When tooltip elements are located near the right or left side of the window,</p>
        <p>the tooltip is not centered above the element. Instead, tooltips are moved</p>
        <p>away from the sides to prevent being hidden behind the edge.</p>
      </veera-ng-notification>
    </veera-ng-track>

    <div style="width: 95vw">
      <veera-ng-button appearance="secondary" style="float: left">
        <veera-ng-icon [name]="'info'" [height]="'16'" [veeraNgTooltip]=
        "'This tooltip is displayed when hovering, if you move mouse out of element then tooltip dissapears'">
        </veera-ng-icon>
      </veera-ng-button>

      <veera-ng-button appearance="secondary" style="float: right">
        <veera-ng-icon [name]="'info'" [height]="'16'" [veeraNgTooltip]=
        "'This tooltip is displayed when hovering, if you move mouse out of element then tooltip dissapears'">
        </veera-ng-icon>
        Some words here
      </veera-ng-button>
    </div>
  `,
});

const TemplateHeaderTest: Story<TooltipDirective> = (
  args: TooltipDirective
) => ({
  props: {
    ...args,
  },
  template: `
    <div style="position: fixed; text-align: center; top: 20px; left: 45%">
      <veera-ng-button appearance="secondary">
        <veera-ng-icon [name]="'info'" [height]="'16'" [veeraNgTooltip]=
        "'This tooltip is displayed when hovering, if you move mouse out of element then tooltip dissapears'">
        </veera-ng-icon>
      </veera-ng-button>
    </div>

    <veera-ng-track [horizontalAlignment]="'center'">
      <veera-ng-notification [showIcon]="false" [showCloseButton]="false" [size]="'compact'">
        <p>When tooltip elements are located near the top edge of the window,</p>
        <p>the tooltip is hidden above the window edge. To avoid this problem,</p>
        <p>tooltip should not be placed to the top of the window.</p>
      </veera-ng-notification>
    </veera-ng-track>
    `,
});

export const Default = Template.bind({});
export const TooltipOnButton = TemplateOnButton.bind({});
export const TooltipNearSideEdge = TemplateEdgeTest.bind({});
export const TooltipNearTopEdge = TemplateHeaderTest.bind({});
