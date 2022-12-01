import { Story, Meta } from '@storybook/angular';
import notes from './track.component.md';
import { TrackComponent } from './track.component';

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
      options: ['left', 'center', 'right'],
      control: { type: 'inline-radio' },
    },
    direction: {
      name: 'Direction',
      options: ['horizontal', 'vertical', 'verticalOnMobile'],
      control: { type: 'inline-radio' },
    },
    isMultiline: {
      name: 'Is multiline',
      control: { type: 'boolean' },
    },
  },
  args: {
    gap: 1,
    horizontalAlignment: 'left',
    direction: 'horizontal',
    isMultiline: false,
  },
} as Meta<TrackComponent>;

const Template: Story<TrackComponent> = (args: TrackComponent) => ({
  props: args,
  /* template */
  template: `
    <veera-ng-track [gap]="gap" [horizontalAlignment]="horizontalAlignment" [direction]="direction" [isMultiline]="isMultiline">
      <veera-ng-button appearance="secondary">Cancel</veera-ng-button>
      <veera-ng-button>Submit</veera-ng-button>
    </veera-ng-track>
  `,
});

const TemplateMultiline: Story<TrackComponent> = (args: TrackComponent) => ({
  props: args,
  /* template */
  template: `
    <veera-ng-track [gap]="gap" [horizontalAlignment]="horizontalAlignment" [direction]="direction" [isMultiline]="isMultiline">
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

export const Default = Template.bind({});
Default.args = {};

export const WithCustomGap = Template.bind({});
WithCustomGap.args = {
  gap: 4,
};

export const ItemsCentered = Template.bind({});
ItemsCentered.args = {
  horizontalAlignment: 'center',
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'vertical',
};

export const VerticalMobileOnly = Template.bind({});
VerticalMobileOnly.storyName = 'Vertical only on mobile (desktop)';
VerticalMobileOnly.args = {
  direction: 'verticalOnMobile',
};

export const VerticalMobileOnlyMobile = Template.bind({});
VerticalMobileOnlyMobile.storyName = 'Vertical only on mobile (mobile)';
VerticalMobileOnlyMobile.args = {
  direction: 'verticalOnMobile',
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
  direction: 'verticalReverseOnMobile',
};

export const VerticalReverseMobileOnlyMobile = Template.bind({});
VerticalReverseMobileOnlyMobile.storyName =
  'Vertical reversed only on mobile (mobile)';
VerticalReverseMobileOnlyMobile.args = {
  direction: 'verticalReverseOnMobile',
};
VerticalReverseMobileOnlyMobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};

export const Multiline = TemplateMultiline.bind({});
Multiline.args = {
  isMultiline: true,
};
