import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

import {
  ProgressBarSeverityProperties,
  ProgressBarSeverityPropertyGroup,
  progressBarSeverityPropertyGroups,
  ProgressBarTheme,
  ProgressBarThemeProperties,
  ProgressBarThemePropertyGroup,
  progressThemePropertyGroups,
} from './progress-bar';

@Component({
  selector: 'cvi-ng-progress-bar',
  templateUrl: './progress-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent {
  @Input() size: 'm' | 's' = 's';

  @Input() progressValueMin?: number = 0;
  @Input() progressValueMax?: number = 3;
  @Input() progressValue?: number = 0;

  @Input() progressMessage?: string = 'Lõpetatud tegevused:';
  @Input() successMessage?: string = 'Kõik tegevused lõpetatud';

  @Input() layout = 'grid' as const;
  @Input() verticalAlignement = 'center' as const;
  @Input() statusAlignement = 'center' as const;

  private severity?: 'none' | 'success' = undefined;
  private theme: ProgressBarTheme = 'dark';

  @HostBinding('class') get hostClasses(): string {
    return `cvi-progress-bar cvi-progress-bar--size-${this.size}`;
  }

  @HostBinding('class.cvi-progress-bar--with-progress')
  get hostProgressClass(): boolean {
    return true;
  }

  @HostBinding('style.--progress')
  get progress(): string {
    const percentage = this.getProgressPercentage(
      this.progressValueMin,
      this.progressValueMax,
      this.progressValue
    );
    return `${percentage}%`;
  }

  @HostBinding('style.--progress-finished')
  get progressFinished(): boolean {
    return this.progressValue === this.progressValueMax;
  }

  @HostBinding('style.--progress-background-color')
  get hostStyleProgressBackgroundColor(): string | null {
    return this.getBackgroundProperty('--progress-background-color');
  }

  @HostBinding('style.--border-color')
  get hostStyleBorderColor(): string | null {
    return this.getThemeProperty('--border-color');
  }

  @HostBinding('style.--color')
  get hostStyleColor(): string | null {
    return this.severity === 'none'
      ? this.getThemeProperty('--color')
      : this.getBackgroundProperty('--color');
  }

  getProgressPercentage(
    minValue = 0,
    maxValue = 100,
    currentValue = 0
  ): number {
    if (currentValue <= minValue) return 0;
    if (currentValue > maxValue) return 100;

    const progress = ((currentValue - minValue) / (maxValue - minValue)) * 100;
    return Math.round(progress);
  }

  getThemeProperty(propName: keyof ProgressBarThemeProperties): string | null {
    const item = progressThemePropertyGroups.find(
      (group: ProgressBarThemePropertyGroup) => group.theme === this.theme
    );
    if (item) {
      return `var(${item.properties[propName as keyof ProgressBarThemeProperties]})`;
    }
    return null;
  }

  getBackgroundProperty(
    propName: keyof ProgressBarSeverityProperties
  ): string | null {
    const item = progressBarSeverityPropertyGroups.find(
      (group: ProgressBarSeverityPropertyGroup) =>
        group.severity === this.severity
    );
    if (item) {
      const cssValue =
        item.properties[propName as keyof ProgressBarSeverityProperties];
      if (cssValue !== 'transparent') {
        return `var(${cssValue})`;
      } else {
        return 'transparent';
      }
    }
    return null;
  }
}
