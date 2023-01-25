describe('ReorderableListComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders default reorderable list with 5 steps', () => {
    cy.loadStory(
      'Angular Reorderable list',
      'Reorderable List Single Form Item'
    )
      // 1st step
      .shouldHaveClasses(
        '[data-cy="reorderable-list-item-1"]',
        'cvi-reorderable-list__item'
      )
      // Reordering buttons container
      .within(() => {
        cy.shouldHaveClasses(
          'div',
          'cvi-reorderable-list__ordering-buttons'
        ).within(() => {
          cy.shouldBeVisible('[data-cy="step-1-set-as-next-button"]')
            .shouldNotBeVisible('[data-cy="step-1-set-as-previous-button"]')
            .shouldHaveClasses('div', 'cvi-reorderable-list__order-nr');

          cy.reorderableListItemShouldHaveOrderNr(1);
        });
      })
      // Remove button
      .within(() => {
        cy.shouldHaveClasses(
          'button',
          'cvi-reorderable-list__remove-button'
        ).within(() => {
          cy.shouldHaveAttributes('cvi-ng-icon', {
            name: 'name',
            value: 'close',
          }).shouldHaveClasses('svg', 'cvi-reorderable-list__close-icon');
        });
      })
      // Step name label and input
      .within(() => {
        cy.shouldHaveClasses(
          'div',
          'cvi-reorderable-list__form-item-wrapper'
        ).shouldExist('cvi-ng-form-item');
      })
      // 2nd / middle step
      .get('[data-cy="reorderable-list-item-2"]')
      .within(() => {
        cy.shouldBeVisible(
          '[data-cy="step-2-set-as-next-button"]'
        ).shouldBeVisible('[data-cy="step-2-set-as-previous-button"]');
        cy.reorderableListItemShouldHaveOrderNr(2);
      })
      // Last step
      .get('[data-cy="reorderable-list-item-5"]')
      .within(() => {
        cy.shouldNotBeVisible(
          '[data-cy="step-5-set-as-next-button"]'
        ).shouldBeVisible('[data-cy="step-5-set-as-previous-button"]');

        cy.reorderableListItemShouldHaveOrderNr(5);
      });
  });

  it('Clicking remove button on the First step removes it and second step becomes first', () => {
    cy.loadStory('Angular Reorderable list', 'ReorderableListSingleFormItem')
      // Check 2nd step name
      .reorderableListItemShouldHaveName(2, 'Confirmation of time and place')
      // Check 1st step name
      .reorderableListItemShouldHaveName(1, 'Submission of application')
      // Remove 1st step
      .get('[data-cy="step-1-remove-button"]')
      .click()
      // Previously 2nd step should be the new 1st
      .reorderableListItemShouldHaveName(2, 'Confirmation of time and place');
  });

  it('Clicking second step up arrow button swaps it with third', () => {
    cy.loadStory('Angular Reorderable list', 'ReorderableListSingleFormItem')
      // Check 3rd step name
      .reorderableListItemShouldHaveName(3, 'Getting married')
      // Check 2nd step name
      .reorderableListItemShouldHaveName(2, 'Confirmation of time and place')
      .get('[data-cy="step-2-set-as-next-button"]')
      .click()
      // Old 2nd step should be the new 3rd step
      .reorderableListItemShouldHaveName(3, 'Getting married')
      // Old 3rd step should be the new 2nd step
      .reorderableListItemShouldHaveName(2, 'Confirmation of time and place');
  });
});
