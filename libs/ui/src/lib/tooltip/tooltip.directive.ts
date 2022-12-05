import {
  ComponentRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Inject,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TooltipComponent } from './tooltip.component';

@Directive({
  selector: '[veeraNgTooltip]',
  exportAs: 'veeraNgTooltip',
})
export class TooltipDirective {
  @Input() veeraNgTooltip = '';

  private componentRef: ComponentRef<TooltipComponent> | null = null;

  constructor(
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.componentRef === null) {
      this.componentRef =
        this.viewContainerRef.createComponent(TooltipComponent);
      this.setTooltipComponentProperties();
      const domElement = (this.componentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0];
      this.document.body.appendChild(domElement);
    }
  }

  private setTooltipComponentProperties() {
    if (this.componentRef !== null) {
      this.componentRef.instance.message = this.veeraNgTooltip;
      const { left, right, top } =
        this.elementRef.nativeElement.getBoundingClientRect();
      this.componentRef.instance.left = (right - left) / 2 + left;
      this.componentRef.instance.top = top;
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.componentRef !== null) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
