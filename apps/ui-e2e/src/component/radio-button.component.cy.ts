describe('RadioButtonComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default radio button and checks it', () => {
    cy.loadStory('Angular Radio Button', 'Default')
      .get('veera-ng-radio-button')
      .shouldHaveClasses('input', 'c-radio')
      .should('not.be.checked')
      .check()
      .should('be.checked');
  });
});
