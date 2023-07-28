import { Meta, StoryFn } from '@storybook/angular/';
import { concatMap, delay, from, of } from 'rxjs';
import { StepsComponent } from './steps.component';
import { moduleMetadata } from '@storybook/angular';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import notes from './steps.component.md';

const withObservableTitlesDelay = 1000;

export default {
  title: 'Angular/Steps/Steps',
  component: StepsComponent,
  parameters: {
    layout: 'padded',
    notes,
  },
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
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
} as Meta<StepsComponent>;

const DefaultTemplate: StoryFn<StepsComponent> = (args: StepsComponent) => {
  const form = new FormGroup({
    text: new FormControl('Some text'),
  });

  return {
    props: {
      ...args,
      form: form,
      formMinRows: 5,
      formHtmlId: 'fk123sd4kfds',
      formLabel: 'Label',
    },
    /* template */
    template: `
      <cvi-ng-steps [title]="title" [currentStepIndex]="currentStepIndex" [hasTableOfContents]="hasTableOfContents">
        <p cvi-steps="after-title" dataAttribute="steps-description">You can now add custom content before steps</p>
        <cvi-ng-step dataAttribute="step_1">
          <cvi-ng-step-panel [title]="title">
            <cvi-ng-html-section html="{{ stepsContent[0] }}"></cvi-ng-html-section>
          </cvi-ng-step-panel>
        </cvi-ng-step>
        <cvi-ng-step dataAttribute="step_2">
          <cvi-ng-step-panel title="Second">
            {{ stepsContent[1] }}
          </cvi-ng-step-panel>
        </cvi-ng-step>
        <cvi-ng-step dataAttribute="step_3">
          <cvi-ng-step-panel title="Third">
            {{ stepsContent[2] }}
          </cvi-ng-step-panel>
        </cvi-ng-step>
        <cvi-ng-step dataAttribute="step_4">
          <cvi-ng-step-panel title="Fourth">
            {{ stepsContent[3] }}
          </cvi-ng-step-panel>
        </cvi-ng-step>
        <cvi-ng-step dataAttribute="step_5">
          <cvi-ng-step-panel title="With a form">
            <div [formGroup]="form">
              Textarea, input and the character counter directive should work properly inside steps.
              <cvi-ng-form-item [label]="formLabel" [htmlId]="formHtmlId">
                <cvi-ng-textarea formControlName="text" cviNgCharacterCounter [maxChars]="30" [minRows]="formMinRows" [htmlId]="formHtmlId"></cvi-ng-textarea>
              </cvi-ng-form-item>
            </div>
          </cvi-ng-step-panel>
        </cvi-ng-step>
      </cvi-ng-steps>
    `,
  };
};

export const Default = {
  render: DefaultTemplate,
};

export const DefaultWithSelectedStep = {
  ...Default,
  args: {
    currentStepIndex: 1,
  },
};

export const Mobile = {
  ...Default,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'iphone12mini',
    },
  },
};

export const MobileWithSelectedStep = {
  ...Default,
  args: {
    currentStepIndex: 0,
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
    viewport: {
      defaultViewport: 'iphone12mini',
    },
  },
};

export const WithObservableTitles = {
  render: (args: StepsComponent) => ({
    props: {
      ...args,
      labels$: from([['First', 'Second', 'Third']]).pipe(
        concatMap((item) => of(item).pipe(delay(withObservableTitlesDelay)))
      ),
    },
    /* template */
    template: `
      <cvi-ng-steps [title]="title" [currentStepIndex]="currentStepIndex" [hasTableOfContents]="hasTableOfContents">
        <ng-container *ngFor="let label of labels$ | async">
          <cvi-ng-step dataAttribute="step_1">
            <cvi-ng-step-panel [title]="label">
              {{ label }}
            </cvi-ng-step-panel>
          </cvi-ng-step>
        </ng-container>
      </cvi-ng-steps>
    `,
  }),
  parameters: {
    chromatic: { delay: withObservableTitlesDelay + 300 },
  },
};

export const WithTranslations = {
  render: (args: StepsComponent) => ({
    props: args,
    /* template */
    template: `
      <cvi-ng-steps [title]="'common.steps.title' | translate" [currentStepIndex]="currentStepIndex" [hasTableOfContents]="hasTableOfContents">
        <p cvi-steps="after-title" dataAttribute="steps-description">You can now add custom content before steps</p>
        <cvi-ng-step dataAttribute="step_1">
          <cvi-ng-step-panel [title]="'common.steps.step1' | translate">
            <cvi-ng-html-section html="{{ stepsContent[0] }}"></cvi-ng-html-section>
          </cvi-ng-step-panel>
        </cvi-ng-step>
        <cvi-ng-step dataAttribute="step_2">
          <cvi-ng-step-panel [title]="'common.steps.step2' | translate">
            {{ stepsContent[1] }}
          </cvi-ng-step-panel>
        </cvi-ng-step>
        <cvi-ng-step dataAttribute="step_3">
          <cvi-ng-step-panel title="Third">
            {{ stepsContent[2] }}
          </cvi-ng-step-panel>
        </cvi-ng-step>
        <cvi-ng-step dataAttribute="step_4">
          <cvi-ng-step-panel title="Fourth">
            {{ stepsContent[3] }}
          </cvi-ng-step-panel>
        </cvi-ng-step>
      </cvi-ng-steps>
    `,
  }),

  parameters: {
    axe: {
      // disabling because axe doesn't wait sometimes for the button text to load
      disabledRules: ['button-name'],
    },
  },
};
