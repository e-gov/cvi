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

  it('Renders icon with custom style', () => {
    cy.loadStory('Angular Icon', 'WithStyling').get('veera-ng-icon');

    cy.shouldHaveAttributes('veera-ng-icon', {
      name: 'ng-reflect-name',
      value: 'action',
    }).within(() => {
      cy.shouldHaveStyle('svg', [
        { name: 'fill', value: 'rgb(255, 0, 0)' },
        { name: 'height', value: '50px' },
      ]);
    });
  });
});
