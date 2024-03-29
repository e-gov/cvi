import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  Optional,
} from '@angular/core';
import { IconsRegistry } from '../icons-registry.service';
import { DOCUMENT } from '@angular/common';
import { CviIconName } from '@egov/cvi-icons';
import { iconSizeDefault } from './icon';

@Component({
  selector: 'cvi-ng-icon',
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnChanges {
  private svgIcon!: SVGElement;

  /** A class for SVG element */
  @Input() svgClass = '';

  /** Typed icon name */
  @Input()
  name?: CviIconName;

  /** Icon height in px */
  @Input()
  height?: number = iconSizeDefault;

  constructor(
    private element: ElementRef,
    private registry: IconsRegistry,
    @Optional() @Inject(DOCUMENT) private document: any
  ) {}

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    const svg = div.querySelector('svg');
    svg.setAttribute('class', this.svgClass);
    if (this.height) {
      svg.setAttribute('height', `${this.height}px`);
    }
    return (
      svg || this.document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
  }

  ngOnChanges(): void {
    if (!this.name) {
      return;
    }
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.registry.getIcon(this.name);
    if (svgData) {
      this.svgIcon = this.svgElementFromString(svgData);
      this.element.nativeElement.appendChild(this.svgIcon);
    }
  }
}
