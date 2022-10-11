describe('TabContainerComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default tab container and clicks the second tab', () => {
    cy.loadStory('Angular Tab Container', 'Default')
      .get('veera-ng-tab-container')
      .shouldHaveClasses('ul', 'tab-container')
      .shouldHaveClasses('[data-cy="tab-button_1"]', [
        'tab-container__veera-tab-btn',
        'active',
      ])
      .shouldHaveClasses(
        '[data-cy="tab-button_2"]',
        'tab-container__veera-tab-btn'
      )
      .shouldNotHaveClasses('[data-cy="tab-button_2"]', 'active')
      .click()
      .shouldHaveClasses(
        '[data-cy="tab-content"]',
        'tab-container__veera-tab-content'
      );
  });
});
