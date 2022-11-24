import { Meta, Story } from '@storybook/angular/';
import notes from './table-of-contents-wrapper.component.md';
import { TableOfContentsWrapperComponent } from './table-of-contents-wrapper.component';

export default {
  title: 'Angular/Table of contents/Table of contents wrapper',
  component: TableOfContentsWrapperComponent,
  parameters: {
    layout: 'padded',
    notes,
  },
} as Meta;

const Template: Story<TableOfContentsWrapperComponent> = (
  args: TableOfContentsWrapperComponent
) => ({
  component: TableOfContentsWrapperComponent,
  props: {
    ...args,
  },
  /* template */
  template: `
    <veera-ng-table-of-contents-wrapper [hideNavOnMobile]="hideNavOnMobile" veeraNgStorybookCurrentComponent>
      <div>
        <div veeraNgToCSection="section-one" [ngStyle]="debugMode ? {'background-color': 'red'} : null">
          <h1>Section One</h1>
          <div [veeraNgStorybookRandomParagraphs]="10"></div>
        </div>

        <div veeraNgToCSection="section-two" [ngStyle]="debugMode ? {'background-color': 'orange'} : null">
          <h1>Section Two</h1>
          <div [veeraNgStorybookRandomParagraphs]="10"></div>
        </div>

        <div veeraNgToCSection="section-three" [ngStyle]="debugMode ? {'background-color': 'yellow'} : null">
          <h1>Section Three</h1>
          <div [veeraNgStorybookRandomParagraphs]="10"></div>
        </div>

        <div veeraNgToCSection="section-four" [ngStyle]="debugMode ? {'background-color': 'green'} : null">
          <h1>Section Four</h1>
          <div [veeraNgStorybookRandomParagraphs]="10"></div>
        </div>


        <div veeraNgToCSection="section-five" [ngStyle]="debugMode ? {'background-color': 'lightblue'} : null">
          <h1>Section Five</h1>
          <div [veeraNgStorybookRandomParagraphs]="10"></div>
        </div>
      </div>

      <veera-ng-table-of-contents title="Sisukord">
        <veera-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-one" [ngStyle]="debugMode ? {'background-color': 'red'} : null"></veera-ng-table-of-contents-item>
        <veera-ng-table-of-contents-item label="Section Two" href="#section-two" [ngStyle]="debugMode ? {'background-color': 'orange'} : null"></veera-ng-table-of-contents-item>
        <veera-ng-table-of-contents-item label="Section Three" href="#section-three" [ngStyle]="debugMode ? {'background-color': 'yellow'} : null"></veera-ng-table-of-contents-item>
        <veera-ng-table-of-contents-item label="Section Four" href="#section-four" [ngStyle]="debugMode ? {'background-color': 'green'} : null"></veera-ng-table-of-contents-item>
        <veera-ng-table-of-contents-item label="Section Five" href="#section-five" [ngStyle]="debugMode ? {'background-color': 'lightblue'} : null"></veera-ng-table-of-contents-item>
      </veera-ng-table-of-contents>
    </veera-ng-table-of-contents-wrapper>
  `,
});

export const Default = Template.bind({});
Default.argTypes = {
  debugMode: {
    name: 'Debug mode',
    control: { type: 'boolean' },
    table: {
      category: 'Playground',
    },
  },
} as never;

Default.args = {
  debugMode: false,
} as never;

export const InDebugMode = Template.bind({});
InDebugMode.args = {
  debugMode: true,
} as never;

const TemplateHeadingsWithIds: Story<TableOfContentsWrapperComponent> = (
  args: TableOfContentsWrapperComponent
) => ({
  component: TableOfContentsWrapperComponent,
  props: {
    ...args,
  },
  /* template */
  template: `
    <veera-ng-table-of-contents-wrapper [hideNavOnMobile]="hideNavOnMobile" veeraNgStorybookCurrentComponent>
      <div>
        <div>
          <h1 veeraNgToCSection="section-one">Section One</h1>
          <div [veeraNgStorybookRandomParagraphs]="10"></div>
        </div>

        <div>
          <h1 veeraNgToCSection="section-two">Section Two</h1>
          <div [veeraNgStorybookRandomParagraphs]="10"></div>
        </div>

        <div>
          <h1 veeraNgToCSection="section-three">Section Three</h1>
          <div [veeraNgStorybookRandomParagraphs]="10"></div>
        </div>

        <div>
          <h1 veeraNgToCSection="section-four">Section Four</h1>
          <div [veeraNgStorybookRandomParagraphs]="10"></div>
        </div>

        <div>
          <h1 veeraNgToCSection="section-five">Section Five</h1>
          <div [veeraNgStorybookRandomParagraphs]="10"></div>
        </div>
      </div>

      <veera-ng-table-of-contents title="Sisukord">
        <veera-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-one"></veera-ng-table-of-contents-item>
        <veera-ng-table-of-contents-item label="Section Two" href="#section-two"></veera-ng-table-of-contents-item>
        <veera-ng-table-of-contents-item label="Section Three" href="#section-three"></veera-ng-table-of-contents-item>
        <veera-ng-table-of-contents-item label="Section Four" href="#section-four"></veera-ng-table-of-contents-item>
        <veera-ng-table-of-contents-item label="Section Five" href="#section-five"></veera-ng-table-of-contents-item>
      </veera-ng-table-of-contents>
    </veera-ng-table-of-contents-wrapper>
  `,
});

