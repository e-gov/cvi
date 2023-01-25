describe('TabContainerComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default tab group and clicks the second tab', () => {
    cy.loadStory('Angular Tab Group', 'Default')
      .get('cvi-ng-tab-group')
      .shouldHaveClasses('ul', 'cvi-tab-group')
      .shouldHaveClasses('[data-cy="tab-button-0"]', [
        'cvi-tab-group__tab-btn',
        'active',
      ])
      .shouldHaveClasses('[data-cy="tab-button-1"]', 'cvi-tab-group__tab-btn')
      .shouldNotHaveClasses('[data-cy="tab-button-1"]', 'active')
      .click()
      .shouldHaveClasses(
        '[data-cy="tab-content"]',
        'cvi-tab-group__tab-content'
      );
  });
});
