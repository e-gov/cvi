import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cvi-ng-content-container',
  template: `<ng-content></ng-content>`,
})
export class ContentContainerComponent {
  @HostBinding('class') get getHostClasses(): string {
    return `cvi-content-container`;
  }
}
