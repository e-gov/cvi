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
    <ul class="veera-breadcrumbs">
      <li class="veera-breadcrumbs__item">
        <a class="veera-breadcrumbs__item-link">Avaleht</a>
      </li>
      <li class="veera-breadcrumbs__item">
        <a class="veera-breadcrumbs__item-link">Abiellumine</a>
      </li>
      <li class="veera-breadcrumbs__item">
        <a class="veera-breadcrumbs__item-link">Avalduse esitamine</a>
      </li>
    </ul>
  `,
});

export const Default = Template.bind({});
Default.args = {};
