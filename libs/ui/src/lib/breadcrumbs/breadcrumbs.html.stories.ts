import { Story, Meta } from '@storybook/angular';
import notes from './breadcrumbs.html.md';

export default {
  title: 'HTML/Breadcrumbs',
  parameters: {
    notes,
    options: { selectedPanel: 'html/panel' },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <ul class="cvi-breadcrumbs">
      <li class="cvi-breadcrumbs__item">
        <a class="cvi-breadcrumbs__item-link">Avaleht</a>
      </li>
      <li class="cvi-breadcrumbs__item">
        <a class="cvi-breadcrumbs__item-link">Abiellumine</a>
      </li>
      <li class="cvi-breadcrumbs__item">
        <a class="cvi-breadcrumbs__item-link">Avalduse esitamine</a>
      </li>
    </ul>
  `,
});

export const Default = Template.bind({});
Default.args = {};
