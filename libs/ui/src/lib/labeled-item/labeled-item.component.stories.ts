import notes from './labeled-item.component.md';
import { LabeledItemComponent } from './labeled-item.component';
import { Meta, Story } from '@storybook/angular';

export default {
  title: 'Angular/Labeled item',
  parameters: { notes },
  content: {
    name: 'Content',
    table: {
      category: 'Playground',
    },
  },
  args: {
    label: 'Sündmus',
    content: 'Abielu sõlmimine',
  },
} as Meta<LabeledItemComponent>;

const Template: Story<LabeledItemComponent> = (args: LabeledItemComponent) => ({
  props: {
    ...args,
  },
  /* template */
  template: `
    <cvi-ng-labeled-item [label]="label">{{ content }}</cvi-ng-labeled-item>
  `,
});

export const Default = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  label: '',
};
