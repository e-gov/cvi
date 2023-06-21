import { StoryFn, Meta } from '@storybook/angular';
import { ConfirmationModalComponent } from './confirmation-modal.component';

export default {
  title: 'Angular/Modal/Confirmation modal',
  component: ConfirmationModalComponent,
  args: {
    modalTitle: 'Attention!!',
    confirmButtonText: 'Confirm',
    cancelButtonText: 'Cancel',
  },
} as Meta<ConfirmationModalComponent>;

const Template: StoryFn<ConfirmationModalComponent> = (
  args: ConfirmationModalComponent
) => ({
  props: args,
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
    <cvi-ng-button [cviNgModal]="modal" [modalTitle]="modalTitle" dataAttribute="test-button">Open modal</cvi-ng-button>
  `,
});

export const Default = {
  render: Template,
};

export const Mobile = {
  render: Template,

  parameters: {
    viewport: {
      defaultViewport: 'iphone12mini',
    },
  },
};

const TemplateModalOpen: StoryFn<ConfirmationModalComponent> = (
  args: ConfirmationModalComponent
) => ({
  props: args,
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
    <cvi-ng-button [cviNgModal]="modal" [modalTitle]="modalTitle" [open]="true" dataAttribute="test-button">Open modal</cvi-ng-button>
  `,
});

export const ModalOpen = {
  render: TemplateModalOpen,
};
