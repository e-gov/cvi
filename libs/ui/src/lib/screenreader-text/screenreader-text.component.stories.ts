import { Story, Meta } from '@storybook/angular';
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

const Template: Story<ScreenreaderTextComponent> = (
  args: ScreenreaderTextComponent
) => ({
  props: args,
  /* template */
  template: `
    <button>
      <veera-ng-icon name="add" [height]="30"></veera-ng-icon>
      <veera-ng-screenreader-text [label]="label"></veera-ng-screenreader-text>
    </button>
  `,
});

export const Default = Template.bind({});
