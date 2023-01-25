describe('TextareaComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default textarea and inserts input', () => {
    cy.loadStory('Angular Form Textarea', 'Default')
      .shouldHaveAttributes('cvi-ng-textarea', [
        { name: 'ng-reflect-max-length', value: 2000 },
        { name: 'ng-reflect-min-rows', value: 3 },
        { name: 'ng-reflect-max-rows', value: 5 },
        { name: 'ng-reflect-placeholder', value: '' },
      ])
      .type('Lorem ipsum dolor sit amet');
  });

  it('Disables resize when set accordingly', () => {
    cy.loadStory('Angular Form Textarea', 'Default')
      .get('cvi-ng-textarea')
      .changeArg('resizable', false)
      .shouldHaveClasses('cvi-ng-textarea', ['cvi-textfield--no-resize']);
  });
});
