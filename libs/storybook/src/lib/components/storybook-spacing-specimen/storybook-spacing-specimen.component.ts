import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'veera-ng-storybook-spacing-specimen',
  template: `<ng-content></ng-content>`,
})
export class StorybookSpacingSpecimen {
  @HostBinding('class') get getHostClasses(): string {
    return `c-spacing-specimen`;
  }
}
