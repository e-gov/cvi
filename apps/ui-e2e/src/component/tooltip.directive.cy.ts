describe('TooltipDirective', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders tooltip', () => {
    cy.loadStory('Angular Tooltip Tooltip Directive', 'Default')
      .get('[data-cy="test-tooltip-source"]')
      .trigger('mouseenter');

    cy.shouldExist('cvi-ng-tooltip');
    cy.shouldHaveClasses('cvi-ng-tooltip', 'cvi-tooltip');

    cy.get('[data-cy="test-tooltip-content"]').should('be.visible');
  });
});
