describe('NotificationComponent', () => {
  beforeEach(() => {
    cy.visitStorybook();
  });

  it('Renders default (info) notification and clicks close button', () => {
    cy.loadStory('Angular Notification', 'Default').runNotificationCommonTest(
      'info',
      'regular',
      true,
      true,
      'info'
    );
  });

  it('Renders error notification and clicks close button', () => {
    cy.loadStory('Angular Notification', 'Error').runNotificationCommonTest(
      'error',
      'regular',
      true,
      true,
      'error_outline'
    );
  });

  it('Renders neutral notification and clicks close button', () => {
    cy.loadStory('Angular Notification', 'Neutral').runNotificationCommonTest(
      'neutral',
      'regular',
      false,
      true,
      ''
    );
  });

  it('Renders success notification and clicks close button', () => {
    cy.loadStory('Angular Notification', 'Success').runNotificationCommonTest(
      'success',
      'regular',
      true,
      true,
      'check_circle_outline'
    );
  });

  it('Renders warning notification and clicks close button', () => {
    cy.loadStory('Angular Notification', 'Warning').runNotificationCommonTest(
      'warning',
      'regular',
      true,
      true,
      'warning_amber'
    );
  });

  it('Renders compact notification and clicks close button', () => {
    cy.loadStory('Angular Notification', 'Compact').runNotificationCommonTest(
      'neutral',
      'compact',
      false,
      false,
      ''
    );
  });

  it('Renders compact with icon notification and clicks close button', () => {
    cy.loadStory(
      'Angular Notification',
      'Compact With Icon'
    ).runNotificationCommonTest('info', 'compact', true, false, 'info');
  });

  it('Renders compact with custom icon notification and clicks close button', () => {
    cy.loadStory(
      'Angular Notification',
      'Compact With Custom Icon'
    ).runNotificationCommonTest(
      'neutral',
      'compact',
      true,
      false,
      'check_circle_outline'
    );
  });
});
