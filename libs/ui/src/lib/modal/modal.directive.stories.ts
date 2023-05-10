import { Story, Meta } from '@storybook/angular';
import notes from './modal.directive.md';

export default {
  title: 'Angular/Modal/Modal directive',
  parameters: { notes },
  args: {
    modalTitle: 'Hey, I am Modal, how are you?',
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  template: `
    <ng-template #modal let-title="title">
      <h2>{{ title }}</h2>
      <p><b>Modal content</b></p>
    </ng-template>
    <cvi-ng-button [cviNgModal]="modal" [modalTitle]="modalTitle">Open modal</cvi-ng-button>
  `,
});

export const Default = Template.bind({});

const TemplateModalOpen: Story = (args) => ({
  props: args,
  template: `
    <ng-template #modal>
      <p><b>Modal content</b></p>
    </ng-template>
    <cvi-ng-button [cviNgModal]="modal" [modalTitle]="modalTitle" [open]="true">Open modal</cvi-ng-button>
  `,
});

export const ModalOpen = TemplateModalOpen.bind({});

const TemplateWithoutTitle: Story = (args) => ({
  props: args,
  template: `
    <ng-template #modal>
      <p><b>Modal content</b></p>
    </ng-template>
    <cvi-ng-button [cviNgModal]="modal" [open]="true">Open modal</cvi-ng-button>
  `,
});

export const WithoutTitle = TemplateWithoutTitle.bind({});
WithoutTitle.argTypes = {
  modalTitle: { control: false },
};
WithoutTitle.parameters = {
  axe: {
    disabledRules: ['aria-dialog-name'],
  },
};

const TemplateModalOpenWithoutButton: Story = (args) => ({
  props: args,
  template: `
    <ng-template #modal>
      <p><b>Modal content</b></p>
    </ng-template>
    <ng-container [cviNgModal]="modal" [modalTitle]="modalTitle" [open]="true"></ng-container>
  `,
});

export const ModalOpenWithoutButton = TemplateModalOpenWithoutButton.bind({});
