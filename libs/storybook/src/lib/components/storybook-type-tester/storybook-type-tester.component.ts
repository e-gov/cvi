import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'veera-ng-storybook-type-tester',
  template: `<ng-content></ng-content>`,
})
export class StorybookTypeTester {
  @Input() size: 'base' | 'xs' | 'sm' | 'lg' | 'xl' | 'xxl' | 'xxxl' = 'base';
  @HostBinding('class') get getHostClasses(): string {
    return `c-type-tester c-type-tester--size-${this.size}`;
  }
}
