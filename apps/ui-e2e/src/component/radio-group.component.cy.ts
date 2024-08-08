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

    cy.get('[type="radio"]').first().should('not.be.checked').check();
    cy.get('[type="radio"]').first().should('be.checked');
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

    cy.get('[data-cy="option_1"]').within(() => {
      cy.get('input').should('not.be.checked');
    });
    cy.get('[data-cy="option_1"]').click();
    cy.get('[data-cy="option_1"]').within(() => {
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

    cy.get('[data-cy="option_1"]').within(() => {
      cy.get('input').should('not.be.checked');
    });
    cy.get('[data-cy="option_1"]').click();
    cy.get('[data-cy="option_1"]').within(() => {
      cy.get('input').should('be.checked');
    });
  });
});
