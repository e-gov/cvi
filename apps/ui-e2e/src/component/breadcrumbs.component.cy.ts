describe('BreadcrumbsComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders primary breadcrumbs', () => {
    cy.loadStory('Angular Breadcrumbs', 'Default')
      .get('veera-ng-breadcrumbs')
      .shouldHaveClasses('ul', 'veera-breadcrumbs__items')
      .shouldHaveClasses('li', 'veera-breadcrumbs__item')
      .shouldHaveClasses('a', 'veera-breadcrumbs__item-link');
  });
});
