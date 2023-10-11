describe('TableCardComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('should render default table card', () => {
    cy.loadStory('Angular Table Card', 'Default')
      .shouldExist('cvi-ng-track')
      .within(() => {
        cy.shouldHaveClasses('div', 'cvi-table-card__inner').within(() => {
          cy.shouldExist('cvi-ng-track').within(() => {
            cy.shouldExist('cvi-ng-track');
          });
        });
      });
  });
});
