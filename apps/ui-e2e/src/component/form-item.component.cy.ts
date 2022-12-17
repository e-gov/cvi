describe('FormItemComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default form item', () => {
    cy.loadStory('Angular Form Item', 'Default')
      .get('veera-ng-form-item')
      .should('have.attr', 'ng-reflect-html-id', 'fksd4kfds')
      .and('have.class', 'veera-form-item veera-form-item--label-position-top')
      .contains('Example label')
      .should('have.class', 'veera-form-item__label');

    cy.get('veera-ng-form-item')
      .get('veera-ng-input')
      .should('have.class', 'veera-textfield')
      .get('input')
      .should('have.class', 'veera-textfield__text-control')
      .and('have.id', 'fksd4kfds');
  });

  it('Renders form item with custom htmlId and hidden label', () => {
    cy.loadStory('Angular Form Item', 'Default')
      .changeArg('isLabelHidden', true)
      .changeArg('htmlId', 'Qwerty123')
      .get('veera-ng-form-item')
      .should('have.attr', 'ng-reflect-html-id', 'Qwerty123')
      .and('have.class', 'veera-form-item veera-form-item--label-position-top')
      .get('veera-ng-input')
      .should('have.class', 'veera-textfield')
      .get('input')
      .should('have.class', 'veera-textfield__text-control');
  });

  it('Renders required Form item', () => {
    cy.loadStory('Angular Form Item', 'Default')
      .changeArg('required', true)
      .get('veera-ng-form-item')
      .contains('Example label *');
  });

  it('Renders textarea form item', () => {
    cy.loadStory('Angular Form Item', 'With Textarea')
      .get('veera-ng-form-item')
      .should('have.attr', 'ng-reflect-html-id', 'fksd4kfds')
      .and('have.class', 'veera-form-item veera-form-item--label-position-top')
      .contains('Example label')
      .should('have.class', 'veera-form-item__label');

    cy.get('veera-ng-form-item')
      .shouldHaveClasses('veera-ng-textarea', [
        'veera-textfield',
        'veera-textfield--type-multiple-lines',
      ])
      .shouldHaveClasses('textarea', 'veera-textfield__text-control')
      .shouldHaveAttributes('textarea', [
        { name: 'id', value: 'fksd4kfds' },
        { name: 'placeholder', value: 'Placeholder text...' },
        { name: 'maxlength', value: 2000 },
        { name: 'ng-reflect-min-rows', value: 3 },
        { name: 'ng-reflect-max-rows', value: 5 },
      ]);
  });
});
