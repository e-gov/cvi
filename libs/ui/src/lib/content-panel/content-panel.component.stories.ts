import { Meta, componentWrapperDecorator } from '@storybook/angular';
import notes from './content-panel.component.md';
import { ContentPanelComponent } from './content-panel.component';

const wrapperDecorators = [
  componentWrapperDecorator(ContentPanelComponent, ({ args }) => {
    return args;
  }),
];

export default {
  title: 'Angular/Content panel',
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
    title: 'Some title',
    content:
      'Create recall build border flat fourth wild however swam motor shake fly hidden running dead bear walk floor plan chance yourself shade hunt came. Lay fence wave several short birth desk thrown clearly official blanket strike neck can card cabin quiet horn leather rocket forth current kill mile. Color paper sad bread substance fact consider soon after west brass impossible perhaps reason interior hit program start section unless peace whatever screen record. Scientific torn spirit period surrounded brief drew account show tube canal meet walk expression just syllable exactly cannot industrial dawn universe worth include movie. Fight game touch ants kept strange win impossible happen deeply company yesterday above different birth nation fall thee pleasant given main wrote appearance situation. Basis box factory bar quickly shut whistle breathe sweet limited while indicate gulf labor stream plan southern green produce break for place concerned discussion.',
  },
} as Meta<ContentPanelComponent>;

export const Default = {
  render: (args: ContentPanelComponent) => ({
    props: args,
    template: `{{ content }}`,
  }),
  decorators: wrapperDecorators,
};

export const WithNoTitle = {
  ...Default,
  args: {
    title: '',
  },
};
