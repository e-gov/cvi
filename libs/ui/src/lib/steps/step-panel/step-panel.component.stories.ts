import { Meta } from '@storybook/angular';
import { StepPanelComponent } from './step-panel.component';
import notes from './step-panel.component.md?raw';

export default {
  title: 'Angular/Steps/Step panel',
  component: StepPanelComponent,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: notes,
      },
    },
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
    title: 'First step',
    content: 'First step content.',
  },
} as Meta;

export const Default = {
  render: (args: StepPanelComponent) => ({
    props: args,
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
  }),
};
