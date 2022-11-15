import { Meta, Story } from '@storybook/angular/';
import { concatMap, delay, from, of } from 'rxjs';
import { StepsComponent } from './steps.component';

export default {
  title: 'Angular/Steps/Steps',
  component: StepsComponent,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    stepsContent: {
      controls: false,
    },
    currentStepIndex: {
      name: 'Current step (starting from 0)',
      control: { type: 'number', min: 0 },
    },
  },
  args: {
    title: 'Abiellumine',
    currentStepIndex: null,
    stepsContent: [
      'Nevertheless, Cosy Moments thrives. It has its public.',
      'Its contents are mildly interesting, if you like that sort of thing.',
      'There is a "Moments in the Nursery" page, conducted by Luella Granville Waterman.',
      'There is a "Moments of Meditation" page, conducted by the Reverend Edwin T. Philpotts.',
    ],
  },
} as Meta;

const Template: Story<StepsComponent> = (args: StepsComponent) => ({
  component: StepsComponent,
  props: {
    ...args,
  },
  /* template */
  template: `
    <veera-ng-steps [title]="title" [currentStepIndex]="currentStepIndex">
      <p beforeSteps dataAttribute="steps-description">You can now add custom content before steps</p>
      <veera-ng-step title="First item with a lot of different words in it and some more so that it spans to multiple lines" dataAttribute="step_1">{{ stepsContent[0] }}</veera-ng-step>
      <veera-ng-step title="Second" dataAttribute="step_2">{{ stepsContent[1] }}</veera-ng-step>
      <veera-ng-step title="Thirrrrd" dataAttribute="step_3">{{ stepsContent[2] }}</veera-ng-step>
      <veera-ng-step title="4ourth" dataAttribute="step_4">{{ stepsContent[3] }}</veera-ng-step>
    </veera-ng-steps>
  `,
});

export const Default = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'light',
  },
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};

export const MobileWithSelectedStep = Template.bind({});
MobileWithSelectedStep.args = {
  currentStepIndex: 0,
};
MobileWithSelectedStep.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'light',
  },
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};

const TemplateObservableTitles: Story = (args) => ({
  props: {
    ...args,
    labels$: from([['First', 'Second', 'Third']]).pipe(
      concatMap((item) => of(item).pipe(delay(100)))
    ),
  },
  /* template */
  template: `
    <veera-ng-steps [title]="title" [currentStepIndex]="currentStepIndex">
      <ng-container *ngFor="let label of labels$ | async">
        <veera-ng-step [title]="label" dataAttribute="step_1">
            {{ label }}
        </veera-ng-step>
      </ng-container>
    </veera-ng-steps>
  `,
});

export const WithObservableTitles = TemplateObservableTitles.bind({});
WithObservableTitles.args = {};
