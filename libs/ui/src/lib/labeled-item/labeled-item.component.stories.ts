import notes from './labeled-item.component.md';
import { LabeledItemComponent } from './labeled-item.component';
import { Meta, StoryObj } from '@storybook/angular';

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
type Story = StoryObj<LabeledItemComponent>;

export const Default: Story = {
  render: (args: LabeledItemComponent) => ({
    props: args,
    template: `<cvi-ng-labeled-item [label]="label">{{ content }}</cvi-ng-labeled-item>`,
  }),
};

export const Mobile: Story = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12mini',
    },
  },
};

export const WithoutLabel: Story = {
  ...Default,
  args: {
    label: '',
  },
};
