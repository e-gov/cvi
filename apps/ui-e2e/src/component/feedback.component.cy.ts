describe('FeedbackComponent', () => {
  beforeEach(() => {
    cy.visitStorybook();
  });

  it('Renders default feedback', () => {
    cy.loadStory('Angular Feedback', 'Default')
      .get('veera-ng-feedback')
      .get('veera-ng-radio-group');
  });

  it('Renders feedback with icons', () => {
    cy.loadStory('Angular Feedback', 'With Icons')
      .get('veera-ng-feedback')
      .get('veera-ng-radio-group');

    cy.get('[data-cy="happy_face"]');
    cy.get('[data-cy="sad_face"]');
  });
});
