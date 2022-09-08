import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'veera-ng-storybook-spacing-specimen-item',
  templateUrl: './storybook-spacing-specimen-item.component.html',
})
export class StorybookSpacingSpecimenItem {
  @Input() label!: string;

  @HostBinding('class') get getHostClasses(): string {
    return `c-spacing-specimen__item`;
  }
}
