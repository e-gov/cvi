import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'veera-ng-storybook-icon-card',
  templateUrl: './storybook-icon-card.component.html',
})
export class StorybookIconCard {
  @Input() label!: string;

  @HostBinding('class') get getHostClasses(): string {
    return `c-icon-cards__item`;
  }
}
