describe('TableComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default table', () => {
    cy.loadStory('Angular Table', 'Default')
      .shouldHaveClasses('div', 'veera-table__inner')
      .within(() => {
        cy.shouldHaveClasses('table', 'veera-table__table').within(() => {
          cy.shouldHaveClasses('tr', 'veera-table__header-row').within(() => {
            cy.shouldHaveClasses('th', 'veera-table__header-cell');
          });
          cy.shouldHaveClasses('tr', 'veera-table__body-row').within(() => {
            cy.shouldHaveClasses('td', 'veera-table__body-cell');
          });
        });
      });
  });
});
