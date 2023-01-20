describe('RadioButtonComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default radio button and checks it', () => {
    cy.loadStory('Angular Form Radio Button', 'Default')
      .get('veera-ng-radio-button')
      .shouldHaveClasses('input', 'veera-radio-group__item-control')
      .should('not.be.checked')
      .check()
      .should('be.checked');
  });
});
