import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cvi-ng-toast-container',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastContainerComponent {
  @HostBinding('class')
  get hostClasses() {
    return 'cvi-toast-container';
  }
}
