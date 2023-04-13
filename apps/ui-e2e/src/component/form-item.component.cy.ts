describe('FormItemComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default form item', () => {
    cy.loadStory('Angular Form Form Item', 'Default')
      .get('cvi-ng-form-item')
      .should('have.attr', 'ng-reflect-html-id', 'fksd4kfds')
      .and('have.class', 'cvi-form-item cvi-form-item--label-position-top')
      .contains('Example label')
      .should('have.class', 'cvi-form-item__label');

    cy.get('cvi-ng-form-item')
      .get('cvi-ng-input')
      .should('have.class', 'cvi-textfield')
      .get('input')
      .should('have.class', 'cvi-textfield__text-control')
      .and('have.id', 'fksd4kfds');
  });

  it('Renders form item with custom htmlId and hidden label', () => {
    cy.loadStory('Angular Form Form Item', 'Default')
      .changeArg('isLabelHidden', true)
      .changeArg('htmlId', 'Qwerty123')
      .get('cvi-ng-form-item')
      .should('have.attr', 'ng-reflect-html-id', 'Qwerty123')
      .and('have.class', 'cvi-form-item cvi-form-item--label-position-top')
      .get('cvi-ng-input')
      .should('have.class', 'cvi-textfield')
      .get('input')
      .should('have.class', 'cvi-textfield__text-control');
  });

  it('Renders required form item', () => {
    cy.loadStory('Angular Form Form Item', 'Default')
      .changeArg('required', true)
      .get('cvi-ng-form-item')
      .contains('Example label *');
  });

  it('Renders textarea form item', () => {
    cy.loadStory('Angular Form Form Item', 'With Textarea')
      .get('cvi-ng-form-item')
      .should('have.attr', 'ng-reflect-html-id', 'fksd4kfds')
      .and('have.class', 'cvi-form-item cvi-form-item--label-position-top')
      .contains('Example label')
      .should('have.class', 'cvi-form-item__label');

    cy.get('cvi-ng-form-item')
      .shouldHaveClasses('cvi-ng-textarea', [
        'cvi-textfield',
        'cvi-textfield--type-multiple-lines',
      ])
      .shouldHaveClasses('textarea', 'cvi-textfield__text-control')
      .shouldHaveAttributes('textarea', [
        { name: 'id', value: 'fksd4kfds' },
        { name: 'placeholder', value: 'Placeholder text...' },
        { name: 'maxlength', value: 2000 },
        { name: 'ng-reflect-min-rows', value: 3 },
        { name: 'ng-reflect-max-rows', value: 5 },
      ]);
  });
});
