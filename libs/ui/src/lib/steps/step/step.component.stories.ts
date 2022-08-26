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
  }
} as Meta;

const Template: Story<StepComponent> = (args: StepComponent) => ({
  component: StepComponent,
  props: {
    ...args,
  },
  /* template */
  template: `
    <ria-poc-steps title="Abiellumine" [currentStepIndex]="0">
      <ria-poc-step [title]="title">{{ content }}</ria-poc-step>
    </ria-poc-steps>
  `
});

export const Default = Template.bind({});
