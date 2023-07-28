import { Meta } from '@storybook/angular';
import notes from './screenreader-text.component.md';
import { ScreenreaderTextComponent } from './screenreader-text.component';

export default {
  title: 'Angular/Screenreader text',
  component: ScreenreaderTextComponent,
  parameters: {
    notes,
    layout: 'padded',
  },
  args: {
    label: 'Some text that should only be visible to a screen reader',
  },
} as Meta<ScreenreaderTextComponent>;

export const Default = {
  render: (args: ScreenreaderTextComponent) => ({
    props: args,
    /* template */
    template: `
      <button>
        <cvi-ng-icon name="add" [height]="30"></cvi-ng-icon>
        <cvi-ng-screenreader-text [label]="label"></cvi-ng-screenreader-text>
      </button>
    `,
  }),
};
