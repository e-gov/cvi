import { Meta, Story } from '@storybook/angular';
import notes from './track.html.md';

const categoryFlex = {
  table: {
    category: 'Props (flex only)',
  },
};

const categoryGrid = {
  table: {
    category: 'Props (grid only)',
  },
};

export default {
  title: 'HTML/Track',
  parameters: {
    notes,
    options: { selectedPanel: 'storybook/html/panel' },
    layout: 'padded',
  },
  argTypes: {
    gap: {
      name: 'Gap',
      control: { type: 'range', min: 0, max: 20, step: 1 },
    },
    horizontalAlignment: {
      name: 'Horizontal alignment',
      options: ['normal', 'flex-start', 'center', 'flex-end', 'space-between'],
      control: { type: 'inline-radio' },
      if: { arg: 'flexDirection', eq: 'horizontal' },
    },
    verticalAlignment: {
      name: 'Vertical alignment',
      options: ['normal', 'flex-start', 'center', 'flex-end'],
      control: { type: 'inline-radio' },
      if: { arg: 'flexDirection', eq: 'horizontal' },
    },
    flexDirection: {
      name: 'Direction',
      options: [
        'horizontal',
        'vertical',
        'vertical-on-mobile',
        'vertical-reversed-on-mobile',
      ],
      control: { type: 'inline-radio' },
      ...categoryFlex,
    },
    layout: {
      name: 'Layout method',
      options: ['flex', 'grid'],
      control: { type: 'inline-radio' },
    },
    // Boolean in JS
    flexIsMultiline: {
      name: 'Is multiline',
      options: ['nowrap', 'wrap'],
      control: { type: 'inline-radio' },
      ...categoryFlex,
    },
    flexColumnsEqual: {
      name: 'Items have equal width',
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
    layout: 'flex',
    horizontalAlignment: 'normal',
    verticalAlignment: 'normal',
    flexDirection: 'horizontal',
    flexIsMultiline: 'nowrap',
    flexColumnsEqual: false,
    gridRows: undefined,
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div class="cvi-track cvi-track--layout-{{ layout }} cvi-track--direction-{{ flexDirection }}" [ngClass]="{'cvi-track--items-have-equal-width': flexColumnsEqual, 'cvi-track--has-rows': !!gridRows}" style="--gap: {{ gap }}; --horizontal-alignment: {{ horizontalAlignment }}; --vertical-alignment: {{ verticalAlignment }}; --wrap: {{ flexIsMultiline }}; --rows: {{ gridRows }}">
      <div class="cvi-button cvi-button--appearance-primary">
        <button type="button" class="cvi-button__button">Button 1</button>
      </div>
      <div class="cvi-button cvi-button--appearance-primary">
        <button type="button" class="cvi-button__button">Button 2</button>
      </div>
      <div class="cvi-button cvi-button--appearance-primary">
        <button type="button" class="cvi-button__button">Button 3 with a longer text that does not fit anywhere</button>
      </div>
      <div class="cvi-button cvi-button--appearance-primary">
        <button type="button" class="cvi-button__button">Button 4</button>
      </div>
    </div>
  `,
});

export const Default = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};
