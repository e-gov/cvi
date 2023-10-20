describe('TableCardComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Should render default table card', () => {
    cy.loadStory('Angular Table Card', 'Default')
      .shouldExist('cvi-ng-track')
      .within(() => {
        cy.shouldExist('cvi-ng-track').within(() => {
          cy.shouldHaveClasses('div', 'cvi-labeled-item__label');
        });
      });
  });
});
