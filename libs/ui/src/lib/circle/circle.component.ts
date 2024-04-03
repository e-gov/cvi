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
  /** Only relevant when progressPercentage is undefined */
  @Input() theme: CircleTheme = 'light';

  @Input() severity: CircleSeverity = 'none';
  @Input() size: 'm' | 's' = 's';
  @Input() iconName?: CviIconName = undefined;
  @Input() progressPercentage?: number = undefined;

  @HostBinding('class') get hostClasses(): string {
    return `cvi-circle cvi-circle--size-${this.size} cvi-circle--severity-${this.severity}`;
  }

  @HostBinding('class.cvi-circle--with-progress')
  get hostProgressClass(): boolean {
    return this.progressPercentage !== undefined;
  }

  @HostBinding('style.--border-color')
  get hostStyleBorderColor(): string | null {
    return this.getThemeProperty('--border-color');
  }

  @HostBinding('style.--color')
  get hostStyleColor(): string | null {
    return this.severity === 'none'
      ? this.getThemeProperty('--color')
      : this.getSeverityProperty('--color');
  }

  @HostBinding('style.--background-color')
  get hostStyleBackgroundColor(): string | null {
    return this.severity === 'none'
      ? this.getThemeProperty('--background-color')
      : this.getSeverityProperty('--background-color');
  }

  @HostBinding('style.--progress')
  get hostStyleProgress(): string | null {
    return this.progressPercentage ? this.progressPercentage + '%' : null;
  }

  @HostBinding('style.--progress-background-color')
  get hostStyleProgressBackgroundColor(): string | null {
    return this.getSeverityProperty('--progress-background-color');
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
      const cssValue =
        item.properties[propName as keyof CircleSeverityProperties];
      if (cssValue !== 'transparent') {
        return `var(${cssValue})`;
      } else {
        return 'transparent';
      }
    }
    return null;
  }
}
