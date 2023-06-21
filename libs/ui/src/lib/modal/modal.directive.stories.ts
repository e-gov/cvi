import { StoryFn, Meta } from '@storybook/angular';
import notes from './modal.directive.md';

export default {
  title: 'Angular/Modal/Modal directive',
  parameters: { notes },
  args: {
    modalTitle: 'Hey, I am Modal, how are you?',
  },
} as Meta;

const Template: StoryFn = (args) => ({
  props: args,
  template: `
    <ng-template #modal let-title="title">
      <h2>{{ title }}</h2>
      <p><b>Modal content</b></p>
    </ng-template>
    <cvi-ng-button [cviNgModal]="modal" [modalTitle]="modalTitle">Open modal</cvi-ng-button>
  `,
});

export const Default = {
  render: Template,
};

const TemplateModalOpen: StoryFn = (args) => ({
  props: args,
  template: `
    <ng-template #modal>
      <p><b>Modal content</b></p>
    </ng-template>
    <cvi-ng-button [cviNgModal]="modal" [modalTitle]="modalTitle" [open]="true">Open modal</cvi-ng-button>
  `,
});

export const ModalOpen = {
  render: TemplateModalOpen,
};

const TemplateWithoutTitle: StoryFn = (args) => ({
  props: args,
  template: `
    <ng-template #modal>
      <p><b>Modal content</b></p>
    </ng-template>
    <cvi-ng-button [cviNgModal]="modal" [open]="true">Open modal</cvi-ng-button>
  `,
});

export const WithoutTitle = {
  render: TemplateWithoutTitle,

  argTypes: {
    modalTitle: { control: false },
  },

  parameters: {
    axe: {
      disabledRules: ['aria-dialog-name'],
    },
  },
};

const TemplateModalOpenWithoutButton: StoryFn = (args) => ({
  props: args,
  template: `
    <ng-template #modal>
      <p><b>Modal content</b></p>
    </ng-template>
    <ng-container [cviNgModal]="modal" [modalTitle]="modalTitle" [open]="true"></ng-container>
  `,
});

export const ModalOpenWithoutButton = {
  render: TemplateModalOpenWithoutButton,
};
