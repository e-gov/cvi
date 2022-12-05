import { Story, Meta } from '@storybook/angular';
import { ModalComponent } from './modal.component';

export default {
  title: 'Angular/Modal/Modal',
  component: ModalComponent,
} as Meta<ModalComponent>;

const Template: Story<ModalComponent> = (args: ModalComponent) => ({
  props: args,
  template: `
    <ng-template #modal>
      <p>Modal content</p>
    </ng-template>
    <veera-ng-button [veeraNgModal]="modal">Open modal</veera-ng-button>
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
      <ng-template #modal2>
        <p>Modal 2 content</p>
      </ng-template>
      <veera-ng-button [veeraNgModal]="modal2">Open modal 2 inside modal 1</veera-ng-button>
    </ng-template>
    <veera-ng-button [veeraNgModal]="modal1">Open modal</veera-ng-button>
  `,
});

export const WithModalInsideModal = TemplateWithModalInsideModal.bind({});
