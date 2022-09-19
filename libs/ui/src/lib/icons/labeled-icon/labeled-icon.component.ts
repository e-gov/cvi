import { Component, HostBinding, Input } from '@angular/core';
import { IconName } from '../icon-name';

@Component({
  selector: 'veera-ng-labeled-icon',
  templateUrl: './labeled-icon.component.html',
})
export class LabeledIconComponent {
  @Input() name!: IconName;

  @HostBinding('class') get getHostClasses(): string {
    return 'veera-labeled-icon';
  }

  getIconName(): string {
    return `./Icons/${this.name}.svg`;
  }
}
