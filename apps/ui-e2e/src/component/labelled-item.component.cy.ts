describe('LabelledItemComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('should render labelled item', () => {
    cy.loadStory('Angular Labelled item', 'Default')
      .shouldExist('cvi-ng-track')
      .within(() => {
        cy.shouldHaveClasses('div', 'cvi-labelled-item__header-label')
      })
  });
});