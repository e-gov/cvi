import { Meta } from '@storybook/angular';
import notes from './breadcrumbs.component.md';
import { BreadcrumbsComponent } from './breadcrumbs.component';

export default {
  title: 'Angular/Breadcrumbs',
  component: BreadcrumbsComponent,
  parameters: { notes },
  args: {
    breadcrumbs: [
      { title: 'Avaleht', href: '/avaleht' },
      { title: 'Ilma urlita samm' },
      { title: 'Abiellumine', href: '/abiellumine' },
      { title: 'Avalduse esitamine', href: '/abiellumine/avalduse-esitamine' },
    ],
    iconName: 'arrow_a_left',
  },
} as Meta<BreadcrumbsComponent>;

export const Default = {};

export const Mobile = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12mini',
    },
  },
};
