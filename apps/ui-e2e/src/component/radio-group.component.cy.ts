describe('RadioGroupComponent', () => {
  beforeEach(() => {
    cy.visitStorybook();
  });

  it('Renders default radio group and checks the first option', () => {
    cy.loadStory('Angular Form Radio Button Group', 'Default')
      .runRadioGroupCommonTest('regular')
      .get('[data-cy="option_1"]')
      .shouldHaveClasses('label', 'cvi-radio-group__item-inner')
      .shouldHaveClasses('input', 'cvi-radio-group__item-control');

    cy.get('[type="radio"]')
      .first()
      .should('not.be.checked')
      .check()
      .should('be.checked');
  });

  it('Renders option radio buttons group and clicks first button', () => {
    cy.loadStory('Angular Form Radio Button Group', 'With Option Buttons')
      .runRadioGroupCommonTest('regular')
      .get('[data-cy="option_1"]')
      .within(() => {
        cy.shouldHaveClasses(
          'label',
          'cvi-radio-group__item-inner'
        ).shouldHaveClasses('input', 'cvi-radio-group__input');
      });

    /**
     * TODO(@nrwl/cypress): Nesting Cypress commands in a should assertion now throws.
     * You should use .then() to chain commands instead.
     * More Info: https://docs.cypress.io/guides/references/migration-guide#-should
     **/
    cy.get('[data-cy="option_1"]')
      .within(() => {
        cy.get('input').should('not.be.checked');
      })
      .click()
      .within(() => {
        cy.get('input').should('be.checked');
      });
  });

  it('Renders option button compact and clicks first button', () => {
    cy.loadStory(
      'Angular Form Radio Button Group',
      'With Compact Option Buttons'
    )
      .runRadioGroupCommonTest('compact')
      .get('[data-cy="option_1"]')
      .within(() => {
        cy.shouldHaveClasses(
          'label',
          'cvi-radio-group__item-inner'
        ).shouldHaveClasses('input', 'cvi-radio-group__input');
      });

    /**
     * TODO(@nrwl/cypress): Nesting Cypress commands in a should assertion now throws.
     * You should use .then() to chain commands instead.
     * More Info: https://docs.cypress.io/guides/references/migration-guide#-should
     **/
    cy.get('[data-cy="option_1"]')
      .within(() => {
        cy.get('input').should('not.be.checked');
      })
      .click()
      .within(() => {
        cy.get('input').should('be.checked');
      });
  });
});
