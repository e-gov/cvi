describe('NotificationComponent', () => {
  beforeEach(() => {
    cy.visitStorybook();
  });

  it('Renders default (info) notification and clicks close button', () => {
    cy.loadStory('Angular Notification', 'Default').runNotificationCommonTest(
      'info',
      'regular',
      false,
      true
    );
  });

  it('Renders error notification and clicks close button', () => {
    cy.loadStory('Angular Notification', 'Error').runNotificationCommonTest(
      'error',
      'regular',
      false,
      true
    );
  });

  it('Renders neutral notification and clicks close button', () => {
    cy.loadStory('Angular Notification', 'Neutral').runNotificationCommonTest(
      'neutral',
      'regular',
      false,
      true
    );
  });

  it('Renders success notification and clicks close button', () => {
    cy.loadStory('Angular Notification', 'Success').runNotificationCommonTest(
      'success',
      'regular',
      false,
      true
    );
  });

  it('Renders warning notification and clicks close button', () => {
    cy.loadStory('Angular Notification', 'Warning').runNotificationCommonTest(
      'warning',
      'regular',
      false,
      true
    );
  });

  it('Renders compact notification and clicks close button', () => {
    cy.loadStory('Angular Notification', 'Compact').runNotificationCommonTest(
      'info',
      'compact',
      false,
      false
    );
  });

  it('Renders compact with icon notification and clicks close button', () => {
    cy.loadStory(
      'Angular Notification',
      'Compact With Icon'
    ).runNotificationCommonTest('neutral', 'compact', true, false);
  });
});
