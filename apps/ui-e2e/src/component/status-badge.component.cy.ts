describe('StatusBadgeComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders status badge with default severity', () => {
    cy.loadStory('Angular Status Badge', 'Default');
    cy.shouldHaveCSSVar('cvi-ng-status-badge', '--color', '#005aa3');
  });

  it('Renders status badge with success severity', () => {
    cy.loadStory('Angular Status Badge', 'Default')
      .get('cvi-ng-status-badge')
      .changeArg('severity', 'success');
    cy.shouldHaveCSSVar('cvi-ng-status-badge', '--color', '#2c7a4c');
  });

  it('Renders status badge with warning severity', () => {
    cy.loadStory('Angular Status Badge', 'Default')
      .get('cvi-ng-status-badge')
      .changeArg('severity', 'warning');
    cy.shouldHaveCSSVar('cvi-ng-status-badge', '--color', '#8c630a');
  });
});
