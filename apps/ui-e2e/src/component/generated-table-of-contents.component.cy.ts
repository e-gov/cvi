describe('GeneratedTableOfContentsComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders generated table of contents', () => {
    cy.loadStory('Angular Table of contents Generated table of contents', 'Default')
      .shouldHaveClasses('cvi-ng-table-of-contents-wrapper', 'cvi-table-of-contents')
      .within(() => {
        cy.shouldHaveClasses('div', 'cvi-table-of-contents__aside');
      });
  });

  it('Highlights an item in the sidebar on scroll', () => {
    cy.loadStory('Angular Table of contents Generated table of contents', 'Default');
    cy.get('[data-cy="test-h3"]').scrollIntoView();
    cy.shouldHaveClasses('cvi-ng-table-of-contents-item:nth-child(2n)', 'is-current');
  });

  it('Sidebar stays visible after scroll', () => {
    cy.loadStory('Angular Table of contents Generated table of contents', 'Default');
    cy.get('[data-cy="test-nested-h2"]').scrollIntoView();
    cy.get('cvi-ng-table-of-contents').should('be.visible');
  });
});
