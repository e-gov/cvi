import { Meta, Story } from '@storybook/angular/';
import notes from './steps.component.md';
import { concatMap, delay, from, of } from 'rxjs';
import { StepsComponent } from './steps.component';

export default {
  title: 'Angular/Steps/Steps',
  component: StepsComponent,
  parameters: {
    layout: 'padded',
    notes,
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
      '<a href="https://www.eesti.ee">Nevertheless, Cosy Moments thrives. It has its public.</a>',
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
    <veera-ng-steps [title]="title" [currentStepIndex]="currentStepIndex" [hasTableOfContents]="hasTableOfContents">
      <p veera-steps="after-title" dataAttribute="steps-description">You can now add custom content before steps</p>
      <veera-ng-step dataAttribute="step_1">
        <veera-ng-step-panel [title]="title">
          <veera-ng-html-section html="{{ stepsContent[0] }}"></veera-ng-html-section>
        </veera-ng-step-panel>
      </veera-ng-step>
      <veera-ng-step dataAttribute="step_2">
        <veera-ng-step-panel title="Second">
          {{ stepsContent[1] }}
        </veera-ng-step-panel>
      </veera-ng-step>
      <veera-ng-step dataAttribute="step_3">
        <veera-ng-step-panel title="Third">
          {{ stepsContent[2] }}
        </veera-ng-step-panel>
      </veera-ng-step>
      <veera-ng-step dataAttribute="step_4">
        <veera-ng-step-panel title="Fourth">
          {{ stepsContent[3] }}
        </veera-ng-step-panel>
      </veera-ng-step>
    </veera-ng-steps>
  `,
});

export const Default = Template.bind({});
export const DefaultWithSelectedStep = Template.bind({});
DefaultWithSelectedStep.args = {
  currentStepIndex: 0,
};

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
      concatMap((item) => of(item).pipe(delay(1000)))
    ),
  },
  /* template */
  template: `
    <veera-ng-steps [title]="title" [currentStepIndex]="currentStepIndex" [hasTableOfContents]="hasTableOfContents">
      <ng-container *ngFor="let label of labels$ | async">
        <veera-ng-step dataAttribute="step_1">
          <veera-ng-step-panel [title]="label">
            {{ label }}
          </veera-ng-step-panel>
        </veera-ng-step>
      </ng-container>
    </veera-ng-steps>
  `,
});

export const WithObservableTitles = TemplateObservableTitles.bind({});
WithObservableTitles.args = {};

const TemplateWithTranslations: Story<StepsComponent> = (
  args: StepsComponent
) => ({
  component: StepsComponent,
  props: {
    ...args,
  },
  /* template */
  template: `
    <veera-ng-steps [title]="'common.steps.title' | translate" [currentStepIndex]="currentStepIndex" [hasTableOfContents]="hasTableOfContents">
      <p veera-steps="after-title" dataAttribute="steps-description">You can now add custom content before steps</p>
      <veera-ng-step dataAttribute="step_1">
        <veera-ng-step-panel [title]="'common.steps.step1' | translate">
          <veera-ng-html-section html="{{ stepsContent[0] }}"></veera-ng-html-section>
        </veera-ng-step-panel>
      </veera-ng-step>
      <veera-ng-step dataAttribute="step_2">
        <veera-ng-step-panel [title]="'common.steps.step2' | translate">
          {{ stepsContent[1] }}
        </veera-ng-step-panel>
      </veera-ng-step>
      <veera-ng-step dataAttribute="step_3">
        <veera-ng-step-panel title="Third">
          {{ stepsContent[2] }}
        </veera-ng-step-panel>
      </veera-ng-step>
      <veera-ng-step dataAttribute="step_4">
        <veera-ng-step-panel title="Fourth">
          {{ stepsContent[3] }}
        </veera-ng-step-panel>
      </veera-ng-step>
    </veera-ng-steps>
  `,
});

export const WithTranslations = TemplateWithTranslations.bind({});
