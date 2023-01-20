describe('InputComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default input', () => {
    cy.loadStory('Angular Form Input', 'Default')
      .shouldHaveClasses('veera-ng-input', 'veera-textfield')
      .shouldHaveClasses('input', 'veera-textfield__text-control');
  });

  it('Renders disabled input with custom htmlId', () => {
    cy.loadStory('Angular Form Input', 'Default')
      .get('veera-ng-input')
      .changeArg('disabled', true)
      .changeArg('htmlId', 'Qwerty123');

    cy.shouldHaveClasses('veera-ng-input', [
      'veera-textfield',
      'veera-textfield--is-disabled',
    ])
      .shouldHaveAttributes('veera-ng-input', [
        { name: 'ng-reflect-html-id', value: 'Qwerty123' },
      ])
      .shouldHaveClasses('input', 'veera-textfield__text-control')
      .and('be.disabled');
  });
});
