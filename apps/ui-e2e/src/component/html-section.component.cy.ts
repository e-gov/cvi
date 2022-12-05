describe('HtmlSectionComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default html section', () => {
    cy.loadStory('Angular Html Section', 'Default')
      .get('veera-ng-html-section')
      .shouldHaveClasses('div', 'veera-html-section')
      .shouldHaveClasses('h3', 'veera-html-section__title')
      .shouldHaveClasses('div', 'veera-html-section__content')
      .shouldHaveClasses('div', 'veera-html-section__content-elements');
  });

  it('Renders contacts html section', () => {
    cy.loadStory('Angular Html Section', 'Contacts')
      .get('veera-ng-html-section')
      .shouldHaveClasses('h3', 'veera-html-section__title')
      .shouldHaveClasses('div', 'veera-html-section__content-elements');
  });
});
