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
    <cvi-ng-steps title="Abiellumine" [currentStepIndex]="0">
      <cvi-ng-step>
        <cvi-ng-step-panel [title]="title" cviNgStorybookCurrentComponent>
          {{ content }}
        </cvi-ng-step-panel>
      </cvi-ng-step>
      <cvi-ng-step title="Another step">
        <cvi-ng-step-panel title="Another step title" cviNgStorybookCurrentComponent>
          Some content
        </cvi-ng-step-panel>
      </cvi-ng-step>
    </cvi-ng-steps>
  `,
});

export const Default = Template.bind({});
