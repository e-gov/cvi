import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'veera-ng-storybook-type-tester',
  template: `<ng-content></ng-content>`,
})
export class StorybookTypeTester {
  @Input() size:
    | '50'
    | '70'
    | '80'
    | '100'
    | '200'
    | '220'
    | '250'
    | '300'
    | '350'
    | '400'
    | '500' = '100';
  @HostBinding('class') get getHostClasses(): string {
    return `c-type-tester c-type-tester--size-${this.size}`;
  }
}
