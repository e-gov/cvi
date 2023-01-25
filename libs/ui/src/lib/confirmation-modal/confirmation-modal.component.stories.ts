import { Story, Meta } from '@storybook/angular';
import { ConfirmationModalComponent } from './confirmation-modal.component';

export default {
  title: 'Angular/Modal/Confirmation modal',
  component: ConfirmationModalComponent,
  args: {
    title: 'Attention!!',
    confirmButtonText: 'Confirm',
    cancelButtonText: 'Cancel',
  },
} as Meta<ConfirmationModalComponent>;

const Template: Story<ConfirmationModalComponent> = (
  args: ConfirmationModalComponent
) => ({
  props: args,
  template: `
    <ng-template #modal let-modal>
      <cvi-ng-confirmation-modal [title]="title"
                                   [confirmButtonText]="confirmButtonText"
                                   [cancelButtonText]="cancelButtonText"
                                   (cancelled)="modal.closeModal()"
                                   (confirmed)="modal.closeModal()">
        <p>Are you sure about changes?</p>
        <br><p>All will be lost!!!</p>
      </cvi-ng-confirmation-modal>
    </ng-template>
    <cvi-ng-button [cviNgModal]="modal" dataAttribute="test-button">Open modal</cvi-ng-button>
  `,
});

export const Default = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};

const TemplateModalOpen: Story<ConfirmationModalComponent> = (
  args: ConfirmationModalComponent
) => ({
  props: args,
  template: `
    <ng-template #modal let-modal>
      <cvi-ng-confirmation-modal [title]="title"
                                   [confirmButtonText]="confirmButtonText"
                                   [cancelButtonText]="cancelButtonText"
                                   (cancelled)="modal.closeModal()"
                                   (confirmed)="modal.closeModal()">
        <p>Are you sure about changes?</p>
        <br><p>All will be lost!!!</p>
      </cvi-ng-confirmation-modal>
    </ng-template>
    <cvi-ng-button [cviNgModal]="modal" [open]="true" dataAttribute="test-button">Open modal</cvi-ng-button>
  `,
});

export const ModalOpen = TemplateModalOpen.bind({});
