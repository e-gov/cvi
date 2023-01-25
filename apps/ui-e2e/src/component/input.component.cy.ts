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
});
