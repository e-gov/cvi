import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { CviIconName } from '@egov/cvi-icons';
import {
  StatusBadgeSeverity,
  StatusBadgeCustomPropertyGroup,
  statusBadgeCustomPropertyGroups,
  StatusBadgeCustomProperties,
} from './status-badge';

@Component({
  selector: 'cvi-ng-status-badge',
  templateUrl: './status-badge.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusBadgeComponent {
  @Input() severity: StatusBadgeSeverity = 'info';
  @Input() label = '';
  @Input() withTooltip = false;
  @Input() tooltipText? = '';
  @Input() tooltipIcon?: CviIconName = 'info';

  @HostBinding('class') get hostClasses(): string {
    return `cvi-status-badge`;
  }
  @HostBinding('style.--color') get hostStyleColor(): string | null {
    return this.getCustomProperty('--color');
  }
  @HostBinding('style.--background-color') get hostStyleBackgroundColor():
    | string
    | null {
    return this.getCustomProperty('--background-color');
  }
  @HostBinding('style.--border-color') get hostStyleBorderColor():
    | string
    | null {
    return this.getCustomProperty('--border-color');
  }

  getCustomProperty(
    propName: keyof StatusBadgeCustomProperties
  ): string | null {
    const item = statusBadgeCustomPropertyGroups.find(
      (group: StatusBadgeCustomPropertyGroup) =>
        group.severity === this.severity
    );
    if (item) {
      return `var(${
        item.customProperties[propName as keyof StatusBadgeCustomProperties]
      })`;
    }
    return null;
  }
}
