describe('IconComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default icon "call"', () => {
    cy.loadStory('Angular Icon', 'Default').get('veera-ng-icon');
  });

  it('Renders a custom icon "happyFace"', () => {
    cy.loadStory('Angular Icon', 'Default')
      .get('veera-ng-icon')
      .changeArg('name', 'happy_face');

    cy.shouldHaveAttributes('veera-ng-icon', {
      name: 'ng-reflect-name',
      value: 'happy_face',
    });
  });
});
