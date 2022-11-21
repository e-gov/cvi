import { Meta, Story } from '@storybook/angular';
import notes from './step-panel.component.md';
import { StepPanelComponent } from './step-panel.component';

export default {
  title: 'Angular/Steps/Step panel',
  component: StepPanelComponent,
  parameters: {
    layout: 'padded',
    notes,
  },
  argTypes: {
    content: {
      name: 'Content',
      table: {
        category: 'Playground',
      },
    },
  },
  args: {
    title: 'First step is the importantest',
    content: 'Nevertheless, Cosy Moments thrives. It has its public.',
  },
} as Meta;

const Template: Story<StepPanelComponent> = (args: StepPanelComponent) => ({
  component: StepPanelComponent,
  props: {
    ...args,
  },
  /* template */
  template: `
    <veera-ng-steps title="Abiellumine" [currentStepIndex]="0">
      <veera-ng-step>
        <veera-ng-step-panel [title]="title" veeraNgStorybookCurrentComponent>
          {{ content }}
        </veera-ng-step-panel>
      </veera-ng-step>
      <veera-ng-step title="Another step">
        <veera-ng-step-panel title="Another step title" veeraNgStorybookCurrentComponent>
          Some content
        </veera-ng-step-panel>
      </veera-ng-step>
    </veera-ng-steps>
  `,
});

export const Default = Template.bind({});
