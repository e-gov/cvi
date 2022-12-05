import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'veera-ng-storybook-icon-cards',
  template: `<ng-content></ng-content>`,
})
export class StorybookIconCards {
  @HostBinding('class') get getHostClasses(): string {
    return `c-icon-cards`;
  }
}
