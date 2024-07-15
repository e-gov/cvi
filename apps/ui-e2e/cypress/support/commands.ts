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
  LabeledIconPosition,
  LabeledIconVerticalAlignment,
} from '@egov/cvi-ng';

type AttrNameValuePair = { name: string; value: string | number };

type Device = 'desktop' | 'tablet' | 'mobile';

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

      shouldHaveCSSVar(
        element: string,
        cssVarName: string,
        cssVarValue: string
      ): Cypress.Chainable;

      shouldBeFirstChild(firstElement: string): Cypress.Chainable;

      shouldBeLastChild(lastElement: string): Cypress.Chainable;

      shouldBeOnlyChild(lastElement: string): Cypress.Chainable;

      shouldHaveBefore(element: string, prevElement: string): Cypress.Chainable;

      shouldHaveAfter(element: string, nextElement: string): Cypress.Chainable;

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
        alignment: LabeledIconVerticalAlignment,
        iconPosition: LabeledIconPosition
      ): void;

      runButtonCommonTest(
        appearance: 'primary' | 'secondary' | 'text',
        size: 'm' | 's'
      ): void;

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

// cvi-screenreader-text class or mixin applied
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

Cypress.Commands.add(
  'shouldHaveCSSVar',
  (element: string, cssVarName: string, cssVarValue: string) => {
    cy.window().then((win) => {
      cy.get(element).should(($el) => {
        const customProp = win
          .getComputedStyle($el[0])
          .getPropertyValue(cssVarName)
          .trim();
        expect(customProp).to.equal(cssVarValue);
      });
    });
  }
);

Cypress.Commands.add('shouldBeFirstChild', (firstElement: string) => {
  cy.get(firstElement).should(($el) => {
    expect($el.is(':first-child')).to.be.true;
  });
});

Cypress.Commands.add('shouldBeLastChild', (lastElement: string) => {
  cy.get(lastElement).should(($el) => {
    expect($el.is(':last-child')).to.be.true;
  });
});

Cypress.Commands.add('shouldBeOnlyChild', (lastElement: string) => {
  cy.get(lastElement).should(($el) => {
    expect($el.is(':only-child')).to.be.true;
  });
});

Cypress.Commands.add(
  'shouldHaveBefore',
  (element: string, prevElement: string) => {
    cy.get(element).should(($el) => {
      expect($el.prev(prevElement)).to.have.length(1);
    });
  }
);

Cypress.Commands.add(
  'shouldHaveAfter',
  (element: string, nextElement: string) => {
    cy.get(element).should(($el) => {
      expect($el.next(nextElement)).to.have.length(1);
    });
  }
);

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
  cy.shouldNotBeVisible('[data-cy="step_1"]');
  cy.shouldNotHaveClasses('[data-cy="cvi-steps__list-item_0"]', [
    'is-past',
    'is-current',
  ]);
  cy.get('[data-cy="cvi-steps__list-item_0"]').click();
  cy.shouldHaveClasses('[data-cy="cvi-steps__list-item_0"]', [
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
    cy.get('cvi-ng-notification').within(() => {
      cy.shouldHaveClasses('[data-cy="notification"]', [
        'cvi-notification',
        `cvi-notification--severity-${type}`,
        `cvi-notification--size-${size}`,
      ]);

      if (showCloseButton) {
        cy.get('[data-cy="notification"]').within(() => {
          cy.shouldHaveClasses('button', 'cvi-notification__close-button');
          cy.get('button').within(() => {
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
        'cvi-notification__inner'
      ).within(() => {
        cy.shouldHaveClasses(
          '[data-cy="content"]',
          'cvi-notification__content'
        );
        if (size === 'compact') {
          if (showIcon) {
            cy.shouldHaveClasses(
              '[data-cy="icon"]',
              'cvi-notification__content-icon-wrapper'
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
            'cvi-notification__header'
          );

          if (showIcon) {
            cy.get('[data-cy="header"]').within(() => {
              cy.shouldHaveClasses(
                '[data-cy="header-icon"]',
                'cvi-notification__header-icon-wrapper'
              ).shouldHaveAttributes('[data-cy="header-icon"]', {
                name: 'ng-reflect-name',
                value: iconName,
              });
            });
          } else {
            cy.shouldNotExist('cvi-ng-labeled-icon');
          }
        }
      });
    });
  }
);

Cypress.Commands.add('runLabeledIconCommonTest', (alignment, iconPosition) => {
  cy.shouldHaveClasses('cvi-ng-labeled-icon', ['cvi-labeled-icon']).within(
    () => {
      cy.shouldHaveCSSVar(
        'cvi-ng-track',
        '--vertical-alignment',
        alignment === 'normal' ? '' : 'center'
      ).within(() => {
        cy.shouldExist('cvi-ng-icon');
        if (iconPosition === 'after') {
          cy.shouldBeLastChild('cvi-ng-icon');
        } else {
          cy.shouldBeFirstChild('cvi-ng-icon');
        }
      });
      cy.shouldHaveClasses('div', 'cvi-labeled-icon__content');
    }
  );
});

Cypress.Commands.add('runButtonCommonTest', (appearance, size) => {
  cy.shouldHaveClasses('cvi-ng-button', [
    'cvi-button',
    `cvi-button--appearance-${appearance}`,
    `cvi-button--size-${size}`,
  ]).shouldHaveClasses('button', 'cvi-button__button');
});

Cypress.Commands.add('runRadioGroupCommonTest', (appearance) => {
  cy.shouldHaveClasses('cvi-ng-radio-group', [
    'cvi-radio-group',
    `cvi-radio-group--appearance-${appearance}`,
  ])
    .shouldHaveClasses('fieldset', 'cvi-radio-group__inner')
    .shouldHaveClasses('legend', 'cvi-radio-group__title')
    .shouldHaveClasses('div', 'cvi-radio-group__list');
});

Cypress.Commands.add('reorderableListItemShouldHaveOrderNr', (orderNr) => {
  cy.get(`[data-cy="step-${orderNr}-order-nr"]`).contains(orderNr);
});

Cypress.Commands.add('reorderableListItemShouldHaveName', (orderNr, name) => {
  cy.get(`[data-cy="step-${orderNr}-name"]`).within(() => {
    cy.get('input').should('have.value', name);
  });
});
