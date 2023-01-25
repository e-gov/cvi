import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'cvi-ng-storybook-type-tester',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./storybook-type-tester.component.scss'],
})
export class StorybookTypeTesterComponent {
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
    return `--size-${this.size}`;
  }
}
