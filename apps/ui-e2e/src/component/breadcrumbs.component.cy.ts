describe('BreadcrumbsComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders primary breadcrumbs', () => {
    cy.loadStory('Angular Breadcrumbs', 'Default')
      .get('cvi-ng-breadcrumbs')
      .shouldExist('cvi-ng-track')
      .shouldNotExist('cvi-ng-icon')
      .shouldHaveClasses('ul', 'cvi-breadcrumbs__items')
      .shouldHaveClasses('li', 'cvi-breadcrumbs__item')
      .shouldHaveClasses('a', 'cvi-breadcrumbs__item-link');
  });

  it('Renders mobile breadcrumbs', () => {
    cy.loadStory('Angular Breadcrumbs', 'Mobile').setDevice('mobile');
    cy.get('cvi-ng-breadcrumbs')
      .shouldExist('cvi-ng-track')
      .shouldHaveClasses('cvi-ng-icon', 'cvi-breadcrumbs__icon-wrapper')
      .shouldHaveClasses('ul', 'cvi-breadcrumbs__items')
      .shouldHaveClasses('li', 'cvi-breadcrumbs__item')
      .shouldHaveClasses('a', 'cvi-breadcrumbs__item-link');
  });
});
