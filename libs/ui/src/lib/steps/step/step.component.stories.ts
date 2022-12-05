import { Meta, Story } from '@storybook/angular';
import notes from './step.component.md';
import { StepComponent } from './step.component';

export default {
  title: 'Angular/Steps/Step',
  component: StepComponent,
  parameters: {
    layout: 'padded',
    notes,
  },
} as Meta;

const Template: Story<StepComponent> = (args: StepComponent) => ({
  component: StepComponent,
  props: {
    ...args,
  },
  /* template */
  template: `
    <veera-ng-steps title="Abiellumine" [currentStepIndex]="0">
      <veera-ng-step dataAttribute="step_1" veeraNgStorybookCurrentComponent>
        <veera-ng-step-panel title="The title">
          Some content for the first step
        </veera-ng-step-panel>
      </veera-ng-step>
      <veera-ng-step dataAttribute="step_2" veeraNgStorybookCurrentComponent>
        <veera-ng-step-panel title="Another step">
          Some content
        </veera-ng-step-panel>
      </veera-ng-step>
    </veera-ng-steps>
  `,
});

export const Default = Template.bind({});
