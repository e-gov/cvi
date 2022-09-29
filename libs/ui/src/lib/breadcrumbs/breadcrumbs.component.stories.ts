import { Story, Meta } from '@storybook/angular';
import notes from './breadcrumbs.component.md';
import { BreadcrumbsComponent } from './breadcrumbs.component';

export default {
  title: 'Angular/Breadcrumbs',
  component: BreadcrumbsComponent,
  parameters: { notes },
  args: {
    breadcrumbLabels: ['Avaleht', 'Abiellumine', 'Avalduse esitamine'],
  },
} as Meta<BreadcrumbsComponent>;

const Template: Story<BreadcrumbsComponent> = (args: BreadcrumbsComponent) => ({
  props: args,
  /* template */
  template: `
    <veera-ng-breadcrumbs [breadcrumbLabels]="breadcrumbLabels"></veera-ng-breadcrumbs>
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
