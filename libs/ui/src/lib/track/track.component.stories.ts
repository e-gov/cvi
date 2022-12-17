import { Story, Meta, ArgTypes } from '@storybook/angular';
import notes from './track.component.md';
import { TrackComponent } from './track.component';

const categoryFlex = {
  table: {
    category: 'Inputs (flex only)',
  },
};

const categoryGrid = {
  table: {
    category: 'Inputs (grid only)',
  },
};

export default {
  title: 'Angular/Track',
  component: TrackComponent,
  parameters: {
    notes,
    layout: 'padded',
  },
  argTypes: {
    gap: {
      name: 'Gap',
      control: { type: 'range', min: 0, max: 20, step: 1 },
    },
    horizontalAlignment: {
      name: 'Horizontal alignment',
      options: ['left', 'center', 'right', 'justify'],
      control: { type: 'inline-radio' },
      if: { arg: 'flexDirection', eq: 'horizontal' },
    },
    verticalAlignment: {
      name: 'Vertical alignment',
      options: ['normal', 'top', 'center', 'bottom'],
      control: { type: 'inline-radio' },
      if: { arg: 'flexDirection', eq: 'horizontal' },
    },
    flexDirection: {
      name: 'Direction',
      options: [
        'horizontal',
        'vertical',
        'verticalOnMobile',
        'verticalReverseOnMobile',
      ],
      control: { type: 'inline-radio' },
      ...categoryFlex,
    },
    layout: {
      name: 'Layout method',
      options: ['flex', 'grid'],
      control: { type: 'inline-radio' },
    },
    flexIsMultiline: {
      name: 'Is multiline',
      control: { type: 'boolean' },
      if: { arg: 'flexDirection', eq: 'horizontal' },
      ...categoryFlex,
    },
    flexColumnsEqual: {
      name: 'Items have equal width',
      if: { arg: 'flexDirection', eq: 'horizontal' },
      ...categoryFlex,
    },
    gridRows: {
      name: 'Grid rows',
      control: { type: 'number', min: 1, max: 20, step: 1 },
      ...categoryGrid,
    },
  },
  args: {
    gap: 1,
    horizontalAlignment: 'left',
    verticalAlignment: 'normal',
    flexDirection: 'horizontal',
    layout: 'flex',
    flexIsMultiline: false,
    flexColumnsEqual: false,
    gridRows: undefined,
  },
} as Meta<TrackComponent>;

const Template: Story<TrackComponent> = (args: TrackComponent) => ({
  props: args,
  /* template */
  template: `
    <veera-ng-track [gap]="gap" [horizontalAlignment]="horizontalAlignment" [verticalAlignment]="verticalAlignment" [flexDirection]="flexDirection" [flexIsMultiline]="flexIsMultiline" [layout]="layout">
      <veera-ng-button appearance="secondary">Cancel</veera-ng-button>
      <veera-ng-button>Submit</veera-ng-button>
    </veera-ng-track>
  `,
});

const TemplateManyItems: Story<TrackComponent> = (args: TrackComponent) => ({
  props: args,
  /* template */
  template: `
    <veera-ng-track [gap]="gap" [horizontalAlignment]="horizontalAlignment" [verticalAlignment]="verticalAlignment" [flexDirection]="flexDirection" [flexIsMultiline]="flexIsMultiline" [flexColumnsEqual]="flexColumnsEqual" [gridRows]="gridRows" [layout]="layout">
      <veera-ng-button>Button 1</veera-ng-button>
      <veera-ng-button>Button with another label</veera-ng-button>
      <veera-ng-button>Button 3</veera-ng-button>
      <veera-ng-button>Button 4</veera-ng-button>
      <veera-ng-button>Button the Fifth</veera-ng-button>
      <veera-ng-button>Button of the Lucky Scrambler</veera-ng-button>
      <veera-ng-button>Button numero Seven</veera-ng-button>
      <veera-ng-button>Button 8</veera-ng-button>
      <veera-ng-button>Button 9</veera-ng-button>
    </veera-ng-track>
  `,
});

