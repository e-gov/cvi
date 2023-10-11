import notes from './labelled-item.component.md';
import { LabelledItemComponent } from './labelled-item.component';
import { Meta, Story } from '@storybook/angular';

export default {
  title: 'Angular/Labelled item',
  parameters: { notes },
  args: {
    headerLabel: 'Sündmus',
    event: 'Abielu sõlmimine',
    gap: 1,
    flexDirection: 'vertical'
  },
} as Meta<LabelledItemComponent>;

const Template: Story<LabelledItemComponent> = (
  args: LabelledItemComponent
) => ({
  props: {
    ...args,
  },
  /* template */
  template: `
  <cvi-ng-labelled-item [label]="headerLabel" [gap]="gap" [flexDirection]="flexDirection">
    {{event}}
  </cvi-ng-labelled-item>
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