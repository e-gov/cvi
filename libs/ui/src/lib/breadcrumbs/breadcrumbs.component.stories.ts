import { Meta } from '@storybook/angular';
import notes from './breadcrumbs.component.md';
import { BreadcrumbsComponent } from './breadcrumbs.component';

export default {
  title: 'Angular/Breadcrumbs',
  component: BreadcrumbsComponent,
  parameters: { notes },
  args: {
    breadcrumbLabels: ['Avaleht', 'Abiellumine', 'Avalduse esitamine'],
    iconName: 'arrow_a_left',
  },
} as Meta<BreadcrumbsComponent>;

export const Default = {
  render: (args: BreadcrumbsComponent) => ({
    props: args,
  }),
};

export const Mobile = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12mini',
    },
  },
};
