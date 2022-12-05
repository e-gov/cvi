import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'veera-ng-content-container',
  template: `<ng-content></ng-content>`,
})
export class ContentContainerComponent {
  @HostBinding('class') get getHostClasses(): string {
    return `veera-content-container`;
  }
}
