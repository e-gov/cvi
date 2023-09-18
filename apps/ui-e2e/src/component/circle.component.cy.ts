describe('CircleComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders small circle with dark theme and no severity', () => {
    cy.loadStory('Angular Circle', 'Default')
      .shouldHaveClasses('cvi-ng-circle', ['cvi-circle', 'cvi-circle__size-s'])
      .shouldHaveCSSVar('cvi-ng-circle', '--color', '#004277')
      .shouldHaveCSSVar('cvi-ng-circle', '--border-color', '#004277')
      .shouldHaveCSSVar('cvi-ng-circle', '--background-color', 'transparent');
  });

  it('Renders medium circle with light theme and success severity', () => {
    cy.loadStory('Angular Circle', 'With Light Theme')
      .get('cvi-ng-circle')
      .changeArg('severity', 'success')
      .changeArg('size', 'm');
    cy.shouldHaveClasses('cvi-ng-circle', ['cvi-circle', 'cvi-circle__size-m'])
      .shouldHaveCSSVar('cvi-ng-circle', '--color', '#ffffff')
      .shouldHaveCSSVar('cvi-ng-circle', '--border-color', '#ffffff')
      .shouldHaveCSSVar('cvi-ng-circle', '--background-color', '#308653');
  });

  it('Renders small circle with light theme, error severity and close icon', () => {
    cy.loadStory('Angular Circle', 'With Light Theme')
      .get('cvi-ng-circle')
      .changeArg('severity', 'error')
      .changeArg('iconName', 'close');
    cy.shouldHaveClasses('cvi-ng-circle', ['cvi-circle', 'cvi-circle__size-s'])
      .shouldHaveCSSVar('cvi-ng-circle', '--color', '#ffffff')
      .shouldHaveCSSVar('cvi-ng-circle', '--border-color', '#ffffff')
      .shouldHaveCSSVar('cvi-ng-circle', '--background-color', '#d73e3e')
      .within(() => {
        cy.shouldHaveAttributes('cvi-ng-icon', {
          name: 'name',
          value: 'close',
        }).shouldHaveClasses('svg', 'cvi-circle__content-icon');
      });
  });

  it('Renders medium circle with progress', () => {
    cy.loadStory('Angular Circle', 'With Progress')
      .shouldHaveClasses('cvi-ng-circle', ['cvi-circle', 'cvi-circle__size-s', 'cvi-circle__with-progress'])
      .shouldHaveCSSVar('cvi-ng-circle', '--progress-background-color', '#ffffff');
  });
});
