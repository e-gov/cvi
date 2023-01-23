import { Component, Input } from '@angular/core';

@Component({
  selector: 'veera-ng-storybook-color-card',
  templateUrl: './storybook-color-card.component.html',
  styleUrls: ['./storybook-color-card.component.scss'],
})
export class StorybookColorCardComponent {
  @Input() label!: string;
}
