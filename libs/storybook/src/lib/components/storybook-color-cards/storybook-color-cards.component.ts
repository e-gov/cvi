import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'veera-ng-storybook-color-cards',
  template: `<ng-content></ng-content>`,
})
export class StorybookColorCards {
  @HostBinding('class') get getHostClasses(): string {
    return `c-color-cards`;
  }
}
