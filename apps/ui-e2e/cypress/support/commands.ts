// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import {
  ButtonAppearance,
  ButtonSize,
  NotificationSeverity,
  NotificationSize,
  RadioGroupAppearance,
} from '@ria/veera-ng';

type AttrNameValuePair = { name: string; value: string | number };

type Device = 'desktop' | 'tablet' | 'mobile';

type LabeledIconAlignment = 'start' | 'center';
type LabeledIconPosition = 'before' | 'after';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      shouldBeVisible(element: string): Cypress.Chainable;

      shouldNotBeVisible(element: string): Cypress.Chainable;

      shouldNotBeVisibleA11y(element: string): Cypress.Chainable;

      shouldBeVisibleA11y(element: string): Cypress.Chainable;

      shouldExist(element: string | string[]): Cypress.Chainable;

      shouldNotExist(element: string): Cypress.Chainable;

      shouldHaveClasses(
        element: string,
        className: string | string[]
      ): Cypress.Chainable;

      shouldNotHaveClasses(
        element: string,
        className: string | string[]
      ): Cypress.Chainable;

      shouldHaveAttributes(
        element: string,
        attrNameValuePair: AttrNameValuePair | AttrNameValuePair[]
      ): Cypress.Chainable;

      shouldHaveStyle(
        element: string,
        attrNameValuePair: AttrNameValuePair | AttrNameValuePair[]
      ): Cypress.Chainable;

      setDevice(device: Device): void;

      storyAction(actionName: string): void;

      runStepsCommonTest(): void;

      runNotificationCommonTest(
        type: NotificationSeverity,
        size: NotificationSize,
        showIcon: boolean,
        showCloseButton: boolean,
        iconName: string
      ): void;

      runLabeledIconCommonTest(
        alignment: LabeledIconAlignment,
        position: LabeledIconPosition
      ): void;

      runButtonCommonTest(appearance: ButtonAppearance, size: ButtonSize): void;

      runRadioGroupCommonTest(
        appearance: RadioGroupAppearance
      ): Cypress.Chainable;

      reorderableListItemShouldHaveOrderNr(orderNr: number);

      reorderableListItemShouldHaveName(
        orderNr: number,
        name: string
      ): Cypress.Chainable;
    }
  }
}

Cypress.Commands.add('shouldBeVisible', (element) => {
  cy.get(element).should('be.visible');
});

Cypress.Commands.add('shouldNotBeVisible', (element) => {
  cy.get(element).should('not.be.visible');
});

// veera-screenreader-text class or mixin applied
Cypress.Commands.add('shouldNotBeVisibleA11y', (element) => {
  cy.get(element).should('have.css', 'clip', 'rect(0px, 0px, 0px, 0px)');
});

Cypress.Commands.add('shouldBeVisibleA11y', (element) => {
  cy.get(element).should('not.have.css', 'clip', 'rect(0px, 0px, 0px, 0px)');
});

Cypress.Commands.add('shouldExist', (element) => {
  [].concat(element || []).forEach((value) => cy.get(value).should('exist'));
});

Cypress.Commands.add('shouldNotExist', (element) => {
  cy.get(element).should('not.exist');
});

Cypress.Commands.add('shouldHaveClasses', (element, className) => {
  cy.get(element);

  [].concat(className || []).forEach((value) => cy.should('have.class', value));
});

Cypress.Commands.add('shouldNotHaveClasses', (element, className) => {
  cy.get(element);

  []
    .concat(className || [])
    .forEach((value) => cy.should('not.have.class', value));
});

Cypress.Commands.add('shouldHaveAttributes', (element, attrNameValuePair) => {
  cy.get(element);

  []
    .concat(attrNameValuePair || [])
    .forEach((value) => cy.should('have.attr', value.name, value.value));
});

Cypress.Commands.add('shouldHaveStyle', (element, attrNameValuePair) => {
  cy.get(element);

  []
    .concat(attrNameValuePair || [])
    .forEach((value) => cy.should('have.css', value.name, value.value));
});

Cypress.Commands.add('setDevice', (device = 'desktop') => {
  if (device === 'tablet') {
    cy.viewport('ipad-2');
  } else if (device === 'mobile') {
    cy.viewport('iphone-xr');
  } else {
    cy.viewport(1000, 660);
  }
});

Cypress.Commands.add('storyAction', (actionName) => {
  cy.document().then((doc) => {
    const stub = cy.stub().as(actionName);
    doc.addEventListener(actionName, (e: CustomEvent) => stub(e.detail));
  });
});

