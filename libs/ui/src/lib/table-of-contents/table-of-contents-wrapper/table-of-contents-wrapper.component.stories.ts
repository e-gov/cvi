import { Meta, Story } from '@storybook/angular/';
import notes from './table-of-contents-wrapper.component.md';
import { TableOfContentsWrapperComponent } from './table-of-contents-wrapper.component';

export default {
  title: 'Angular/Table of contents/Table of contents wrapper',
  component: TableOfContentsWrapperComponent,
  parameters: {
    layout: 'padded',
    notes,
    // disabling Chromatic because random text will trigger changes on each run
    chromatic: { disableSnapshot: true },
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
    <cvi-ng-table-of-contents-wrapper [hideNavOnMobile]="hideNavOnMobile" cviNgStorybookCurrentComponent>
      <div>
        <div cviNgToCSection="section-one" [ngStyle]="debugMode ? {'background-color': 'red'} : null">
          <h1>Section One</h1>
          <div [cviNgStorybookRandomParagraphs]="10"></div>
        </div>

        <div cviNgToCSection="section-two" [ngStyle]="debugMode ? {'background-color': 'orange'} : null">
          <h1>Section Two</h1>
          <div [cviNgStorybookRandomParagraphs]="10"></div>
        </div>

        <div cviNgToCSection="section-three" [ngStyle]="debugMode ? {'background-color': 'yellow'} : null">
          <h1>Section Three</h1>
          <div [cviNgStorybookRandomParagraphs]="10"></div>
        </div>

        <div cviNgToCSection="section-four" [ngStyle]="debugMode ? {'background-color': 'green'} : null">
          <h1>Section Four</h1>
          <div [cviNgStorybookRandomParagraphs]="10"></div>
        </div>


        <div cviNgToCSection="section-five" [ngStyle]="debugMode ? {'background-color': 'lightblue'} : null">
          <h1>Section Five</h1>
          <div [cviNgStorybookRandomParagraphs]="10"></div>
        </div>
      </div>

      <cvi-ng-table-of-contents title="Sisukord">
        <cvi-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-one" [ngStyle]="debugMode ? {'background-color': 'red'} : null"></cvi-ng-table-of-contents-item>
        <cvi-ng-table-of-contents-item label="Section Two" href="#section-two" [ngStyle]="debugMode ? {'background-color': 'orange'} : null"></cvi-ng-table-of-contents-item>
        <cvi-ng-table-of-contents-item label="Section Three" href="#section-three" [ngStyle]="debugMode ? {'background-color': 'yellow'} : null"></cvi-ng-table-of-contents-item>
        <cvi-ng-table-of-contents-item label="Section Four" href="#section-four" [ngStyle]="debugMode ? {'background-color': 'green'} : null"></cvi-ng-table-of-contents-item>
        <cvi-ng-table-of-contents-item label="Section Five" href="#section-five" [ngStyle]="debugMode ? {'background-color': 'lightblue'} : null"></cvi-ng-table-of-contents-item>
      </cvi-ng-table-of-contents>
    </cvi-ng-table-of-contents-wrapper>
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
InDebugMode.parameters = {
  axe: {
    disabledRules: ['color-contrast'],
  },
};

const TemplateHeadingsWithIds: Story<TableOfContentsWrapperComponent> = (
  args: TableOfContentsWrapperComponent
) => ({
  component: TableOfContentsWrapperComponent,
  props: {
    ...args,
  },
  /* template */
  template: `
    <cvi-ng-table-of-contents-wrapper [hideNavOnMobile]="hideNavOnMobile" cviNgStorybookCurrentComponent>
      <div>
        <div>
          <h1 cviNgToCSection="section-one">Section One</h1>
          <div [cviNgStorybookRandomParagraphs]="10"></div>
        </div>

        <div>
          <h1 cviNgToCSection="section-two">Section Two</h1>
          <div [cviNgStorybookRandomParagraphs]="10"></div>
        </div>

        <div>
          <h1 cviNgToCSection="section-three">Section Three</h1>
          <div [cviNgStorybookRandomParagraphs]="10"></div>
        </div>

        <div>
          <h1 cviNgToCSection="section-four">Section Four</h1>
          <div [cviNgStorybookRandomParagraphs]="10"></div>
        </div>

        <div>
          <h1 cviNgToCSection="section-five">Section Five</h1>
          <div [cviNgStorybookRandomParagraphs]="10"></div>
        </div>
      </div>

      <cvi-ng-table-of-contents title="Sisukord">
        <cvi-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-one"></cvi-ng-table-of-contents-item>
        <cvi-ng-table-of-contents-item label="Section Two" href="#section-two"></cvi-ng-table-of-contents-item>
        <cvi-ng-table-of-contents-item label="Section Three" href="#section-three"></cvi-ng-table-of-contents-item>
        <cvi-ng-table-of-contents-item label="Section Four" href="#section-four"></cvi-ng-table-of-contents-item>
        <cvi-ng-table-of-contents-item label="Section Five" href="#section-five"></cvi-ng-table-of-contents-item>
      </cvi-ng-table-of-contents>
    </cvi-ng-table-of-contents-wrapper>
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
    <cvi-ng-steps title="Abiellumine" [currentStepIndex]="null" [hasTableOfContents]="true">
      <p cvi-steps="after-title">Custom content before steps</p>
      <cvi-ng-step>
        <cvi-ng-table-of-contents-wrapper [hideNavOnMobile]="hideNavOnMobile">
          <cvi-ng-step-panel title="Step One">
            <div cviNgToCSection="section-one-one">
              <h1>Section One</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div cviNgToCSection="section-one-two">
              <h1>Section Two</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div cviNgToCSection="section-one-three">
              <h1>Section Three</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div cviNgToCSection="section-one-four">
              <h1>Section Four</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div cviNgToCSection="section-one-five">
              <h1>Section Five</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>
          </cvi-ng-step-panel>

          <cvi-ng-table-of-contents title="Sisukord">
            <cvi-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-one-one"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Two" href="#section-one-two"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Three" href="#section-one-three"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Four" href="#section-one-four"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Five" href="#section-one-five"></cvi-ng-table-of-contents-item>
          </cvi-ng-table-of-contents>
        </cvi-ng-table-of-contents-wrapper>
      </cvi-ng-step>
      <cvi-ng-step>
        <cvi-ng-table-of-contents-wrapper [hideNavOnMobile]="true">
          <cvi-ng-step-panel title="Step Two">
            <div cviNgToCSection="section-two-one">
              <h1>Section One</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div cviNgToCSection="section-two-two">
              <h1>Section Two</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div cviNgToCSection="section-two-three">
              <h1>Section Three</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div cviNgToCSection="section-two-four">
              <h1>Section Four</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div cviNgToCSection="section-two-five">
              <h1>Section Five</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>
          </cvi-ng-step-panel>

          <cvi-ng-table-of-contents title="Sisukord">
            <cvi-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-two-one"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Two" href="#section-two-two"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Three" href="#section-two-three"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Four" href="#section-two-four"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Five" href="#section-two-five"></cvi-ng-table-of-contents-item>
          </cvi-ng-table-of-contents>
        </cvi-ng-table-of-contents-wrapper>
      </cvi-ng-step>
      <cvi-ng-step>
        <cvi-ng-table-of-contents-wrapper [hideNavOnMobile]="true">
          <cvi-ng-step-panel title="Step Three">
            <div cviNgToCSection="section-three-one">
              <h1>Section One</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div cviNgToCSection="section-three-two">
              <h1>Section Two</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div cviNgToCSection="section-three-three">
              <h1>Section Three</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div cviNgToCSection="section-three-four">
              <h1>Section Four</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div cviNgToCSection="section-three-five">
              <h1>Section Five</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>
          </cvi-ng-step-panel>

          <cvi-ng-table-of-contents title="Sisukord">
            <cvi-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-three-one"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Two" href="#section-three-two"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Three" href="#section-three-three"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Four" href="#section-three-four"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Five" href="#section-three-five"></cvi-ng-table-of-contents-item>
          </cvi-ng-table-of-contents>
        </cvi-ng-table-of-contents-wrapper>
      </cvi-ng-step>
      <cvi-ng-step>
        <cvi-ng-table-of-contents-wrapper [hideNavOnMobile]="true">
          <cvi-ng-step-panel title="Step Four">
            <div cviNgToCSection="section-four-one">
              <h1>Section One</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div cviNgToCSection="section-four-two">
              <h1>Section Two</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div cviNgToCSection="section-four-three">
              <h1>Section Three</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div cviNgToCSection="section-four-four">
              <h1>Section Four</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div cviNgToCSection="section-four-five">
              <h1>Section Five</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>
          </cvi-ng-step-panel>

          <cvi-ng-table-of-contents title="Sisukord">
            <cvi-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-four-one"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Two" href="#section-four-two"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Three" href="#section-four-three"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Four" href="#section-four-four"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Five" href="#section-four-five"></cvi-ng-table-of-contents-item>
          </cvi-ng-table-of-contents>
        </cvi-ng-table-of-contents-wrapper>
      </cvi-ng-step>
    </cvi-ng-steps>
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
    <cvi-ng-steps title="Abiellumine" [currentStepIndex]="null" [hasTableOfContents]="true">
      <p cvi-steps="after-title">Custom content before steps</p>
      <cvi-ng-step>
        <cvi-ng-table-of-contents-wrapper [hideNavOnMobile]="hideNavOnMobile">
          <cvi-ng-step-panel title="Step One">
            <div>
              <h1 cviNgToCSection="section-one-one">Section One</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 cviNgToCSection="section-one-two">Section Two</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 cviNgToCSection="section-one-three">Section Three</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 cviNgToCSection="section-one-four">Section Four</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 cviNgToCSection="section-one-five">Section Five</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>
          </cvi-ng-step-panel>

          <cvi-ng-table-of-contents title="Sisukord">
            <cvi-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-one-one"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Two" href="#section-one-two"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Three" href="#section-one-three"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Four" href="#section-one-four"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Five" href="#section-one-five"></cvi-ng-table-of-contents-item>
          </cvi-ng-table-of-contents>
        </cvi-ng-table-of-contents-wrapper>
      </cvi-ng-step>
      <cvi-ng-step>
        <cvi-ng-table-of-contents-wrapper [hideNavOnMobile]="true">
          <cvi-ng-step-panel title="Step Two">
            <div>
              <h1 cviNgToCSection="section-two-one">Section One</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 cviNgToCSection="section-two-two">Section Two</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 cviNgToCSection="section-two-three">Section Three</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 cviNgToCSection="section-two-four">Section Four</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 cviNgToCSection="section-two-five">Section Five</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>
          </cvi-ng-step-panel>

          <cvi-ng-table-of-contents title="Sisukord">
            <cvi-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-two-one"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Two" href="#section-two-two"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Three" href="#section-two-three"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Four" href="#section-two-four"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Five" href="#section-two-five"></cvi-ng-table-of-contents-item>
          </cvi-ng-table-of-contents>
        </cvi-ng-table-of-contents-wrapper>
      </cvi-ng-step>
      <cvi-ng-step>
        <cvi-ng-table-of-contents-wrapper [hideNavOnMobile]="true">
          <cvi-ng-step-panel title="Step Three">
            <div>
              <h1 cviNgToCSection="section-three-one">Section One</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 cviNgToCSection="section-three-two">Section Two</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 cviNgToCSection="section-three-three">Section Three</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 cviNgToCSection="section-three-four">Section Four</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 cviNgToCSection="section-three-five">Section Five</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>
          </cvi-ng-step-panel>

          <cvi-ng-table-of-contents title="Sisukord">
            <cvi-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-three-one"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Two" href="#section-three-two"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Three" href="#section-three-three"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Four" href="#section-three-four"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Five" href="#section-three-five"></cvi-ng-table-of-contents-item>
          </cvi-ng-table-of-contents>
        </cvi-ng-table-of-contents-wrapper>
      </cvi-ng-step>
      <cvi-ng-step>
        <cvi-ng-table-of-contents-wrapper [hideNavOnMobile]="true">
          <cvi-ng-step-panel title="Step Four">
            <div>
              <h1 cviNgToCSection="section-four-one">Section One</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 cviNgToCSection="section-four-two">Section Two</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 cviNgToCSection="section-four-three">Section Three</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 cviNgToCSection="section-four-four">Section Four</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>

            <div>
              <h1 cviNgToCSection="section-four-five">Section Five</h1>
              <div [cviNgStorybookRandomParagraphs]="10"></div>
            </div>
          </cvi-ng-step-panel>

          <cvi-ng-table-of-contents title="Sisukord">
            <cvi-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-four-one"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Two" href="#section-four-two"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Three" href="#section-four-three"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Four" href="#section-four-four"></cvi-ng-table-of-contents-item>
            <cvi-ng-table-of-contents-item label="Section Five" href="#section-four-five"></cvi-ng-table-of-contents-item>
          </cvi-ng-table-of-contents>
        </cvi-ng-table-of-contents-wrapper>
      </cvi-ng-step>
    </cvi-ng-steps>
  `,
});

export const WithStepsAndHeadingsWithIds =
  TemplateWithStepsAndHeadingsWithIds.bind({});
WithStepsAndHeadingsWithIds.storyName = 'With steps (ids on headings)';
