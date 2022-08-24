import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ria-poc-storybook-color-card',
  templateUrl: './storybook-color-card.component.html',
})
export class StorybookColorCard {
  @Input() label!: string;

  @HostBinding('class') get getHostClasses(): string {
    return `c-color-cards__item`;
  }
}
