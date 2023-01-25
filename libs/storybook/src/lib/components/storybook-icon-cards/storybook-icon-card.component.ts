import { Component, Input } from '@angular/core';

@Component({
  selector: 'cvi-ng-storybook-icon-card',
  templateUrl: './storybook-icon-card.component.html',
  styleUrls: ['./storybook-icon-card.component.scss'],
})
export class StorybookIconCardComponent {
  @Input() label!: string;
}
