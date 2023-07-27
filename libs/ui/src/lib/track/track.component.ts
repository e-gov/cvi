import { Component, HostBinding, Input } from '@angular/core';
import { Gap } from './track';

@Component({
  selector: 'cvi-ng-track',
  templateUrl: './track.component.html',
})
export class TrackComponent {
  /** Gap in multiples of --cvi-spacing-unit */
  @HostBinding('style.--gap')
  @Input()
  gap: Gap = 0;
  @Input()
  layout: 'flex' | 'grid' = 'flex';
  /** All items in a row have same width. Only applicable if layout=flex */
  @Input()
  flexColumnsEqual = false;
  /** Only applicable if layout=grid */
  @HostBinding('style.--rows') get hostCSSPropGridRows(): string | null {
    return this.gridRows ? `${this.gridRows}` : null;
  }
  @Input()
  gridRows!: number;

  /** Equivalent of justify-content in CSS */
  @HostBinding('style.--horizontal-alignment')
  get hostCSSPropHorizontalAlignment(): string | null {
    return this.horizontalAlignment
      ? `
      ${this.horizontalAlignment === 'normal' ? 'normal' : ''}
      ${this.horizontalAlignment === 'left' ? 'flex-start' : ''}
      ${this.horizontalAlignment === 'right' ? 'flex-end' : ''}
      ${this.horizontalAlignment === 'center' ? 'center' : ''}
      ${this.horizontalAlignment === 'justify' ? 'space-between' : ''}
    `
      : null;
  }
  @Input() horizontalAlignment:
    | 'normal'
    | 'left'
    | 'center'
    | 'right'
    | 'justify' = 'normal';

  /** Equivalent of align-items in CSS */
  @HostBinding('style.--vertical-alignment')
  get hostCSSPropVerticalAlignment(): string | null {
    return this.verticalAlignment !== 'normal'
      ? `
      ${this.verticalAlignment === 'top' ? 'flex-start' : ''}
      ${this.verticalAlignment === 'center' ? 'center' : ''}
      ${this.verticalAlignment === 'bottom' ? 'flex-end' : ''}
    `
      : null;
  }
  @Input() verticalAlignment: 'normal' | 'top' | 'center' | 'bottom' = 'normal';

  /** Only applicable if layout=flex */
  @Input() flexDirection:
    | 'horizontal'
    | 'vertical'
    | 'verticalOnMobile'
    | 'verticalReverseOnMobile' = 'horizontal';

  /** Only applicable if layout=flex. Equivalent of flex-wrap in CSS */
  @HostBinding('style.--wrap') get hostCSSPropIsMultiline(): string | null {
    return this.layout === 'flex' && this.flexIsMultiline ? 'wrap' : null;
  }
  @Input() flexIsMultiline = false;

  @HostBinding('class') get hostClasses(): string {
    return `cvi-track cvi-track--direction-${this.getHostDirection()}${
      this.layout === 'grid'
        ? ' cvi-track--layout-grid'
        : ' cvi-track--layout-flex'
    }${this.flexColumnsEqual ? ' cvi-track--items-have-equal-width' : ''}${
      this.gridRows ? ' cvi-track--has-rows' : ''
    }`;
  }

  getHostDirection(): string {
    if (this.flexDirection === 'verticalOnMobile') {
      return 'vertical-on-mobile';
    } else if (this.flexDirection === 'verticalReverseOnMobile') {
      return 'vertical-reversed-on-mobile';
    } else {
      return this.flexDirection;
    }
  }
}
