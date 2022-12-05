describe('AccordionComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default accordion', () => {
    cy.loadStory('Angular Accordion', 'Default')
      .shouldHaveClasses('veera-ng-accordion', 'veera-accordion')
      .shouldHaveClasses('ul', 'veera-accordion__list')
      .children()
      .should('have.length', 6);

    // First accordion header
    cy.shouldHaveClasses(
      'header',
      'veera-accordion__item-header'
    ).shouldHaveClasses('button', 'veera-accordion__item-toggle-button');

    // Second accordion content
    cy.shouldHaveClasses(
      'div',
      'veera-accordion__item-content'
    ).shouldHaveClasses('div', 'veera-accordion__item-details');

    // Third accordion button
    cy.shouldHaveClasses('button', [
      'veera-accordion__item-toggle-button',
      'is-disabled',
    ]).and('be.disabled');
  });

  it('Renders accordion with customer header', () => {
    cy.loadStory('Angular Accordion', 'With Custom Header')
      .shouldHaveClasses('veera-ng-accordion', 'veera-accordion')
      .shouldHaveClasses('ul', 'veera-accordion__list')
      .shouldHaveClasses('li', 'veera-accordion__item')
      .get('h1')
      .get('button')
      .shouldHaveClasses('div', 'veera-accordion__item-content')
      .should('be.empty');
  });

  it('Renders accordion with custom title', () => {
    cy.loadStory('Angular Accordion', 'With Custom Title')
      .get('.veera-accordion__item-toggle-button')
      .get('svg');
  });
});
