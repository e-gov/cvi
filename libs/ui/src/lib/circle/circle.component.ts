import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import {
  CircleSeverity,
  CircleSeverityProperties,
  CircleSeverityPropertyGroup,
  circleSeverityPropertyGroups,
  CircleTheme,
  CircleThemeProperties,
  CircleThemePropertyGroup,
  circleThemePropertyGroups,
} from './circle';
import { CviIconName } from '@egov/cvi-icons';

@Component({
  selector: 'cvi-ng-circle',
  templateUrl: './circle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleComponent {
  @Input() theme: CircleTheme = 'light';
  @Input() severity: CircleSeverity = 'none';
  @Input() iconName?: CviIconName = undefined;
  @Input() progressPercentage?: number = undefined;

  @HostBinding('class') get hostClasses(): string {
    return `cvi-circle`;
  }
  @HostBinding('style.--border-color') get hostStyleBorderColor():
    | string
    | null {
    return this.getThemeProperty('--border-color');
  }
  @HostBinding('style.--color') get hostStyleColor(): string | null {
    return this.getThemeProperty('--color');
  }
  @HostBinding('style.--background-color') get hostStyleBackgroundColor():
    | string
    | null {
    return this.getSeverityProperty('--background-color');
  }

  getThemeProperty(propName: keyof CircleThemeProperties): string | null {
    const item = circleThemePropertyGroups.find(
      (group: CircleThemePropertyGroup) => group.theme === this.theme
    );
    if (item) {
      return `var(${item.properties[propName as keyof CircleThemeProperties]})`;
    }
    return null;
  }

  getSeverityProperty(propName: keyof CircleSeverityProperties): string | null {
    const item = circleSeverityPropertyGroups.find(
      (group: CircleSeverityPropertyGroup) => group.severity === this.severity
    );
    if (item) {
      return `var(${
        item.properties[propName as keyof CircleSeverityProperties]
      })`;
    }
    return null;
  }
}
