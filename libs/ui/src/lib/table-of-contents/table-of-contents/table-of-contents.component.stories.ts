import { Meta, Story } from '@storybook/angular/';
import notes from './table-of-contents.component.md';
import { TableOfContentsComponent } from './table-of-contents.component';

export default {
  title: 'Angular/Table of contents/Table of contents',
  component: TableOfContentsComponent,
  parameters: {
    layout: 'padded',
    notes,
  },
  args: {
    title: 'Table of contents',
  },
} as Meta;

const Template: Story<TableOfContentsComponent> = (
  args: TableOfContentsComponent
) => ({
  component: TableOfContentsComponent,
  props: {
    ...args,
  },
  /* template */
  template: `
    <veera-ng-table-of-contents-wrapper>
      <div>
        <div veeraNgToCSection="section-one">
          <h1>Section One</h1>
          <div [veeraNgStorybookRandomParagraphs]="10"></div>
        </div>

        <div veeraNgToCSection="section-two">
          <h1>Section Two</h1>
          <div [veeraNgStorybookRandomParagraphs]="10"></div>
        </div>

        <div veeraNgToCSection="section-three">
          <h1>Section Three</h1>
          <div [veeraNgStorybookRandomParagraphs]="10"></div>
        </div>

        <div veeraNgToCSection="section-four">
          <h1>Section Four</h1>
          <div [veeraNgStorybookRandomParagraphs]="10"></div>
        </div>


        <div veeraNgToCSection="section-five">
          <h1>Section Five</h1>
          <div [veeraNgStorybookRandomParagraphs]="10"></div>
        </div>
      </div>

      <veera-ng-table-of-contents [title]="title" veeraNgStorybookCurrentComponent>
        <veera-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-one"></veera-ng-table-of-contents-item>
        <veera-ng-table-of-contents-item label="Section Two" href="#section-two"></veera-ng-table-of-contents-item>
        <veera-ng-table-of-contents-item label="Section Three" href="#section-three"></veera-ng-table-of-contents-item>
        <veera-ng-table-of-contents-item label="Section Four" href="#section-four"></veera-ng-table-of-contents-item>
        <veera-ng-table-of-contents-item label="Section Five" href="#section-five"></veera-ng-table-of-contents-item>
      </veera-ng-table-of-contents>
    </veera-ng-table-of-contents-wrapper>
  `,
});

export const Default = Template.bind({});
