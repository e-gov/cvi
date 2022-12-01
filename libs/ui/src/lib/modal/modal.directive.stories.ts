import { Story, Meta } from '@storybook/angular';
import notes from './modal.directive.md';

export default {
  title: 'Angular/Modal/Modal directive',
  parameters: { notes },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  template: `
    <ng-template #modal>
      <p><b>Modal content</b></p>
    </ng-template>
    <veera-ng-button [veeraNgModal]="modal">Open modal</veera-ng-button>
  `,
});

export const Default = Template.bind({});

const TemplateModalOpen: Story = (args) => ({
  props: args,
  template: `
    <ng-template #modal>
      <p><b>Modal content</b></p>
    </ng-template>
    <veera-ng-button [veeraNgModal]="modal" [open]="true">Open modal</veera-ng-button>
  `,
});

export const ModalOpen = TemplateModalOpen.bind({});

const TemplateModalOpenWithoutButton: Story = (args) => ({
  props: args,
  template: `
    <ng-template #modal>
      <p><b>Modal content</b></p>
    </ng-template>
    <ng-container [veeraNgModal]="modal" [open]="true"></ng-container>
  `,
});

export const ModalOpenWithoutButton = TemplateModalOpenWithoutButton.bind({});
