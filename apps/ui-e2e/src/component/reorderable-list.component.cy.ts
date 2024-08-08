describe('ReorderableListComponent', () => {
  beforeEach(() => {
    cy.visitStorybook();
  });

  it('Renders default reorderable list with 5 steps', () => {
    cy.loadStory(
      'Angular Reorderable list',
      'Reorderable List Single Form Item'
    ).then(() => {
      cy.get('[data-cy^="reorderable-list-item"]').each(($item, index) => {
        cy.wrap($item)
          .should('exist')
          .should('have.class', 'cvi-reorderable-list__item');

        // 1st step
        cy.wrap($item)
          .get('[data-cy="reorderable-list-item-1"]')
          .within(() => {
            cy.get('[data-cy="step-1-set-as-next-button"]').should(
              'be.visible'
            );
            cy.get('[data-cy="step-1-set-as-previous-button"]').should(
              'not.be.visible'
            );
            cy.reorderableListItemShouldHaveOrderNr(1);
          });

        // Reordering buttons container
        cy.wrap($item)
          .find('.cvi-reorderable-list__ordering-buttons')
          .within(() => {
            cy.get('[data-cy="step-' + (index + 1) + '-set-as-next-button"]')
              .should('exist')
              .get(
                '[data-cy="step-' + (index + 1) + '-set-as-previous-button"]'
              )
              .should('exist')
              .shouldHaveClasses('div', 'cvi-reorderable-list__order-nr');
            cy.reorderableListItemShouldHaveOrderNr(index + 1);
          });

        // Remove button
        cy.wrap($item)
          .find('.cvi-reorderable-list__remove-button')
          .within(() => {
            cy.shouldHaveAttributes('cvi-ng-icon', {
              name: 'name',
              value: 'close',
            }).shouldHaveClasses('svg', 'cvi-reorderable-list__close-icon');
          });

        // Step name label and input
        cy.wrap($item)
          .find('.cvi-reorderable-list__form-item-wrapper')
          .shouldExist('cvi-ng-form-item');

        // 2nd / middle step
        cy.wrap($item)
          .get('[data-cy="reorderable-list-item-2"]')
          .within(() => {
            cy.get('[data-cy="step-2-set-as-next-button"]').should(
              'be.visible'
            );
            cy.get('[data-cy="step-2-set-as-previous-button"]').should(
              'be.visible'
            );
            cy.reorderableListItemShouldHaveOrderNr(2);
          });

        // Last step
        cy.wrap($item)
          .get('[data-cy="reorderable-list-item-5"]')
          .within(() => {
            cy.get('[data-cy="step-5-set-as-next-button"]').should(
              'not.be.visible'
            );
            cy.get('[data-cy="step-5-set-as-previous-button"]').should(
              'be.visible'
            );
            cy.reorderableListItemShouldHaveOrderNr(5);
          });
      });
    });
  });

  it('Clicking remove button on the First step removes it and second step becomes first', () => {
    cy.loadStory('Angular Reorderable list', 'ReorderableListSingleFormItem');
    cy.get('cvi-ng-reorderable-list-item')
      // Check 2nd step name
      .reorderableListItemShouldHaveName(2, 'Confirmation of time and place')
      // Check 1st step name
      .reorderableListItemShouldHaveName(1, 'Submission of application');
    // Remove 1st step
    cy.get('[data-cy="step-1-remove-button"]').click();
    cy.get('cvi-ng-reorderable-list-item')
      // Previously 2nd step should be the new 1st
      .reorderableListItemShouldHaveName(2, 'Confirmation of time and place');
  });

  it('Clicking second step up arrow button swaps it with third', () => {
    cy.loadStory('Angular Reorderable list', 'ReorderableListSingleFormItem');
    cy.get('cvi-ng-reorderable-list-item')
      // Check 3rd step name
      .reorderableListItemShouldHaveName(3, 'Getting married')
      // Check 2nd step name
      .reorderableListItemShouldHaveName(2, 'Confirmation of time and place');
    cy.get('[data-cy="step-2-set-as-next-button"]').click();
    cy.get('cvi-ng-reorderable-list-item')
      // Old 2nd step should be the new 3rd step
      .reorderableListItemShouldHaveName(3, 'Getting married')
      // Old 3rd step should be the new 2nd step
      .reorderableListItemShouldHaveName(2, 'Confirmation of time and place');
  });
});
