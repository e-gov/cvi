import { Meta, Story } from '@storybook/angular/';
import { StepComponent } from './step.component';

export default {
  title: 'Angular/Steps/Step',
  component: StepComponent,
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

const Template: Story<StepComponent> = (args: StepComponent) => ({
  component: StepComponent,
  props: {
    ...args,
  },
  /* template */
  template: `
    <veera-ng-steps title="Abiellumine" [currentStepIndex]="0">
      <veera-ng-step [title]="title">{{ content }}</veera-ng-step>
    </veera-ng-steps>
  `,
});

export const Default = Template.bind({});
