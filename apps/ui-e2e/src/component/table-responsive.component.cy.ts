describe('TableResponsiveComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('should render table when desktop', () => {
    cy.loadStory('Angular Responsive table', 'Default')
      .shouldExist('cvi-ng-table')
      .shouldHaveClasses('cvi-ng-table', 'cvi-table-responsive__cvi-table');
  });

  it('should render table when tablet', () => {
    cy.loadStory('Angular Responsive Table', 'Tablet')
      .shouldExist('cvi-ng-table')
      .shouldHaveClasses('cvi-ng-table', 'cvi-table-responsive__cvi-table');
  });

  it('should render list of cards when mobile', () => {
    cy.loadStory('Angular Responsive Table', 'Mobile')
      .shouldExist('cvi-ng-table-card')
      .shouldHaveClasses(
        'cvi-ng-table-card',
        'cvi-table-responsive__cvi-table-card'
      );
  });
});