export const HeadingsWithIds = TemplateHeadingsWithIds.bind({});
HeadingsWithIds.storyName = 'With ids on headings';

const TemplateWithSteps: Story<TableOfContentsWrapperComponent> = (
  args: TableOfContentsWrapperComponent
) => ({
  component: TableOfContentsWrapperComponent,
  props: {
    ...args,
  },
  /* template */
  template: `
    <veera-ng-steps title="Abiellumine" [currentStepIndex]="null" [hasTableOfContents]="true">
      <p veera-steps="after-title">Custom content before steps</p>
      <veera-ng-step>
        <veera-ng-table-of-contents-wrapper [hideNavOnMobile]="hideNavOnMobile">
          <veera-ng-step-panel title="Step One">
            <div veeraNgToCSection="section-one-one">
              <h1>Section One</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div veeraNgToCSection="section-one-two">
              <h1>Section Two</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div veeraNgToCSection="section-one-three">
              <h1>Section Three</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div veeraNgToCSection="section-one-four">
              <h1>Section Four</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div veeraNgToCSection="section-one-five">
              <h1>Section Five</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>
          </veera-ng-step-panel>

          <veera-ng-table-of-contents title="Sisukord">
            <veera-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-one-one"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Two" href="#section-one-two"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Three" href="#section-one-three"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Four" href="#section-one-four"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Five" href="#section-one-five"></veera-ng-table-of-contents-item>
          </veera-ng-table-of-contents>
        </veera-ng-table-of-contents-wrapper>
      </veera-ng-step>
      <veera-ng-step>
        <veera-ng-table-of-contents-wrapper [hideNavOnMobile]="true">
          <veera-ng-step-panel title="Step Two">
            <div veeraNgToCSection="section-two-one">
              <h1>Section One</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div veeraNgToCSection="section-two-two">
              <h1>Section Two</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div veeraNgToCSection="section-two-three">
              <h1>Section Three</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div veeraNgToCSection="section-two-four">
              <h1>Section Four</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div veeraNgToCSection="section-two-five">
              <h1>Section Five</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>
          </veera-ng-step-panel>

          <veera-ng-table-of-contents title="Sisukord">
            <veera-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-two-one"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Two" href="#section-two-two"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Three" href="#section-two-three"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Four" href="#section-two-four"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Five" href="#section-two-five"></veera-ng-table-of-contents-item>
          </veera-ng-table-of-contents>
        </veera-ng-table-of-contents-wrapper>
      </veera-ng-step>
      <veera-ng-step>
        <veera-ng-table-of-contents-wrapper [hideNavOnMobile]="true">
          <veera-ng-step-panel title="Step Three">
            <div veeraNgToCSection="section-three-one">
              <h1>Section One</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div veeraNgToCSection="section-three-two">
              <h1>Section Two</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div veeraNgToCSection="section-three-three">
              <h1>Section Three</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div veeraNgToCSection="section-three-four">
              <h1>Section Four</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div veeraNgToCSection="section-three-five">
              <h1>Section Five</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>
          </veera-ng-step-panel>

          <veera-ng-table-of-contents title="Sisukord">
            <veera-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-three-one"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Two" href="#section-three-two"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Three" href="#section-three-three"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Four" href="#section-three-four"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Five" href="#section-three-five"></veera-ng-table-of-contents-item>
          </veera-ng-table-of-contents>
        </veera-ng-table-of-contents-wrapper>
      </veera-ng-step>
      <veera-ng-step>
        <veera-ng-table-of-contents-wrapper [hideNavOnMobile]="true">
          <veera-ng-step-panel title="Step Four">
            <div veeraNgToCSection="section-four-one">
              <h1>Section One</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div veeraNgToCSection="section-four-two">
              <h1>Section Two</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div veeraNgToCSection="section-four-three">
              <h1>Section Three</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div veeraNgToCSection="section-four-four">
              <h1>Section Four</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div veeraNgToCSection="section-four-five">
              <h1>Section Five</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>
          </veera-ng-step-panel>

          <veera-ng-table-of-contents title="Sisukord">
            <veera-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-four-one"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Two" href="#section-four-two"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Three" href="#section-four-three"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Four" href="#section-four-four"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Five" href="#section-four-five"></veera-ng-table-of-contents-item>
          </veera-ng-table-of-contents>
        </veera-ng-table-of-contents-wrapper>
      </veera-ng-step>
    </veera-ng-steps>
  `,
});

