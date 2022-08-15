import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ria-poc-storybook-color-cards',
  template: `<ng-content></ng-content>`,
})
export class StorybookColorCards {
  @HostBinding('class') get getHostClasses(): string {
    return `c-color-cards`;
  }
}
