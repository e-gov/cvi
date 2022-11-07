describe('StepsComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default steps and clicks on the first step', () => {
    cy.loadStory('Angular Steps Steps', 'Default').runStepsCommonTest();
  });

  it('Renders default steps and clicks on the second step', () => {
    cy.loadStory('Angular Steps Steps', 'Default')
      .get('[data-cy="veera-steps__list-item_0"]')
      .click();

    cy.get('[data-cy="veera-steps__list-item_1"]')
      .click()
      .shouldHaveClasses('[data-cy="veera-steps__list-item_0"]', 'is-past')
      .shouldNotHaveClasses(
        '[data-cy="veera-steps__list-item_0"]',
        'is-current'
      )
      .shouldHaveClasses('[data-cy="veera-steps__list-item_1"]', [
        'is-past',
        'is-current',
      ])
      .shouldNotBeVisible('[data-cy="step_1"]')
      .shouldBeVisible('[data-cy="step_2"]')
      .shouldExist([
        '[data-cy="previous_step_button_1"]',
        '[data-cy="next_step_button_0"]',
      ])
      .shouldHaveClasses('[data-cy="previous_step_button_1"]', [
        'veera-steps__directional-button',
        'veera-steps__directional-button--direction-prev',
      ])
      .shouldHaveClasses('[data-cy="next_step_button_0"]', [
        'veera-steps__directional-button',
        'veera-steps__directional-button--direction-next',
      ]);
  });

  it('Renders mobile steps and clicks on the first step', () => {
    cy.loadStory('Angular Steps Steps', 'Mobile').setDevice('mobile');

    cy.shouldExist('[data-cy="steps-description"]');

    cy.runStepsCommonTest();
  });

  it('Renders steps with observable titles and clicks on the first step', () => {
    cy.loadStory(
      'Angular Steps Steps',
      'With Observable Titles'
    ).runStepsCommonTest();
  });
});
