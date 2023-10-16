import notes from './labeled-item.component.md';
import { LabeledItemComponent } from './labeled-item.component';
import { Meta, Story } from '@storybook/angular';

export default {
  title: 'Angular/Labelled item',
  parameters: { notes },
  args: {
    headerLabel: 'Sündmus',
    event: 'Abielu sõlmimine',
    gap: 1,
    flexDirection: 'vertical',
  },
} as Meta<LabeledItemComponent>;

const Template: Story<LabeledItemComponent> = (args: LabeledItemComponent) => ({
  props: {
    ...args,
  },
  /* template */
  template: `
  <cvi-ng-labeled-item [label]="headerLabel" [gap]="gap" [flexDirection]="flexDirection">
    {{event}}
  </cvi-ng-labeled-item>
  `,
});

export const Default = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};

export const Tablet = Template.bind({});
Tablet.parameters = {
  viewport: {
    defaultViewport: 'ipad',
  },
};
