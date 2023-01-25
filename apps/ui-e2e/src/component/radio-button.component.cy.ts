describe('RadioButtonComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default radio button and checks it', () => {
    cy.loadStory('Angular Form Radio Button', 'Default')
      .get('cvi-ng-radio-button')
      .shouldHaveClasses('input', 'cvi-radio-group__item-control')
      .should('not.be.checked')
      .check()
      .should('be.checked');
  });
});
