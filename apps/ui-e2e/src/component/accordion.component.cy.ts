describe('AccordionComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default accordion', () => {
    cy.loadStory('Angular Accordion', 'Default')
      .shouldHaveClasses('cvi-ng-accordion', 'cvi-accordion')
      .shouldHaveClasses('ul', 'cvi-accordion__list')
      .children()
      .should('have.length', 6);

    // First accordion header
    cy.shouldHaveClasses('div', 'cvi-accordion__item-header').shouldHaveClasses(
      'button',
      'cvi-accordion__item-toggle-button'
    );

    // Second accordion content
    cy.shouldHaveClasses(
      'div',
      'cvi-accordion__item-content'
    ).shouldHaveClasses('div', 'cvi-accordion__item-details');

    // Third accordion button
    cy.shouldHaveClasses('button', [
      'cvi-accordion__item-toggle-button',
      'is-disabled',
    ]).and('be.disabled');
  });

  it('Renders accordion with customer header', () => {
    cy.loadStory('Angular Accordion', 'With Custom Header')
      .shouldHaveClasses('cvi-ng-accordion', 'cvi-accordion')
      .shouldHaveClasses('ul', 'cvi-accordion__list')
      .shouldHaveClasses('li', 'cvi-accordion__item')
      .get('h1')
      .get('button')
      .shouldHaveClasses('div', 'cvi-accordion__item-content')
      .should('be.empty');
  });

  it('Renders accordion with custom title', () => {
    cy.loadStory('Angular Accordion', 'With Html In Title')
      .get('.cvi-accordion__item-toggle-button')
      .get('svg');
  });
});
