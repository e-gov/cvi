import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ToastService } from './toast.service';
import notes from './toast.service.md';
import { Component } from '@angular/core';

@Component({
  selector: 'cvi-ng-storybook-toast-wrapper',
  template: `
    <cvi-ng-track [gap]="4">
      <cvi-ng-button
        (click)="openSuccessToast()"
        dataAttribute="test-success-toast-button"
        >Open Success Toast</cvi-ng-button
      >
      <cvi-ng-button (click)="openInfoToast()">Open Info Toast</cvi-ng-button>
      <cvi-ng-button (click)="openWarningToast()"
        >Open Warning Toast</cvi-ng-button
      >
      <cvi-ng-button (click)="openErrorToast()">Open Error Toast</cvi-ng-button>
    </cvi-ng-track>
  `,
})
class ToastWrapperComponent {
  constructor(private toastService: ToastService) {}

  openSuccessToast() {
    this.toastService.success(
      'Success Title with a lot of text that does not fit',
      'Message'
    );
  }

  openInfoToast() {
    this.toastService.info('Info Title', 'Message');
  }

  openWarningToast() {
    this.toastService.warning('Warning Title', 'Message');
  }

  openErrorToast() {
    this.toastService.error('Error Title', 'Message');
  }
}

export default {
  title: 'Angular/Toast',
  component: ToastWrapperComponent,
  parameters: { notes },
  decorators: [
    moduleMetadata({
      declarations: [ToastWrapperComponent],
    }),
  ],
  argTypes: {},
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
  },
  template: `
    <cvi-ng-storybook-toast-wrapper></cvi-ng-storybook-toast-wrapper>
  `,
});
export const Default = Template.bind({});
