describe('InputComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default input', () => {
    cy.loadStory('Angular Form Input', 'Default')
      .shouldHaveClasses('cvi-ng-input', 'cvi-textfield')
      .shouldHaveClasses('input', 'cvi-textfield__text-control');
  });

  it('Renders disabled input with custom htmlId', () => {
    cy.loadStory('Angular Form Input', 'Default')
      .get('cvi-ng-input')
      .changeArg('disabled', true)
      .changeArg('htmlId', 'Qwerty123');

    cy.shouldHaveClasses('cvi-ng-input', [
      'cvi-textfield',
      'cvi-textfield--is-disabled',
    ])
      .shouldHaveAttributes('cvi-ng-input', [
        { name: 'ng-reflect-html-id', value: 'Qwerty123' },
      ])
      .shouldHaveClasses('input', 'cvi-textfield__text-control')
      .and('be.disabled');
  });

  it('Displays inserted value correctly and handles enable/disable using FormGroup', () => {
    cy.loadStory('Angular Form Input', 'With FormGroup')
      .get('input')
      .should('have.value', 'initial value')
      .clear()
      .should('have.value', '')
      .type('some text')
      .should('have.value', 'some text');

    cy.get('div').contains('Inserted value: some text');

    cy.get('[data-cy=disable-button]').click();
    cy.get('input').should('be.disabled');

    cy.get('[data-cy=enable-button]').click();
    cy.get('input').should('be.enabled');

    cy.get('input').clear().type('new text').should('have.value', 'new text');

    cy.get('div').contains('Inserted value: new text');
  });

  it('Correctly displays and updates character counter', () => {
    cy.loadStory('Angular Form Input', 'With Character Counter')
      .get('input')
      .should('have.value', '')
      .type('some text');
    cy.get('cvi-ng-character-counter').contains('9 / 10');
  });
});
