import { Story, Meta } from '@storybook/angular';
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
      { title: 'Abielu sõlmimine', href: '/abiellumine/abielu-solmimine' },
      {
        title: 'Avalduse esitamine',
        href: '/abiellumine/abielu-solmimine/avalduse-esitamine',
      },
    ],
  },
} as Meta<BreadcrumbsComponent>;

const Template: Story<BreadcrumbsComponent> = (args: BreadcrumbsComponent) => ({
  props: args,
  /* template */
  template: `
    <cvi-ng-breadcrumbs [breadcrumbs]="breadcrumbs"></cvi-ng-breadcrumbs>
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
        [breadcrumbs]="breadcrumbs"
        [skipLastBreadcrumbMobile]="skipLastBreadcrumbMobile"
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

export const MobileSkipLastBreadcrumb = TemplateWithIcon.bind({});
MobileSkipLastBreadcrumb.args = {
  iconName: 'arrow_a_left',
  skipLastBreadcrumbMobile: true,
};
MobileSkipLastBreadcrumb.parameters = {
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};
