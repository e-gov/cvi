import { Story, Meta } from '@storybook/angular';
import { ModalComponent } from './modal.component';

export default {
  title: 'Angular/Modal/Modal',
  component: ModalComponent,
} as Meta<ModalComponent>;

const Template: Story<ModalComponent> = (args: ModalComponent) => ({
  props: args,
  template: `
    <ng-template #modal let-testModalTitle="title">
      <h1>{{ testModalTitle }}</h1>
      <p dataAttribute="test-content">Modal content</p>
    </ng-template>
    <cvi-ng-button [cviNgModal]="modal" modalTitle="Some title" dataAttribute="test-button">Open modal</cvi-ng-button>
  `,
});

export const Default = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};

const TemplateWithModalInsideModal: Story<ModalComponent> = (
  args: ModalComponent
) => ({
  props: args,
  template: `
    <ng-template #modal1>
      <p>Modal 1 content</p>
      <ng-template #modal2 let-testModalTitle="title">
        <h1>{{ testModalTitle }}</h1>
        <p>Modal 2 content</p>
      </ng-template>
      <cvi-ng-button [cviNgModal]="modal2" modalTitle="Some title for the inner modal">Open modal 2 inside modal 1</cvi-ng-button>
    </ng-template>
    <cvi-ng-button [cviNgModal]="modal1">Open modal</cvi-ng-button>
  `,
});

export const WithModalInsideModal = TemplateWithModalInsideModal.bind({});
