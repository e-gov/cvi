describe('CardComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('should render default card', () => {
    cy.loadStory('Angular Card', 'Default')
      .shouldExist('cvi-ng-track')
      .within(() => {
        cy.shouldHaveClasses('div', 'cvi-card__inner')
          .within(() => {
            cy.shouldExist('cvi-ng-track')
              .within(() => {
                cy.shouldExist('cvi-ng-track')
              })
          })
    })
  });
});
