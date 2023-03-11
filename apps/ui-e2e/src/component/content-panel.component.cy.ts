describe('ContentPanelComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default content panel', () => {
    cy.loadStory('Angular Content Panel', 'Default')
      .shouldHaveClasses('cvi-ng-content-panel', 'cvi-content-panel')
      .shouldHaveClasses('h2', 'cvi-content-panel__title');
  });
});
