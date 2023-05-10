import { Meta, Story } from '@storybook/angular';
import { TooltipDirective } from './tooltip.directive';
import notes from './tooltip.directive.md';

export default {
  title: 'Angular/Tooltip/Tooltip Directive',
  component: TooltipDirective,
  parameters: { notes },
  argTypes: {},
} as Meta;

const Template: Story<TooltipDirective> = (args: TooltipDirective) => ({
  props: {
    ...args,
  },
  /* template */
  template: `
    <p [cviNgTooltip]="'This tooltip is displayed when hovering, if you move mouse out of the element then tooltip disappears'" dataAttribute="test-tooltip-source">
      Hover over this element to display tooltip
    </p>
  `,
});

export const Default = Template.bind({});

const TemplateOnButton: Story<TooltipDirective> = (args: TooltipDirective) => ({
  props: {
    ...args,
  },
  /* template */
  template: `
    <cvi-ng-notification [showIcon]="false" [showCloseButton]="false" [size]="'compact'">
      <p>When hovering on the questionmark, a tooltip appears.</p>
      <p>When clicking just on the tooltip, nothing should happen.</p>
      <p>When clicking on just the button but not the tooltip, a box appears.</p>
      <p>Clicking on a tooltip should not activate any other elements.</p>
    </cvi-ng-notification>

    <cvi-ng-track [horizontalAlignment]="'center'">
      <cvi-ng-button appearance="secondary" (click)="visible = !visible">
        Click
        <cvi-ng-icon [name]="'info'" [height]="'16'" [cviNgTooltip]=
        "'This tooltip is displayed when hovering, if you move mouse out of element then tooltip dissapears'">
        </cvi-ng-icon>
      </cvi-ng-button>
    </cvi-ng-track>

    <cvi-ng-notification [showIcon]="false" [showCloseButton]="false" [size]="'compact'" *ngIf="visible">
      <p>This should only appear when clicking on a button, not on the tooltip</p>
    </cvi-ng-notification>
  `,
});

export const TooltipOnButton = TemplateOnButton.bind({});

const TemplateEdgeTest: Story<TooltipDirective> = (args: TooltipDirective) => ({
  props: {
    ...args,
  },
  /* template */
  template: `
    <cvi-ng-track [horizontalAlignment]="'center'">
      <cvi-ng-notification [showIcon]="false" [showCloseButton]="false" [size]="'compact'">
        <p>When tooltip elements are located near the right or left side of the window,</p>
        <p>the tooltip is not centered above the element. Instead, tooltips are moved</p>
        <p>away from the sides to prevent being hidden behind the edge.</p>
      </cvi-ng-notification>
    </cvi-ng-track>

    <div style="width: 95vw">
      <cvi-ng-button appearance="secondary" style="float: left">
        <cvi-ng-screenreader-text label="Button label"></cvi-ng-screenreader-text>
        <cvi-ng-icon [name]="'info'" [height]="'16'" [cviNgTooltip]=
        "'This tooltip is displayed when hovering, if you move mouse out of element then tooltip dissapears'">
        </cvi-ng-icon>
      </cvi-ng-button>

      <cvi-ng-button appearance="secondary" style="float: right">
        <cvi-ng-icon [name]="'info'" [height]="'16'" [cviNgTooltip]=
        "'This tooltip is displayed when hovering, if you move mouse out of element then tooltip dissapears'">
        </cvi-ng-icon>
        Some words here
      </cvi-ng-button>
    </div>
  `,
});

export const TooltipNearSideEdge = TemplateEdgeTest.bind({});

const TemplateHeaderTest: Story<TooltipDirective> = (
  args: TooltipDirective
) => ({
  props: {
    ...args,
  },
  /* template */
  template: `
    <div style="position: fixed; text-align: center; top: 20px; left: 45%">
      <cvi-ng-button appearance="secondary">
        <cvi-ng-screenreader-text label="Button label"></cvi-ng-screenreader-text>
        <cvi-ng-icon [name]="'info'" [height]="'16'" [cviNgTooltip]=
        "'This tooltip is displayed when hovering, if you move mouse out of element then tooltip dissapears'">
        </cvi-ng-icon>
      </cvi-ng-button>
    </div>

    <cvi-ng-track [horizontalAlignment]="'center'">
      <cvi-ng-notification [showIcon]="false" [showCloseButton]="false" [size]="'compact'">
        <p>When tooltip elements are located near the top edge of the window,</p>
        <p>the tooltip is hidden above the window edge. To avoid this problem,</p>
        <p>tooltip should not be placed to the top of the window.</p>
      </cvi-ng-notification>
    </cvi-ng-track>
  `,
});

export const TooltipNearTopEdge = TemplateHeaderTest.bind({});
