describe('ContentContainerComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default content container', () => {
    cy.loadStory('Angular Content container', 'Default').shouldHaveClasses(
      'veera-ng-content-container',
      'veera-content-container'
    );
  });
});
