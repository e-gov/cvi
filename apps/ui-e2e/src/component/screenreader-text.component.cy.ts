describe('ScreenreaderTextComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders screenreader text', () => {
    cy.loadStory('Angular Screenreader text', 'Default').shouldNotBeVisibleA11y(
      'cvi-ng-screenreader-text'
    );
  });
});
