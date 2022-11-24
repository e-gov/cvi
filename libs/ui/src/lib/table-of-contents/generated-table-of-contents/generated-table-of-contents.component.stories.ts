import { Meta, moduleMetadata, Story } from '@storybook/angular';
import notes from './generated-table-of-contents.component.md';
import { GeneratedTableOfContentsComponent } from './generated-table-of-contents.component';
import { Component } from '@angular/core';

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
        <h2>A nested heading: string baby explore</h2>
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
      <h2>An h2: pretty none change slept range afraid</h2>
      <div [veeraNgStorybookRandomParagraphs]="10"></div>
    </div>
    <div>
      <h3>An h3: explore single gain swam base farther courage</h3>
      <div [veeraNgStorybookRandomParagraphs]="10"></div>
    </div>
    <div>
      <div>
        <h2>A nested heading: string baby explore</h2>
      </div>
      <div [veeraNgStorybookRandomParagraphs]="10"></div>
    </div>
  `,
})
class StorybookToCHTMLStepsExampleComponent {}

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
    <veera-ng-generated-table-of-contents [title]="title">
      <veera-ng-storybook-toc-html-example></veera-ng-storybook-toc-html-example>
    </veera-ng-generated-table-of-contents>
  `,
});

export const Default = Template.bind({});

const TemplateWithSteps: Story<GeneratedTableOfContentsComponent> = (
  args: GeneratedTableOfContentsComponent
) => ({
  component: GeneratedTableOfContentsComponent,
  props: {
    ...args,
  },
  /* template */
  template: `
    <veera-ng-steps title="Abiellumine" [currentStepIndex]="null" [hasTableOfContents]="true">
      <p veera-steps="after-title">Custom content before steps</p>
      <veera-ng-step>
        <veera-ng-generated-table-of-contents [title]="title">
          <veera-ng-step-panel title="Step One">
            <veera-ng-storybook-toc-html-steps-example></veera-ng-storybook-toc-html-steps-example>
          </veera-ng-step-panel>
        </veera-ng-generated-table-of-contents>
      </veera-ng-step>
      <veera-ng-step>
        <veera-ng-generated-table-of-contents [title]="title">
          <veera-ng-step-panel title="Step Two">
            <veera-ng-storybook-toc-html-steps-example></veera-ng-storybook-toc-html-steps-example>
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
