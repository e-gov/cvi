import {
  ChangeDetectionStrategy,
  Component, ElementRef,
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

  @HostBinding('class.cvi-circle__with-progress')
  get hostProgressClass(): boolean {
    return this.progressPercentage !== undefined;
  }

  @HostBinding('style.--border-color') get hostStyleBorderColor(): string | null {
    const customValue = this.el.nativeElement.style.getPropertyValue('--border-color');
    return this.getThemeProperty('--border-color', customValue);
  }

  @HostBinding('style.--color') get hostStyleColor(): string | null {
    const customValue = this.el.nativeElement.style.getPropertyValue('--color');
    return this.getThemeProperty('--color', customValue);
  }

  @HostBinding('style.--background-color') get hostStyleBackgroundColor(): string | null {
    return this.getSeverityProperty('--background-color');
  }

  @HostBinding('style.--progress') get hostStyleProgress(): string | null {
    return this.progressPercentage ? this.progressPercentage + '%' : null;
  }

  @HostBinding('style.--progress-background-color') get hostStyleProgressBackgroundColor(): string | null {
    return this.getSeverityProperty('--progress-background-color');
  }

  constructor(private el: ElementRef) {
  }

  getThemeProperty(propName: keyof CircleThemeProperties, customValue?: string): string | null {
    if (customValue) {
      return `var(${customValue})`;
    }
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
