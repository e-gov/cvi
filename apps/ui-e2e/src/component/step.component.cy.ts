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
      .shouldHaveClasses('veera-ng-step', [
        'veera-steps__content-panel',
        'is-current',
      ])
      .within(() => {
        cy.shouldHaveClasses('div', 'veera-steps__content-panel-header').within(
          () => {
            cy.shouldHaveClasses(
              'span',
              'veera-steps__content-panel-step-number'
            ).shouldHaveClasses('h2', 'veer-steps__content-panel-title');
          }
        );
      });
  });
});
