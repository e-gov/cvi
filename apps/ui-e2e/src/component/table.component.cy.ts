describe('TableComponent', () => {
  beforeEach(() => {
    cy.visitStorybook();
  });

  it('Renders default table', () => {
    cy.loadStory('Angular Table', 'Default')
      .find('.cvi-table__inner')
      .should('exist')
      .each(($tableInner, index, $tableInnerArray) => {
        cy.wrap($tableInner).within(() => {
          cy.get('.cvi-table__table')
            .should('exist')
            .within(() => {
              cy.get('.cvi-table__header-row')
                .should('exist')
                .within(() => {
                  cy.get('.cvi-table__header-cell').should('exist');
                });
              cy.wrap($tableInnerArray[index])
                .find('.cvi-table__body-row')
                .should('exist')
                .each(($bodyRow) => {
                  cy.wrap($bodyRow).within(() => {
                    cy.get('.cvi-table__body-cell').should('exist');
                  });
                });
            });
        });
      });
  });
});
