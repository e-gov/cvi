describe('TableCardComponent', () => {
  beforeEach(() => {
    cy.visitStorybook();
  });

  it('Should render default table card', () => {
    cy.loadStory('Angular Table Card', 'Default').then(() => {
      cy.get('cvi-ng-table-card')
        .should('exist')
        .find('cvi-ng-track')
        .should('exist')
        .each(($track) => {
          cy.wrap($track).within(() => {
            cy.get('div').should('have.class', 'cvi-labeled-item__label');
          });
        });
    });
  });
});
