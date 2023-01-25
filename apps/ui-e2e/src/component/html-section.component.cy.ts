describe('HtmlSectionComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default html section', () => {
    cy.loadStory('Angular Html Section', 'Default')
      .get('cvi-ng-html-section')
      .shouldHaveClasses('div', 'cvi-html-section')
      .shouldHaveClasses('h3', 'cvi-html-section__title')
      .shouldHaveClasses('div', 'cvi-html-section__content')
      .shouldHaveClasses('div', 'cvi-html-section__content-elements');
  });

  it('Renders contacts html section', () => {
    cy.loadStory('Angular Html Section', 'Contacts')
      .get('cvi-ng-html-section')
      .shouldHaveClasses('h3', 'cvi-html-section__title')
      .shouldHaveClasses('div', 'cvi-html-section__content-elements');
  });
});
