describe('TableResponsiveComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('should render table when on desktop', () => {
    cy.loadStory('Angular Responsive table', 'Default')
      .shouldExist('cvi-ng-table')
      .shouldHaveClasses('cvi-ng-table', 'cvi-table-responsive__table');
  });

  it('should render table when on tablet', () => {
    cy.loadStory('Angular Responsive Table', 'Tablet')
      .shouldExist('cvi-ng-table')
      .shouldHaveClasses('cvi-ng-table', 'cvi-table-responsive__table');
  });

  it('should render list of cards when mobile', () => {
    cy.loadStory('Angular Responsive Table', 'Mobile')
      .shouldExist('cvi-ng-track')
      .shouldHaveClasses('cvi-ng-track', 'cvi-table-responsive__cards');
  });
});
