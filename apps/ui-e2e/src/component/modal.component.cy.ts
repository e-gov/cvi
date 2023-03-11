describe('ModalComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders and closes default modal', () => {
    cy.loadStory('Angular Modal Modal', 'Default')
      .shouldNotExist('cvi-ng-modal')
      .get('[data-cy="test-button"]')
      .click();

    cy.shouldHaveClasses('div', 'cvi-modal__dialog')
      .shouldHaveClasses('button', 'cvi-modal__close')
      .shouldExist('cvi-ng-modal');

    cy.get('[data-cy="close-modal-button"]').click();

    cy.shouldNotExist('cvi-ng-modal');
  });

  it('Closes modal on backdrop click', () => {
    cy.loadStory('Angular Modal Modal', 'Default')
      .shouldNotExist('cvi-ng-modal')
      .get('[data-cy="test-button"]')
      .click();

    cy.shouldExist('cvi-ng-modal');

    cy.get('[data-cy="test-content"]').click();
    cy.shouldExist('cvi-ng-modal');

    cy.get('[data-cy="modal-backdrop"]').click();
    cy.shouldNotExist('cvi-ng-modal');
  });
});
