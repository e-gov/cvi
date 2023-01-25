describe('TableComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default table', () => {
    cy.loadStory('Angular Table', 'Default')
      .shouldHaveClasses('div', 'cvi-table__inner')
      .within(() => {
        cy.shouldHaveClasses('table', 'cvi-table__table').within(() => {
          cy.shouldHaveClasses('tr', 'cvi-table__header-row').within(() => {
            cy.shouldHaveClasses('th', 'cvi-table__header-cell');
          });
          cy.shouldHaveClasses('tr', 'cvi-table__body-row').within(() => {
            cy.shouldHaveClasses('td', 'cvi-table__body-cell');
          });
        });
      });
  });
});
