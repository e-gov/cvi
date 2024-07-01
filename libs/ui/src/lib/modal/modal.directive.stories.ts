import { Meta } from '@storybook/angular';
import notes from './modal.directive.md?raw';

export default {
  title: 'Angular/Modal/Modal directive',
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {
    modalOpen: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    modalTitle: 'Hey, I am Modal, how are you?',
    modalOpen: false,
  },
} as Meta;

export const Default = {
  render: (args: unknown) => ({
    props: args,
    /* template */
    template: `
      <ng-template #modal let-testModalTitle="title">
        <h2 *ngIf="testModalTitle">{{ testModalTitle }}</h2>
        <p>Modal content</p>
      </ng-template>
      <cvi-ng-button [cviNgModal]="modal" [modalTitle]="modalTitle" [open]="modalOpen">Open modal</cvi-ng-button>
    `,
  }),
};

export const ModalOpen = {
  ...Default,
  args: {
    modalOpen: true,
  },
};

export const WithoutTitle = {
  ...Default,
  args: {
    modalTitle: '',
  },
  parameters: {
    axe: {
      disabledRules: ['aria-dialog-name'],
    },
  },
};

export const ModalOpenWithoutButton = {
  render: (args: unknown) => ({
    props: args,
    /* template */
    template: `
      <ng-template #modal>
        <p>Modal content</p>
      </ng-template>
      <ng-container [cviNgModal]="modal" [open]="true"></ng-container>
    `,
  }),
  parameters: {
    axe: {
      disabledRules: ['aria-dialog-name'],
    },
  },
};
