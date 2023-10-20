describe('LabeledItemComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('should render labeled item', () => {
    cy.loadStory('Angular Labeled item', 'Default')
      .shouldExist('cvi-ng-track')
      .within(() => {
        cy.shouldHaveClasses('div', 'cvi-labeled-item__label');
      });
  });
});
