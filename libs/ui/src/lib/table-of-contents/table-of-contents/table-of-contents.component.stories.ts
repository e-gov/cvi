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
    <cvi-ng-table-of-contents-wrapper>
      <div>
        <div cviNgToCSection="section-one">
          <h1>Section One</h1>
          <div [cviNgStorybookRandomParagraphs]="10"></div>
        </div>

        <div cviNgToCSection="section-two">
          <h1>Section Two</h1>
          <div [cviNgStorybookRandomParagraphs]="10"></div>
        </div>

        <div cviNgToCSection="section-three">
          <h1>Section Three</h1>
          <div [cviNgStorybookRandomParagraphs]="10"></div>
        </div>

        <div cviNgToCSection="section-four">
          <h1>Section Four</h1>
          <div [cviNgStorybookRandomParagraphs]="10"></div>
        </div>


        <div cviNgToCSection="section-five">
          <h1>Section Five</h1>
          <div [cviNgStorybookRandomParagraphs]="10"></div>
        </div>
      </div>

      <cvi-ng-table-of-contents [title]="title" cviNgStorybookCurrentComponent>
        <cvi-ng-table-of-contents-item label="Section One with a very long label that spans many lines" href="#section-one"></cvi-ng-table-of-contents-item>
        <cvi-ng-table-of-contents-item label="Section Two" href="#section-two"></cvi-ng-table-of-contents-item>
        <cvi-ng-table-of-contents-item label="Section Three" href="#section-three"></cvi-ng-table-of-contents-item>
        <cvi-ng-table-of-contents-item label="Section Four" href="#section-four"></cvi-ng-table-of-contents-item>
        <cvi-ng-table-of-contents-item label="Section Five" href="#section-five"></cvi-ng-table-of-contents-item>
      </cvi-ng-table-of-contents>
    </cvi-ng-table-of-contents-wrapper>
  `,
});

export const Default = Template.bind({});
