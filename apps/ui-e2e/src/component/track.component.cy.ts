describe('TrackComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders track with correct gap', () => {
    cy.loadStory('Angular Track', 'Default')
      .get('cvi-ng-track')
      .changeArg('gap', 2);

    cy.shouldHaveCSSVar('cvi-ng-track', '--gap', '2');
  });

  it('Renders track with correct horizontal alignment', () => {
    cy.loadStory('Angular Track', 'Default')
      .get('cvi-ng-track')
      .changeArg('horizontalAlignment', 'center');

    cy.shouldHaveCSSVar('cvi-ng-track', '--horizontal-alignment', 'center');
  });

  it('Renders track with correct vertical alignment', () => {
    cy.loadStory('Angular Track', 'Default')
      .get('cvi-ng-track')
      .changeArg('verticalAlignment', 'bottom');

    cy.shouldHaveCSSVar('cvi-ng-track', '--vertical-alignment', 'flex-end');
  });

  it('Renders track with correct multiline setting', () => {
    cy.loadStory('Angular Track', 'Default')
      .get('cvi-ng-track')
      .changeArg('flexIsMultiline', true);

    cy.shouldHaveCSSVar('cvi-ng-track', '--wrap', 'wrap');
  });

  it('Renders track with correct layout', () => {
    cy.loadStory('Angular Track', 'Default')
      .get('cvi-ng-track')
      .changeArg('layout', 'grid');

    cy.shouldHaveClasses('cvi-ng-track', 'cvi-track--layout-grid');
  });
});
