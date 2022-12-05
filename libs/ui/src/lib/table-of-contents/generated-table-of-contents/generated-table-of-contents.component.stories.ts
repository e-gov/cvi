import { Meta, moduleMetadata, Story } from '@storybook/angular';
import notes from './generated-table-of-contents.component.md';
import { GeneratedTableOfContentsComponent } from './generated-table-of-contents.component';
import { Component, Input } from '@angular/core';
import { concatMap, delay, from, of } from 'rxjs';

@Component({
  selector: 'veera-ng-storybook-toc-html-example',
  template: `
    <div>
      <h2>An h2: pretty none change slept range afraid</h2>
      <div [veeraNgStorybookRandomParagraphs]="10"></div>
    </div>
    <div>
      <h3>An h3: explore single gain swam base farther courage</h3>
      <div [veeraNgStorybookRandomParagraphs]="10"></div>
    </div>
    <div>
      <div>
        <h2>A nested h2 heading: string baby explore</h2>
      </div>
      <div [veeraNgStorybookRandomParagraphs]="10"></div>
    </div>
  `,
})
class StorybookToCHTMLExampleComponent {}

@Component({
  selector: 'veera-ng-storybook-toc-html-steps-example',
  template: `
    <div>
      <div [veeraNgStorybookRandomParagraphs]="2"></div>
      <ng-container *ngIf="headingDisplayed">
        <h2>An h2: pretty none change slept range afraid</h2>
        <div [veeraNgStorybookRandomParagraphs]="10"></div>
      </ng-container>
    </div>
    <div>
      <h3>An h3: explore single gain swam base farther courage</h3>
      <div [veeraNgStorybookRandomParagraphs]="10"></div>
    </div>
    <div>
      <div>
        <h2>A nested h2 heading 1: string baby explore</h2>
      </div>
      <div [veeraNgStorybookRandomParagraphs]="10"></div>
    </div>
    <div>
      <div>
        <h2>A nested h2 heading 2: string baby explore</h2>
      </div>
      <div [veeraNgStorybookRandomParagraphs]="10"></div>
    </div>
    <ng-container *ngIf="extraAsyncSections | async">
      <div *ngFor="let section of extraAsyncSections | async">
        <h2>{{ section.title }}</h2>
        <div>{{ section.content }}</div>
      </div>
    </ng-container>
  `,
})
class StorybookToCHTMLStepsExampleComponent {
  @Input() extraAsyncSections!: { title: string; content: string }[];
  headingDisplayed = true;
}

export default {
  title: 'Angular/Table of contents/Generated table of contents',
  component: GeneratedTableOfContentsComponent,
  parameters: {
    layout: 'padded',
    notes,
  },
  decorators: [
    moduleMetadata({
      declarations: [
        StorybookToCHTMLExampleComponent,
        StorybookToCHTMLStepsExampleComponent,
      ],
    }),
  ],
  args: {
    title: 'Sisukord',
    headingSelector: 'h1, h2, h3',
  },
} as Meta;

const Template: Story<GeneratedTableOfContentsComponent> = (
  args: GeneratedTableOfContentsComponent
) => ({
  component: GeneratedTableOfContentsComponent,
  props: {
    ...args,
  },
  /* template */
  template: `
    <veera-ng-generated-table-of-contents [title]="title" [headingSelector]="headingSelector">
      <veera-ng-storybook-toc-html-example></veera-ng-storybook-toc-html-example>
    </veera-ng-generated-table-of-contents>
  `,
});

export const Default = Template.bind({});

export const WithCustomHeadingLevels = Template.bind({});
WithCustomHeadingLevels.args = {
  headingSelector: 'h1, h2',
};

const TemplateWithSteps: Story<GeneratedTableOfContentsComponent> = (
  args: GeneratedTableOfContentsComponent
) => ({
  component: GeneratedTableOfContentsComponent,
  props: {
    ...args,
    extraAsyncSections: from([
      [
        {
          title: 'I am the title of the first observable array element',
          content:
            'Content is irrelevant market if tone term notice road settlers higher cry industrial job headed wing friendly color throughout symbol front mouse rear cat swing short sent noun cold wherever author establish felt come ocean look power help whether easier heavy gray softly industrial rising wise package record shirt they ice press even scale wealth shallow post exactly ball line complex may gather for composition burn duty accident say stronger job author are in bit',
        },
        {
          title: 'I am the title of the second observable array element',
          content:
            'This content is also irrelevant southern river couple hollow ancient cookies flat onto our behind thin unusual away instance everything explanation setting drive cold roll refer case brought continent blew been wood goes known sink important goose seldom pocket fat food central label teach meet contrast car breakfast thou throat week cat rough',
        },
      ],
    ]).pipe(concatMap((item) => of(item).pipe(delay(500)))),
  },
  /* template */
  template: `
    <veera-ng-steps title="Abiellumine" [currentStepIndex]="null" [hasTableOfContents]="true">
      <p veera-steps="after-title">Custom content before steps</p>
      <veera-ng-step>
        <veera-ng-generated-table-of-contents [title]="title">
          <veera-ng-step-panel title="Step One">
            <veera-ng-storybook-toc-html-steps-example [extraAsyncSections]="extraAsyncSections"></veera-ng-storybook-toc-html-steps-example>
          </veera-ng-step-panel>
        </veera-ng-generated-table-of-contents>
      </veera-ng-step>
      <veera-ng-step>
        <veera-ng-generated-table-of-contents [title]="title">
          <veera-ng-step-panel title="Step Two">
            <div>
              <div [veeraNgStorybookRandomParagraphs]="2"></div>
                <h2>Some random h2</h2>
                <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>
            <div>
              <h3>A random h3 heading with a lot of sense in it</h3>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>
            <div>
              <div>
                <h2>Papadiboopi</h2>
              </div>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>
          </veera-ng-step-panel>
        </veera-ng-generated-table-of-contents>
      </veera-ng-step>
    </veera-ng-steps>
  `,
});

export const WithSteps = TemplateWithSteps.bind({});
WithSteps.storyName = 'With steps';

export const WithStepsMobile = TemplateWithSteps.bind({});
WithStepsMobile.storyName = 'With steps (mobile)';
WithStepsMobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};
