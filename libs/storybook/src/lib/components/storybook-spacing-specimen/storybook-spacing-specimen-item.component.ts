import { Component, Input } from '@angular/core';

@Component({
  selector: 'veera-ng-storybook-spacing-specimen-item',
  templateUrl: './storybook-spacing-specimen-item.component.html',
  styleUrls: ['./storybook-spacing-specimen-item.component.scss'],
})
export class StorybookSpacingSpecimenItemComponent {
  @Input() label!: string;
}
