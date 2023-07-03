describe('DatepickerComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('renders default story', () => {
    cy.loadStory('Angular Form Datepicker', 'Default')
      .shouldHaveClasses('cvi-ng-datepicker', 'cvi-textfield')
      .shouldHaveClasses('input', 'cvi-datepicker__input-field')
      .changeArg('htmlId', 'Qwerty123')
      .shouldHaveAttributes('input', [
        { name: 'id', value: 'Qwerty123' },
        { name: 'placeholder', value: 'pp.kk.aaaa' },
      ])
      .and('not.be.disabled');
  });

  it('can be disabled', () => {
    cy.loadStory('Angular Form Datepicker', 'Default')
      .get('cvi-ng-datepicker')
      .changeArg('disabled', true);

    cy.shouldHaveClasses('cvi-ng-datepicker', [
      'cvi-textfield',
      'cvi-datepicker__input-container--is-disabled',
    ])
      .shouldHaveAttributes('input', [{ name: 'id', value: 'Qwerty123' }])
      .and('be.disabled');

    cy.get('cvi-ng-datepicker')
      .changeArg('disabled', false)
      .shouldNotHaveClasses('cvi-ng-datepicker', [
        'cvi-datepicker__input-container--is-disabled',
      ]);
  });

  it('can select dates from the calendar', () => {
    cy.loadStory('Angular Form Datepicker', 'Default')
      .get('cvi-ng-datepicker')
      .click()
      .shouldHaveClasses('cvi-ng-datepicker-calendar div', [
        'cvi-datepicker__calendar',
      ])
      .get('button.cvi-datepicker__calendar-button')
      .first()
      .click()
      .get('input')
      .should('not.have.value', undefined);
  });

  it('can input a date and it gets selected in the calendar', () => {
    cy.loadStory('Angular Form Datepicker', 'Default')
      .get('input')
      .clear()
      .should('have.value', '')
      .type('28.02.2023')
      .click()
      .shouldHaveClasses('cvi-ng-datepicker-calendar div', [
        'cvi-datepicker__calendar',
      ])
      .get('button.cvi-datepicker__calendar-button')
      .last()
      .shouldHaveClasses('button.cvi-datepicker__calendar-button', [
        'cvi-datepicker__calendar-button cvi-datepicker__calendar-button--selected',
      ]);
  });
});
