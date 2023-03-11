describe('SelectComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Opens popup when select is clicked', () => {
    cy.loadStory('Angular Form Select', 'Default')
      .shouldNotExist('[data-cy="test-popup"]')
      .get('cvi-ng-select')
      .click();
    cy.shouldExist('[dataAttribute="test-popup"]');
  });

  it('Filters items by typed input value', () => {
    cy.loadStory('Angular Form Select', 'Default').get('cvi-ng-select').click();

    cy.shouldExist('[dataAttribute="test-popup"]');

    cy.get('[data-cy="test-input"]').should('have.value', '').type('valik 3');

    cy.shouldBeOnlyChild('[data-cy="test-option"]');
    cy.get('[data-cy="test-option"]').contains('valik 3').click();
  });

  it('Correctly sets disabled state', () => {
    cy.loadStory('Angular Form Select', 'Default')
      .get('cvi-ng-select')
      .changeArg('disabled', true);

    cy.shouldHaveClasses('[data-cy="test-select"]', ['disabled']);
    cy.get('[data-cy="test-input"]').should('be.disabled');
  });
});