const TemplateWithFormItems: Story<TrackComponent> = (
  args: TrackComponent
) => ({
  props: args,
  /* template */
  template: `
    <veera-ng-track [gap]="gap" [horizontalAlignment]="horizontalAlignment" [verticalAlignment]="verticalAlignment" [flexDirection]="flexDirection" [flexIsMultiline]="flexIsMultiline" [flexColumnsEqual]="flexColumnsEqual" [gridRows]="gridRows" [layout]="layout">
      <veera-ng-form-item label="Some stuff 1" htmlId="someid">
        <veera-ng-input htmlId="someid"></veera-ng-input>
      </veera-ng-form-item>
      <veera-ng-form-item label="Some other points to make including this 2" htmlId="someid2">
        <veera-ng-input htmlId="someid2"></veera-ng-input>
      </veera-ng-form-item>
      <veera-ng-form-item label="A third field 3" htmlId="someid3">
        <veera-ng-input htmlId="someid3"></veera-ng-input>
      </veera-ng-form-item>
      <veera-ng-form-item label="Another field number four" htmlId="someid4">
        <veera-ng-input htmlId="someid4"></veera-ng-input>
      </veera-ng-form-item>
    </veera-ng-track>
  `,
});

const TemplateWithFormItemsComplex: Story<TrackComponent> = (
  args: TrackComponent
) => ({
  props: args,
  /* template */
  template: `
    <veera-ng-storybook-note>
      <p>This story compares two layout methods, with some adaptations made for using track with form items.</p>
      <p>In the first track CSS flex layout is used, so the last item may expand to full width in a separate row if it lacks space. Note that setting CSS variables for <code>veera-textfield</code> component may be required.</p>
      <p>In the second track CSS grid layout is used, so the size of all items will always be the same.</p>
      <p>You can use controls below in "Playground" section to add more items.</p>
    </veera-ng-storybook-note>

    <veera-ng-track [gap]="3" layout="flex" [flexColumnsEqual]="true" [flexIsMultiline]="true" verticalAlignment="bottom" [ngStyle]="{'--veera-textfield--single-line--max-width': '100%', '--veera-textfield--multiple-lines--max-width': '100%'}">
      <veera-ng-form-item label="First track with a huge unspeakablethingamabob, field 1" htmlId="track1-someid">
        <veera-ng-input htmlId="track1-someid"></veera-ng-input>
      </veera-ng-form-item>
      <veera-ng-form-item label="First track, field 2 with more characters" htmlId="track1-someid2">
        <veera-ng-input htmlId="track1-someid2"></veera-ng-input>
      </veera-ng-form-item>
      <veera-ng-form-item [label]="'First track, field ' + (i + 3)" [htmlId]="'track1-someid' + (i + 3)" *ngFor="let _ of [].constructor(repeatableItemsFlex); index as i">
        <veera-ng-input [htmlId]="'track1-someid' + (i + 3)"></veera-ng-input>
      </veera-ng-form-item>
      <veera-ng-form-item label="First track, last field" htmlId="track1-lastid">
        <veera-ng-textarea htmlId="track1-lastid"></veera-ng-textarea>
      </veera-ng-form-item>
    </veera-ng-track>

    <veera-ng-track layout="grid" [gap]="3" verticalAlignment="bottom">
      <veera-ng-form-item label="Second track with a small kindofsortofatinishword, field 1" htmlId="track2-someid1">
        <veera-ng-input htmlId="track2-someid1"></veera-ng-input>
      </veera-ng-form-item>
      <veera-ng-form-item label="Second track, field 2" htmlId="track2-someid2">
        <veera-ng-input htmlId="track2-someid2"></veera-ng-input>
      </veera-ng-form-item>
      <veera-ng-form-item label="Second track, field 3" htmlId="track2-someid3">
        <veera-ng-input htmlId="track2-someid3"></veera-ng-input>
      </veera-ng-form-item>
      <veera-ng-form-item label="Second track, field 4" htmlId="track2-someid4">
        <veera-ng-textarea htmlId="track2-someid4"></veera-ng-textarea>
      </veera-ng-form-item>
      <veera-ng-form-item [label]="'Second track, field ' + (i + 5)" [htmlId]="'track2-someid' + (i + 5)" *ngFor="let _ of [].constructor(repeatableItemsGrid); index as i">
        <veera-ng-input [htmlId]="'track2-someid' + (i + 5)"></veera-ng-input>
      </veera-ng-form-item>
    </veera-ng-track>
  `,
});

