describe('TabContainerComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default tab group and clicks the second tab', () => {
    cy.loadStory('Angular Tabs Tab Group', 'Default');
    cy.get('cvi-ng-tab-group')
      .shouldHaveClasses('div', 'cvi-tab-group__list')
      .shouldHaveClasses('[data-cy="tab-button-0"]', [
        'cvi-tab-group__tab-btn',
        'active',
      ])
      .shouldHaveClasses('[data-cy="tab-button-1"]', 'cvi-tab-group__tab-btn')
      .shouldNotHaveClasses('[data-cy="tab-button-1"]', 'active');
    cy.get('cvi-ng-tab-group').shouldHaveClasses(
      '[data-cy="tab-content"]',
      'cvi-tab-group__tab-content'
    );
  });
});
