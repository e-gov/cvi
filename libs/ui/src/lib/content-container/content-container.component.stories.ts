import { Story, Meta } from '@storybook/angular';
import notes from './content-container.component.md';
import { ContentContainerComponent } from './content-container.component';

export default {
  title: 'Angular/Content container',
  parameters: { notes, layout: 'padded' },
  argTypes: {
    content: {
      name: 'Content',
      table: {
        category: 'Playground',
      },
    },
  },
  args: {
    content:
      'Create recall build border flat fourth wild however swam motor shake fly hidden running dead bear walk floor plan chance yourself shade hunt came. Lay fence wave several short birth desk thrown clearly official blanket strike neck can card cabin quiet horn leather rocket forth current kill mile. Color paper sad bread substance fact consider soon after west brass impossible perhaps reason interior hit program start section unless peace whatever screen record. Scientific torn spirit period surrounded brief drew account show tube canal meet walk expression just syllable exactly cannot industrial dawn universe worth include movie. Fight game touch ants kept strange win impossible happen deeply company yesterday above different birth nation fall thee pleasant given main wrote appearance situation. Basis box factory bar quickly shut whistle breathe sweet limited while indicate gulf labor stream plan southern green produce break for place concerned discussion.',
  },
} as Meta<ContentContainerComponent>;

const Template: Story<ContentContainerComponent> = (
  args: ContentContainerComponent
) => ({
  props: args,
  template: `
    <cvi-ng-content-container>{{ content }}</cvi-ng-content-container>
  `,
});

export const Default = Template.bind({});
