describe('BreadcrumbsComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders primary breadcrumbs', () => {
    cy.loadStory('Angular Breadcrumbs', 'Default')
      .get('cvi-ng-breadcrumbs')
      .shouldHaveClasses('ul', 'cvi-breadcrumbs__items')
      .shouldHaveClasses('li', 'cvi-breadcrumbs__item')
      .shouldHaveClasses('a', 'cvi-breadcrumbs__item-link');
  });
});
