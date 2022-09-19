import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconName } from '../constants';

@Component({
  selector: 'veera-ng-icon',
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() name!: IconName;

  /** A class for SVG element */
  @Input() svgClass = '';

  getIconName(): string {
    return `./Icons/${this.name}.svg`;
  }
}
