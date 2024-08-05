describe('TextareaComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default textarea and inserts input', () => {
    cy.loadStory('Angular Form Textarea', 'Default');
    cy.get('textarea').should('have.value', '').type('some text');
    cy.get('textarea').should('have.value', 'some text');
  });

  it('Disables resize when set accordingly', () => {
    cy.loadStory('Angular Form Textarea', 'Default')
      .get('cvi-ng-textarea')
      .changeArg('resizable', false)
      .shouldHaveClasses('cvi-ng-textarea', ['cvi-textfield--no-resize']);
  });

  it('Displays inserted value correctly using FormGroup', () => {
    cy.loadStory('Angular Form Textarea', 'With FormGroup');
    cy.get('textarea').should('have.value', 'initial value').clear();
    cy.get('textarea').should('have.value', '').type('some text');
    cy.get('textarea').should('have.value', 'some text');
    cy.get('div').contains('Inserted value: some text');
  });

  it('Correctly displays and updates character counter', () => {
    cy.loadStory('Angular Form Textarea', 'With Character Counter')
      .get('textarea')
      .should('have.value', '')
      .type('some text');
    cy.get('cvi-ng-character-counter').contains('9 / 30');
  });
});
