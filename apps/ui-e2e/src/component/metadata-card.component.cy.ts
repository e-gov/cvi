describe('MetadataCardComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders metadata card with default severity', () => {
    cy.loadStory('Angular Metadata Card', 'Default');
    cy.shouldHaveCSSVar(
      'cvi-ng-metadata-card',
      '--cvi-metadata-card-left-border-color',
      '#005aa3'
    );
  });

  it('Renders metadata card with success severity', () => {
    cy.loadStory('Angular Metadata Card', 'Default')
      .get('cvi-ng-metadata-card')
      .changeArg('severity', 'success');
    cy.shouldHaveCSSVar(
      'cvi-ng-metadata-card',
      '--cvi-metadata-card-left-border-color',
      '#2c7a4c'
    );
  });

  it('Renders metadata card with warning severity', () => {
    cy.loadStory('Angular Metadata Card', 'Default')
      .get('cvi-ng-metadata-card')
      .changeArg('severity', 'warning');
    cy.shouldHaveCSSVar(
      'cvi-ng-metadata-card',
      '--cvi-metadata-card-left-border-color',
      '#ffb511'
    );
  });

  it('Renders metadata card with error severity', () => {
    cy.loadStory('Angular Metadata Card', 'Default')
      .get('cvi-ng-metadata-card')
      .changeArg('severity', 'error');
    cy.shouldHaveCSSVar(
      'cvi-ng-metadata-card',
      '--cvi-metadata-card-left-border-color',
      '#d73e3e'
    );
  });
});