Cypress.Commands.add('runStepsCommonTest', () => {
  cy.shouldNotBeVisible('[data-cy="step_1"]')
    .shouldNotHaveClasses('[data-cy="veera-steps__list-item_0"]', [
      'is-past',
      'is-current',
    ])
    .click()
    .shouldHaveClasses('[data-cy="veera-steps__list-item_0"]', [
      'is-past',
      'is-current',
    ])
    .shouldBeVisible('[data-cy="step_1"]')
    .shouldNotExist('[data-cy="previous_step_button_0"]')
    .shouldExist('[data-cy="next_step_button_0"]');
});

Cypress.Commands.add(
  'runNotificationCommonTest',
  (
    type = 'info',
    size = 'regular',
    showIcon = false,
    showCloseButton = true,
    iconName = ''
  ) => {
    cy.get('veera-ng-notification').within(() => {
      cy.shouldHaveClasses('[data-cy="notification"]', [
        'veera-notification',
        `veera-notification--severity-${type}`,
        `veera-notification--size-${size}`,
      ]);

      if (showCloseButton) {
        cy.get('[data-cy="notification"]').within(() => {
          cy.shouldHaveClasses('button', 'veera-notification__close-button')
            .click()
            .within(() => {
              cy.shouldHaveAttributes('[data-cy="close-icon"]', {
                name: 'name',
                value: 'close',
              });
            });
        });
      } else {
        cy.shouldNotExist('[data-cy="close-icon"]');
      }
      cy.shouldHaveClasses(
        '[data-cy="inner"]',
        'veera-notification__inner'
      ).within(() => {
        cy.shouldHaveClasses(
          '[data-cy="content"]',
          'veera-notification__content'
        );
        if (size === 'compact') {
          if (showIcon) {
            cy.shouldHaveClasses(
              '[data-cy="icon"]',
              'veera-notification__content-icon-wrapper'
            ).shouldHaveAttributes('[data-cy="icon"]', {
              name: 'ng-reflect-name',
              value: iconName,
            });
          } else {
            cy.shouldNotExist('[data-cy="icon"]');
          }
        } else {
          cy.shouldHaveClasses(
            '[data-cy="header"]',
            'veera-notification__header'
          );

          if (showIcon) {
            cy.get('[data-cy="header"]').within(() => {
              cy.shouldHaveClasses(
                '[data-cy="header-icon"]',
                'veera-notification__header-icon-wrapper'
              ).shouldHaveAttributes('[data-cy="header-icon"]', {
                name: 'ng-reflect-name',
                value: iconName,
              });
            });
          } else {
            cy.shouldNotExist('veera-ng-labeled-icon');
          }
        }
      });
    });
  }
);

Cypress.Commands.add('runLabeledIconCommonTest', (alignment, position) => {
  cy.shouldHaveClasses('veera-ng-labeled-icon', [
    'veera-labeled-icon',
    `veera-labeled-icon--align-${alignment}`,
  ]).within(() => {
    cy.shouldHaveClasses('div', [
      'veera-labeled-icon__wrapper',
      `veera-labeled-icon__wrapper--icon-${position}`,
    ]).within(() => {
      cy.shouldExist('veera-ng-icon');
    });
    cy.shouldHaveClasses('div', 'veera-labeled-icon__content');
  });
});

Cypress.Commands.add('runButtonCommonTest', (appearance, size) => {
  cy.shouldHaveClasses('veera-ng-button', [
    'veera-button',
    `veera-button--appearance-${appearance}`,
    `veera-button--size-${size}`,
  ]).shouldHaveClasses('button', 'veera-button__button');
});

Cypress.Commands.add('runRadioGroupCommonTest', (appearance) => {
  cy.shouldHaveClasses('veera-ng-radio-group', [
    'veera-radio-group',
    `veera-radio-group--appearance-${appearance}`,
  ])
    .shouldHaveClasses('fieldset', 'veera-radio-group__inner')
    .shouldHaveClasses('legend', 'veera-radio-group__title')
    .shouldHaveClasses('div', 'veera-radio-group__list');
});

Cypress.Commands.add('reorderableListItemShouldHaveOrderNr', (orderNr) => {
  cy.get(`[data-cy="step-${orderNr}-order-nr"]`).should('have.value', orderNr);
});

Cypress.Commands.add('reorderableListItemShouldHaveName', (orderNr, name) => {
  cy.get(`[data-cy="step-${orderNr}-name"]`).within(() => {
    cy.get('input').should('have.value', name);
  });
});
