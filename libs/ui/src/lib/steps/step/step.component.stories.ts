import { Meta } from '@storybook/angular';
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

export const Default = {
  render: (args: StepComponent) => ({
    props: args,
    /* template */
    template: `
      <cvi-ng-steps title="Abiellumine" [currentStepIndex]="0">
        <cvi-ng-step dataAttribute="step_1" cviNgStorybookCurrentComponent>
          <cvi-ng-step-panel title="The title">
            Some content for the first step
          </cvi-ng-step-panel>
        </cvi-ng-step>
        <cvi-ng-step dataAttribute="step_2" cviNgStorybookCurrentComponent>
          <cvi-ng-step-panel title="Another step">
            Some more content
          </cvi-ng-step-panel>
        </cvi-ng-step>
      </cvi-ng-steps>
    `,
  }),
};
