import { Meta } from '@storybook/angular';
import { ConfirmationModalComponent } from './confirmation-modal.component';

export default {
  title: 'Angular/Modal/Confirmation modal',
  component: ConfirmationModalComponent,
  argTypes: {
    content: {
      name: 'Open',
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Playground',
      },
    },
  },
  args: {
    modalTitle: 'Attention!!',
    confirmButtonText: 'Confirm',
    cancelButtonText: 'Cancel',
    open: false,
    closeable: true,
  },
} as Meta<ConfirmationModalComponent>;

export const Default = {
  render: (args: ConfirmationModalComponent) => ({
    props: args,
    /* template */
    template: `
      <ng-template #modal let-modal let-title="title">
        <cvi-ng-confirmation-modal [title]="title"
                                   [confirmButtonText]="confirmButtonText"
                                   [cancelButtonText]="cancelButtonText"
                                   (cancelled)="modal.closeModal()"
                                   (confirmed)="modal.closeModal()">
          <p>Are you sure about changes?</p>
          <br><p>All will be lost!!!</p>
        </cvi-ng-confirmation-modal>
      </ng-template>
      <cvi-ng-button [cviNgModal]="modal" [modalTitle]="modalTitle" [open]="open" [closeable]="closeable" dataAttribute="test-button">Open modal</cvi-ng-button>
    `,
  }),
};

export const ModalOpen = {
  ...Default,
  args: {
    open: true,
  },
};

export const Mobile = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12mini',
    },
  },
};
