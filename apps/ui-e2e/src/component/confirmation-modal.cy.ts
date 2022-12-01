describe('ConfirmationModalComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default confirmation modal', () => {
    cy.loadStory('Angular Modal Confirmation modal', 'Default')
      .shouldNotExist('veera-ng-confirmation-modal')
      .get('[data-cy="test-button"]')
      .click();

    cy.shouldHaveClasses('div', 'veera-modal__dialog')
      .shouldHaveClasses('button', 'veera-modal__close')
      .shouldExist('veera-ng-confirmation-modal');

    cy.get('[data-cy="modal-cancel"]').click();

    cy.shouldNotExist('veera-ng-confirmation-modal');
  });
});
