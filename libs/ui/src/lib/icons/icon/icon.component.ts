import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  Optional,
} from '@angular/core';
import { IconsRegistry } from '../icons-registry.service';
import { DOCUMENT } from '@angular/common';
import { VeeraIconName } from '@ria/veera-icons';

@Component({
  selector: 'veera-ng-icon',
  templateUrl: './icon.component.html',
  styles: [':host::ng-deep svg{width: 24px; height: 24px}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  private svgIcon!: SVGElement;

  /** A class for SVG element */
  @Input() svgClass = '';

  /** Icon name */
  @Input()
  set name(iconName: VeeraIconName) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.registry.getIcon(iconName);
    if (svgData) {
      this.svgIcon = this.svgElementFromString(svgData);
      this.element.nativeElement.appendChild(this.svgIcon);
    }
  }

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
    return (
      svg || this.document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
  }
}
