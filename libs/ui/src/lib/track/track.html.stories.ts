import { Meta, Story } from '@storybook/angular';
import notes from './track.html.md';

export default {
  title: 'HTML/Track',
  parameters: {
    notes,
    options: { selectedPanel: 'html/panel' },
    layout: 'padded',
  },
  argTypes: {
    gap: {
      name: 'Gap',
      control: { type: 'range', min: 0, max: 20, step: 1 },
    },
    horizontalAlignment: {
      name: 'Horizontal alignment',
      options: ['flex-start', 'center', 'flex-end'],
      control: { type: 'inline-radio' },
    },
    direction: {
      name: 'Direction',
      options: [
        'horizontal',
        'vertical',
        'vertical-on-mobile',
        'vertical-reversed-on-mobile',
      ],
      control: { type: 'inline-radio' },
    },
    // Boolean in JS
    isMultiline: {
      name: 'Is multiline',
      options: ['nowrap', 'wrap'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    gap: 1,
    horizontalAlignment: 'flex-start',
    direction: 'horizontal',
    isMultiline: 'nowrap',
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div class="veera-track veera-track--direction-{{direction}}" style="--gap: {{ gap }}; --horizontal-alignment: {{ horizontalAlignment }}; --wrap: {{ isMultiline }}">
      <div class="veera-button veera-button--appearance-primary">
        <button type="button" class="veera-button__button">Button 1</button>
      </div>
      <div class="veera-button veera-button--appearance-primary">
        <button type="button" class="veera-button__button">Button 2</button>
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
