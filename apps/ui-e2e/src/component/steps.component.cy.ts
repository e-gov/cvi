describe('StepsComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default steps and clicks on the first step', () => {
    cy.loadStory('Angular Steps Steps', 'Default').runStepsCommonTest();
  });

  it('Renders default steps and clicks on the second step', () => {
    cy.loadStory('Angular Steps Steps', 'Default')
      .get('[data-cy="cvi-steps__list-item_0"]')
      .click();

    cy.get('[data-cy="cvi-steps__list-item_1"]')
      .click()
      .shouldHaveClasses('[data-cy="cvi-steps__list-item_0"]', 'is-past')
      .shouldNotHaveClasses('[data-cy="cvi-steps__list-item_0"]', 'is-current')
      .shouldHaveClasses('[data-cy="cvi-steps__list-item_1"]', [
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
        'cvi-steps__directional-button',
        'cvi-steps__directional-button--direction-prev',
      ])
      .shouldHaveClasses('[data-cy="next_step_button_0"]', [
        'cvi-steps__directional-button',
        'cvi-steps__directional-button--direction-next',
      ]);
  });

  it('Renders steps with observable titles and clicks on the first step', () => {
    cy.loadStory('Angular Steps Steps', 'With Observable Titles');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1500);
    cy.runStepsCommonTest();
  });

  it('Renders steps with scrollbar and clicks right button to make left button visible', () => {
    cy.loadStory('Angular Steps Steps', 'Default with scroll');
    cy.shouldNotExist('button[id="steps-left-scroll-button"]');
    cy.get('button[id="steps-right-scroll-button"]').click();

    cy.shouldExist('button[id="steps-left-scroll-button"]');
  });
});
