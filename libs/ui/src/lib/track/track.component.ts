import { Component, HostBinding, Input } from '@angular/core';
import { Gap } from './track';

@Component({
  selector: 'veera-ng-track',
  templateUrl: './track.component.html',
})
export class TrackComponent {
  /** Gap in multiples of --veera-spacing-unit */
  @HostBinding('style.--gap')
  @Input()
  gap: Gap = 0;

  /** Equivalent of justify-content in CSS */
  @HostBinding('style.--horizontal-alignment')
  get getHostHorizontalAlignment(): string {
    return `
      ${this.horizontalAlignment === 'right' ? 'flex-end' : ''}
      ${this.horizontalAlignment === 'center' ? 'center' : ''}
    `;
  }
  @Input() horizontalAlignment: 'left' | 'center' | 'right' = 'left';

  /** Equivalent of flex-direction in CSS */
  @Input() direction:
    | 'horizontal'
    | 'vertical'
    | 'verticalOnMobile'
    | 'verticalReverseOnMobile' = 'horizontal';

  /** Equivalent of flex-wrap in CSS */
  @HostBinding('style.--wrap') get getHostIsMultiline(): string {
    return this.isMultiline ? 'wrap' : '';
  }
  @Input() isMultiline = false;

  @HostBinding('class') get getHostClasses(): string {
    return `veera-track veera-track--direction-${this.getHostDirection()}`;
  }

  getHostDirection(): string {
    if (this.direction === 'verticalOnMobile') {
      return 'vertical-on-mobile';
    } else if (this.direction === 'verticalReverseOnMobile') {
      return 'vertical-reversed-on-mobile';
    } else {
      return this.direction;
    }
  }
}
