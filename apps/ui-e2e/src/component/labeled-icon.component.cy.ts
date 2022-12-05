describe('LabeledIconComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default labeled icon', () => {
    cy.loadStory('Angular Labeled Icon', 'Default').runLabeledIconCommonTest(
      'start',
      'before'
    );
  });

  it('Renders labeled icon inside button', () => {
    cy.loadStory('Angular Labeled Icon', 'Labeled Icon Inside Button')
      .shouldHaveClasses('veera-ng-button', [
        'veera-button',
        'veera-button--appearance-secondary',
        'veera-button--size-m',
      ])
      .within(() => {
        cy.runLabeledIconCommonTest('center', 'after');
      });
  });

  it('Renders labeled icon with icon after', () => {
    cy.loadStory(
      'Angular Labeled Icon',
      'Labeled Icon Inside Button'
    ).runLabeledIconCommonTest('center', 'after');
  });
});
