import { Meta, Story } from '@storybook/angular/';
import { StepsComponent } from './steps.component';

export default {
  title: 'Angular/Steps/Steps',
  component: StepsComponent,
  argTypes: {
    stepsContent: {
      controls: false
    },
    currentStepIndex: {
      name: 'Current step (starting from 0)',
      control: { type: 'number', min: 0 },
    },
  },
  args: {
    title: 'Abiellumine',
    currentStepIndex: 1,
    stepsContent: [
      'Nevertheless, Cosy Moments thrives. It has its public.',
      'Its contents are mildly interesting, if you like that sort of thing.',
      'There is a "Moments in the Nursery" page, conducted by Luella Granville Waterman.',
      'There is a "Moments of Meditation" page, conducted by the Reverend Edwin T. Philpotts.'
    ],
  }
} as Meta;

const Template: Story<StepsComponent> = (args: StepsComponent) => ({
  component: StepsComponent,
  props: {
    ...args,
  },
  /* template */
  template: `
    <ria-poc-steps [title]="title" [currentStepIndex]="currentStepIndex">
      <ria-poc-step title="First item with a lot of different words in it">{{ stepsContent[0] }}</ria-poc-step>
      <ria-poc-step title="Second">{{ stepsContent[1] }}</ria-poc-step>
      <ria-poc-step title="Thirrrrd">{{ stepsContent[2] }}</ria-poc-step>
      <ria-poc-step title="4ourth">{{ stepsContent[3] }}</ria-poc-step>
    </ria-poc-steps>
  `
});

export const Default = Template.bind({});
