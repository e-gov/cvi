import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ToastService } from './toast.service';
import notes from './toast.service.md';
import { Component } from '@angular/core';

@Component({
  selector: 'veera-ng-storybook-toast-wrapper',
  template: `
    <veera-ng-track [gap]="4">
      <veera-ng-button (click)="openSuccessToast()"
        >Open Success Toast</veera-ng-button
      >
      <veera-ng-button (click)="openInfoToast()"
        >Open Info Toast</veera-ng-button
      >
      <veera-ng-button (click)="openWarningToast()"
        >Open Warning Toast</veera-ng-button
      >
      <veera-ng-button (click)="openErrorToast()"
        >Open Error Toast</veera-ng-button
      >
    </veera-ng-track>
  `,
})
class ToastWrapperComponent {
  constructor(private toastService: ToastService) {}

  openSuccessToast() {
    this.toastService.success('Success Title', 'Message');
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
    <veera-ng-storybook-toast-wrapper></veera-ng-storybook-toast-wrapper>
  `,
});
export const Default = Template.bind({});
