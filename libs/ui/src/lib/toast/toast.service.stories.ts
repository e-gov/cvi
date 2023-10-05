import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ToastService } from './toast.service';
import notes from './toast.service.md';
import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'cvi-ng-storybook-toast-wrapper',
  template: `
    <cvi-ng-track [gap]="4" *ngIf="showButtons">
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
class ToastWrapperComponent implements AfterViewInit {
  @Input() showButtons = true;
  constructor(private toastService: ToastService) {}

  ngAfterViewInit() {
    if (!this.showButtons) {
      this.toastService.info(
        'Default Title which is quite darn long',
        'Default message. Long unbreakable string: 6516949e9bbc0e07ddbaa7283d558cf1'
      );
    }
  }

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
    this.toastService.error(
      'Error Title',
      'Message. Long unbreakable string: 6516949e9bbc0e07ddbaa7283d558cf1'
    );
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

const TemplateOpenOnLoad: Story = (args) => ({
  props: {
    ...args,
  },
  template: `
    <cvi-ng-storybook-toast-wrapper [showButtons]="false"></cvi-ng-storybook-toast-wrapper>
  `,
});
export const OpenOnLoad = TemplateOpenOnLoad.bind({});
OpenOnLoad.parameters = {
  chromatic: { delay: 1000 },
};
