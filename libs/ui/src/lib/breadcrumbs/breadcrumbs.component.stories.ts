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
    <cvi-ng-breadcrumbs [breadcrumbLabels]="breadcrumbLabels"></cvi-ng-breadcrumbs>
  `,
});

export const Default = Template.bind({});
Default.args = {};

const TemplateWithIcon: Story<BreadcrumbsComponent> = (
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

export const Mobile = TemplateWithIcon.bind({});
Mobile.args = {
  iconName: 'arrow_a_left',
};
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};
