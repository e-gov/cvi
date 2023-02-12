describe('TextareaComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default textarea and inserts input', () => {
    cy.loadStory('Angular Form Textarea', 'Default')
      .get('textarea')
      .should('have.value', '')
      .type('some text')
      .should('have.value', 'some text');
  });

  it('Disables resize when set accordingly', () => {
    cy.loadStory('Angular Form Textarea', 'Default')
      .get('cvi-ng-textarea')
      .changeArg('resizable', false)
      .shouldHaveClasses('cvi-ng-textarea', ['cvi-textfield--no-resize']);
  });

  it('Displays inserted value correctly using FormGroup', () => {
    cy.loadStory('Angular Form Textarea', 'With FormGroup')
      .get('textarea')
      .should('have.value', 'initial value')
      .clear()
      .should('have.value', '')
      .type('some text')
      .should('have.value', 'some text');
    cy.get('div').contains('Inserted value: some text');
  });
});
