describe('FeedbackComponent', () => {
  beforeEach(() => {
    cy.visitStorybook();
  });

  it('Renders default feedback', () => {
    cy.loadStory('Angular Feedback', 'Default')
      .get('cvi-ng-feedback')
      .get('cvi-ng-radio-group');
  });

  it('Renders feedback with icons', () => {
    cy.loadStory('Angular Feedback', 'With Icons')
      .get('cvi-ng-feedback')
      .get('cvi-ng-radio-group');

    cy.get('[data-cy="happy_face"]');
    cy.get('[data-cy="sad_face"]');
  });
});
