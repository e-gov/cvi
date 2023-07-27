import { Story, Meta } from '@storybook/angular';
import notes from './breadcrumbs.html.md';

export default {
  title: 'HTML/Breadcrumbs',
  parameters: {
    notes,
    options: { selectedPanel: 'storybook/html/panel' },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div class="cvi-breadcrumbs">
      <div class="cvi-track cvi-track--direction-horizontal cvi-track--layout-flex"
      style="--gap:2;">
        <span class="cvi-breadcrumbs__icon-wrapper">
          <svg viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg" class="cvi-breadcrumbs__icon" height="24px">
            <path d="M.515 5.366 5.616.264a.897.897 0 0 1 1.272 0l.848.848a.897.897 0 0 1 0 1.272L4.119 6l3.617 3.616a.897.897 0 0 1 0 1.272l-.848.848a.896.896 0 0 1-1.272 0L.515 6.633a.892.892 0 0 1 0-1.268Z"></path>
          </svg>
        </span>
        <ul class="cvi-breadcrumbs__items">
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
      </div>
    </div>
  `,
});

export const Default = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};
