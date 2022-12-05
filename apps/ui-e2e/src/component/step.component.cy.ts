describe('StepComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default step', () => {
    cy.loadStory('Angular Steps Step', 'Default')
      .shouldHaveClasses('[data-cy="steps_title"]', 'veera-steps__title')
      .shouldHaveClasses('[data-cy="steps_container"]', 'veera-steps__inner')
      .shouldHaveClasses('ol', 'veera-steps__list')
      .within(() => {
        cy.shouldHaveClasses('li', [
          'veera-steps__list-item',
          'is-past',
          'is-current',
        ])
          .shouldHaveClasses('button', 'veera-steps__list-item-button')
          .shouldHaveClasses('div', 'veera-steps__list-item-inner')
          .shouldHaveClasses('span', 'veera-steps__list-item-title')
          .get('veera-ng-icon')
          .shouldHaveClasses('svg', 'veera-steps__list-item-arrow-icon');
      })
      .shouldBeVisible('[data-cy="step_1"]')
      .shouldNotBeVisible('[data-cy="step_2"]');
  });
});
