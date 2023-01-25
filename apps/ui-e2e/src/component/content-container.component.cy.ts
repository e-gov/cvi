describe('ContentContainerComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default content container', () => {
    cy.loadStory('Angular Content container', 'Default').shouldHaveClasses(
      'cvi-ng-content-container',
      'cvi-content-container'
    );
  });
});
