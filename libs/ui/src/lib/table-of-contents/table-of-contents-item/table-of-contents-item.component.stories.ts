import { Meta, Story } from '@storybook/angular/';
import notes from './table-of-contents-item.component.md';
import { TableOfContentsItemComponent } from './table-of-contents-item.component';

export default {
  title: 'Angular/Table of contents/Table of contents item',
  component: TableOfContentsItemComponent,
  parameters: {
    layout: 'padded',
    notes,
    // disabling Chromatic because random text will trigger changes on each run
    chromatic: { disableSnapshot: true },
  },
  args: {
    label: 'Section One with a very long label that spans many lines',
  },
} as Meta;

const Template: Story<TableOfContentsItemComponent> = (
  args: TableOfContentsItemComponent
) => ({
  component: TableOfContentsItemComponent,
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

      <cvi-ng-table-of-contents title="Sisukord">
        <cvi-ng-table-of-contents-item [label]="label" href="#section-one" cviNgStorybookCurrentComponent></cvi-ng-table-of-contents-item>
        <cvi-ng-table-of-contents-item label="Section Two" href="#section-two" cviNgStorybookCurrentComponent></cvi-ng-table-of-contents-item>
        <cvi-ng-table-of-contents-item label="Section Three" href="#section-three" cviNgStorybookCurrentComponent></cvi-ng-table-of-contents-item>
        <cvi-ng-table-of-contents-item label="Section Four" href="#section-four" cviNgStorybookCurrentComponent></cvi-ng-table-of-contents-item>
        <cvi-ng-table-of-contents-item label="Section Five" href="#section-five" cviNgStorybookCurrentComponent></cvi-ng-table-of-contents-item>
      </cvi-ng-table-of-contents>
    </cvi-ng-table-of-contents-wrapper>
  `,
});

export const Default = Template.bind({});
