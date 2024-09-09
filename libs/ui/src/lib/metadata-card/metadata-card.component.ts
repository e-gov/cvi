import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import {
  MetadataCardCustomProperties,
  MetadataCardCustomPropertyGroup,
  metadataCardCustomPropertyGroups,
  MetadataCardSeverity,
} from './metadata-card';

@Component({
  selector: 'cvi-ng-metadata-card',
  templateUrl: './metadata-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetadataCardComponent {
  @Input() severity: MetadataCardSeverity = 'info';

  @HostBinding('style.--cvi-metadata-card-left-border-color') get hostStyleLeftBorderColor():
    | string
    | null {
    return this.getCustomProperty('--cvi-metadata-card-left-border-color');
  }

  getCustomProperty(
    propName: keyof MetadataCardCustomProperties
  ): string | null {
    const item = metadataCardCustomPropertyGroups.find(
      (group: MetadataCardCustomPropertyGroup) =>
        group.severity === this.severity
    );
    if (item) {
      return `var(${
        item.customProperties[propName as keyof MetadataCardCustomProperties]
      })`;
    }
    return null;
  }
}
