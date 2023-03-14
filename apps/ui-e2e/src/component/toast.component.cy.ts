describe('ToastComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders toast', () => {
    cy.loadStory('Angular Toast', 'Default')
      .get('[data-cy="test-success-toast-button"]')
      .click();

    cy.shouldExist('cvi-ng-toast-container');
    cy.shouldHaveClasses('cvi-ng-toast-container', 'cvi-toast-container');

    cy.shouldExist('cvi-ng-toast');
    cy.shouldHaveClasses('cvi-ng-toast', [
      'cvi-toast',
      'cvi-toast--appearance-success',
    ]);

    cy.get('cvi-ng-toast').should('be.visible');
  });

  it('Pauses toast on hover', () => {
    cy.get('cvi-ng-toast').trigger('mouseenter');
    cy.get('[data-cy="test-progressbar"]')
      .should('have.css', 'width')
      .and('match', /^0/);
  });

  it('Closes toast on click', () => {
    cy.get('cvi-ng-toast').click();
    cy.shouldNotExist('cvi-ng-toast');
  });
});