export const WithSteps = TemplateWithSteps.bind({});
WithSteps.storyName = 'With steps (ids on heading container)';

export const WithStepsMobile = TemplateWithSteps.bind({});
WithStepsMobile.storyName = 'With steps (ids on heading container, mobile)';
WithStepsMobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};

const TemplateWithStepsAndHeadingsWithIds: Story<
  TableOfContentsWrapperComponent
> = (args: TableOfContentsWrapperComponent) => ({
  component: TableOfContentsWrapperComponent,
  props: {
    ...args,
  },
  /* template */
  template: `
    <veera-ng-steps title="Abiellumine" [currentStepIndex]="null" [hasTableOfContents]="true">
      <p veera-steps="after-title">Custom content before steps</p>
      <veera-ng-step>
        <veera-ng-table-of-contents-wrapper [hideNavOnMobile]="hideNavOnMobile">
          <veera-ng-step-panel title="Step One">
            <div>
              <h1 veeraNgToCSection="section-one-one">Section One</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 veeraNgToCSection="section-one-two">Section Two</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 veeraNgToCSection="section-one-three">Section Three</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 veeraNgToCSection="section-one-four">Section Four</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 veeraNgToCSection="section-one-five">Section Five</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>
          </veera-ng-step-panel>

          <veera-ng-table-of-contents title="Sisukord">
            <veera-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-one-one"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Two" href="#section-one-two"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Three" href="#section-one-three"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Four" href="#section-one-four"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Five" href="#section-one-five"></veera-ng-table-of-contents-item>
          </veera-ng-table-of-contents>
        </veera-ng-table-of-contents-wrapper>
      </veera-ng-step>
      <veera-ng-step>
        <veera-ng-table-of-contents-wrapper [hideNavOnMobile]="true">
          <veera-ng-step-panel title="Step Two">
            <div>
              <h1 veeraNgToCSection="section-two-one">Section One</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 veeraNgToCSection="section-two-two">Section Two</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 veeraNgToCSection="section-two-three">Section Three</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 veeraNgToCSection="section-two-four">Section Four</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 veeraNgToCSection="section-two-five">Section Five</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>
          </veera-ng-step-panel>

          <veera-ng-table-of-contents title="Sisukord">
            <veera-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-two-one"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Two" href="#section-two-two"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Three" href="#section-two-three"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Four" href="#section-two-four"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Five" href="#section-two-five"></veera-ng-table-of-contents-item>
          </veera-ng-table-of-contents>
        </veera-ng-table-of-contents-wrapper>
      </veera-ng-step>
      <veera-ng-step>
        <veera-ng-table-of-contents-wrapper [hideNavOnMobile]="true">
          <veera-ng-step-panel title="Step Three">
            <div>
              <h1 veeraNgToCSection="section-three-one">Section One</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 veeraNgToCSection="section-three-two">Section Two</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 veeraNgToCSection="section-three-three">Section Three</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 veeraNgToCSection="section-three-four">Section Four</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 veeraNgToCSection="section-three-five">Section Five</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>
          </veera-ng-step-panel>

          <veera-ng-table-of-contents title="Sisukord">
            <veera-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-three-one"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Two" href="#section-three-two"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Three" href="#section-three-three"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Four" href="#section-three-four"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Five" href="#section-three-five"></veera-ng-table-of-contents-item>
          </veera-ng-table-of-contents>
        </veera-ng-table-of-contents-wrapper>
      </veera-ng-step>
      <veera-ng-step>
        <veera-ng-table-of-contents-wrapper [hideNavOnMobile]="true">
          <veera-ng-step-panel title="Step Four">
            <div>
              <h1 veeraNgToCSection="section-four-one">Section One</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 veeraNgToCSection="section-four-two">Section Two</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 veeraNgToCSection="section-four-three">Section Three</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 veeraNgToCSection="section-four-four">Section Four</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 veeraNgToCSection="section-four-five">Section Five</h1>
              <div [veeraNgStorybookRandomParagraphs]="10"></div>
            </div>
          </veera-ng-step-panel>

          <veera-ng-table-of-contents title="Sisukord">
            <veera-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-four-one"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Two" href="#section-four-two"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Three" href="#section-four-three"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Four" href="#section-four-four"></veera-ng-table-of-contents-item>
            <veera-ng-table-of-contents-item label="Section Five" href="#section-four-five"></veera-ng-table-of-contents-item>
          </veera-ng-table-of-contents>
        </veera-ng-table-of-contents-wrapper>
      </veera-ng-step>
    </veera-ng-steps>
  `,
});

export const WithStepsAndHeadingsWithIds =
  TemplateWithStepsAndHeadingsWithIds.bind({});
WithStepsAndHeadingsWithIds.storyName = 'With steps (ids on headings)';
