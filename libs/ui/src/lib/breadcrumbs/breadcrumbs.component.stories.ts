import { StoryFn, Meta } from '@storybook/angular';
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

const Template: StoryFn<BreadcrumbsComponent> = (
  args: BreadcrumbsComponent
) => ({
  props: args,
  /* template */
  template: `
    <cvi-ng-breadcrumbs [breadcrumbLabels]="breadcrumbLabels"></cvi-ng-breadcrumbs>
  `,
});

export const Default = {
  render: Template,
  args: {},
};

const TemplateWithIcon: StoryFn<BreadcrumbsComponent> = (
  args: BreadcrumbsComponent
) => ({
  props: args,
  /* template */
  template: `
    <cvi-ng-breadcrumbs
        [breadcrumbLabels]="breadcrumbLabels"
        [iconName]="iconName">
    </cvi-ng-breadcrumbs>
  `,
});

export const Mobile = {
  render: TemplateWithIcon,

  args: {
    iconName: 'arrow_a_left',
  },

  parameters: {
    viewport: {
      defaultViewport: 'iphone12mini',
    },
  },
};
