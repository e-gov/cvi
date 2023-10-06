describe('TableResponsiveComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('should render table when desktop', () => {
    cy.loadStory('Angular Responsive Table', 'Default')
      .shouldExist('cvi-ng-table')
      .shouldHaveClasses('cvi-ng-table', 'cvi-table-responsive__cvi-table')
  });

  it('should render list of cards when mobile', () => {
    cy.loadStory('Angular Responsive Table', 'Mobile')
      .shouldExist('cvi-ng-card')
      .shouldHaveClasses('cvi-ng-card', 'cvi-table-responsive__cvi-card')
  });
});
