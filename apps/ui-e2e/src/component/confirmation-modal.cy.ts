describe('ConfirmationModalComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default confirmation modal', () => {
    cy.loadStory('Angular Modal Confirmation modal', 'Default')
      .shouldNotExist('cvi-ng-confirmation-modal')
      .get('[data-cy="test-button"]')
      .click();

    cy.shouldHaveClasses('div', 'cvi-modal__dialog')
      .shouldHaveClasses('button', 'cvi-modal__close')
      .shouldExist('cvi-ng-confirmation-modal');

    cy.get('[data-cy="modal-cancel"]').click();

    cy.shouldNotExist('cvi-ng-confirmation-modal');
  });
});