export const Default = Template.bind({});

export const WithCustomGap = Template.bind({});
WithCustomGap.args = {
  gap: 4,
};

export const ItemsCenteredHorizontally = Template.bind({});
ItemsCenteredHorizontally.args = {
  horizontalAlignment: 'center',
};

export const ItemsCenteredVertically = Template.bind({});
ItemsCenteredVertically.args = {
  verticalAlignment: 'center',
};

export const Vertical = Template.bind({});
Vertical.args = {
  flexDirection: 'vertical',
};

export const VerticalMobileOnly = Template.bind({});
VerticalMobileOnly.storyName = 'Vertical only on mobile (desktop)';
VerticalMobileOnly.args = {
  flexDirection: 'verticalOnMobile',
};

export const VerticalMobileOnlyMobile = Template.bind({});
VerticalMobileOnlyMobile.storyName = 'Vertical only on mobile (mobile)';
VerticalMobileOnlyMobile.args = {
  flexDirection: 'verticalOnMobile',
};
VerticalMobileOnlyMobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};

export const VerticalReverseMobileOnly = Template.bind({});
VerticalReverseMobileOnly.storyName =
  'Vertical reversed only on mobile (desktop)';
VerticalReverseMobileOnly.args = {
  flexDirection: 'verticalReverseOnMobile',
};

export const VerticalReverseMobileOnlyMobile = Template.bind({});
VerticalReverseMobileOnlyMobile.storyName =
  'Vertical reversed only on mobile (mobile)';
VerticalReverseMobileOnlyMobile.args = {
  flexDirection: 'verticalReverseOnMobile',
};
VerticalReverseMobileOnlyMobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};

export const Multiline = TemplateManyItems.bind({});
Multiline.args = {
  flexIsMultiline: true,
};

export const WithFlexLayout = TemplateWithFormItems.bind({});
WithFlexLayout.args = {
  flexIsMultiline: true,
};

export const WithGridLayout = TemplateManyItems.bind({});
WithGridLayout.args = {
  layout: 'grid',
};

export const WithEqualSizeFormItemsFlexRow = TemplateWithFormItems.bind({});
WithEqualSizeFormItemsFlexRow.storyName = 'With equally sized flex items';
WithEqualSizeFormItemsFlexRow.args = {
  flexColumnsEqual: true,
  flexIsMultiline: true,
};

export const WithEqualSizeFormItemsGridRow = TemplateWithFormItems.bind({});
WithEqualSizeFormItemsGridRow.storyName =
  'With equally sized grid items (row by row)';
WithEqualSizeFormItemsGridRow.args = {
  layout: 'grid',
};

export const WithEqualSizeFormItemsGridCol = TemplateWithFormItems.bind({});
WithEqualSizeFormItemsGridCol.storyName =
  'With equally sized grid items (column by column)';
WithEqualSizeFormItemsGridCol.args = {
  layout: 'grid',
  gridRows: 2,
};

export const WithFormItemsComplex = TemplateWithFormItemsComplex.bind({});
WithFormItemsComplex.storyName = 'With form items (complex layout)';
WithFormItemsComplex.argTypes = {
  repeatableItemsFlex: {
    name: 'Number of repeatable items (first track)',
    table: {
      category: 'Playground',
    },
  },
  repeatableItemsGrid: {
    name: 'Number of repeatable items (second track)',
    table: {
      category: 'Playground',
    },
  },
} as Partial<ArgTypes<ArgsWithRepeatableFormItems>>;
WithFormItemsComplex.args = {
  flexColumnsEqual: true,
  repeatableItemsFlex: 1,
  repeatableItemsGrid: 1,
} as ArgsWithRepeatableFormItems;

type ArgsWithRepeatableFormItems = TrackComponent & {
  repeatableItemsFlex: number;
  repeatableItemsGrid: number;
};
