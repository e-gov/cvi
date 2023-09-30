describe('StepComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default step', () => {
    cy.loadStory('Angular Steps Step', 'Default')
      .shouldHaveClasses('[data-cy="steps_title"]', 'cvi-steps__title')
      .shouldHaveClasses('[data-cy="steps_container"]', 'cvi-steps__inner')
      .shouldHaveClasses('ol', 'cvi-steps__list')
      .within(() => {
        cy.shouldHaveClasses('li', [
          'cvi-steps__list-item',
          'is-past',
          'is-current',
        ])
          .shouldHaveClasses('button', 'cvi-steps__list-item-button')
          .shouldExist('cvi-ng-circle')
          .shouldHaveClasses('span', 'cvi-steps__list-item-title')
          .get('cvi-ng-icon')
          .shouldHaveClasses('svg', 'cvi-steps__list-item-arrow-icon');
      })
      .shouldBeVisible('[data-cy="step_1"]')
      .shouldNotBeVisible('[data-cy="step_2"]');
  });
});
