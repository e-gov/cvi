describe('RadioGroupComponent', () => {
  beforeEach(() => {
    cy.visitStorybook();
  });

  it('Renders default radio group and checks the first option', () => {
    cy.loadStory('Angular Radio Button Group', 'Default')
      .runRadioGroupCommonTest('regular')
      .get('[data-cy="option_1"]')
      .shouldHaveClasses('label', 'veera-radio-group__item-inner')
      .shouldHaveClasses('input', 'c-radio');

    cy.get('[type="radio"]')
      .first()
      .should('not.be.checked')
      .check()
      .should('be.checked');
  });

  it('Renders option radio buttons group and clicks first button', () => {
    cy.loadStory('Angular Radio Button Group', 'Option Button')
      .runRadioGroupCommonTest('regular')
      .get('[data-cy="option_1"]')
      .within(() => {
        cy.shouldHaveClasses(
          'label',
          'veera-radio-group__item-inner'
        ).shouldHaveClasses('input', 'veera-radio-group__input');
      });

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
    cy.loadStory('Angular Radio Button Group', 'Option Button Compact')
      .runRadioGroupCommonTest('compact')
      .get('[data-cy="option_1"]')
      .within(() => {
        cy.shouldHaveClasses(
          'label',
          'veera-radio-group__item-inner'
        ).shouldHaveClasses('input', 'veera-radio-group__input');
      });

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
