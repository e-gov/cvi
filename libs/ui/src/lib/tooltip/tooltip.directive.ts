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
  selector: '[cviNgTooltip]',
  exportAs: 'cviNgTooltip',
})
export class TooltipDirective {
  @Input() cviNgTooltip = '';

  @Input() tooltipRight = 0;

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
      const domElement = (this.componentRef.hostView as EmbeddedViewRef<never>)
        .rootNodes[0];
      this.document.body.appendChild(domElement);
      setTimeout(() => this.reposition(), 0);
    }
  }

  private setTooltipOutOfView() {
    const coordinateOutOfView = -500;
    if (this.componentRef !== null) {
      this.componentRef.instance.left = coordinateOutOfView;
      this.componentRef.instance.top = coordinateOutOfView;
      this.componentRef.instance.arrowLeft = coordinateOutOfView;
      this.componentRef.instance.arrowTop = coordinateOutOfView;
    }
  }

  private setTooltipComponentProperties() {
    if (this.componentRef !== null) {
      this.componentRef.instance.message = this.cviNgTooltip;
      this.setTooltipOutOfView();
    }
  }

  private reposition() {
    const { left, right, top } =
      this.elementRef.nativeElement.getBoundingClientRect();
    const elementCenter = (right + left) / 2;
    const arrowModifierToCompensateRoundedEdges = 5.5;
    const halfOfArrowWidth = 7.5;
    const minimumDistanceFromWindowEdge = 15;

    if (
      this.componentRef?.location.nativeElement.children[0].getBoundingClientRect() !==
      undefined
    ) {
      const { width, height } =
        this.componentRef.location.nativeElement.children[0].getBoundingClientRect();

      let tooltipPositionX;
      let tooltipPositionY;
      let tooltipArrowPositionX;
      let tooltipArrowPositionY;

      // Checks if the tooltip element is too close to the left window edge
      if (elementCenter < width / 2) {
        tooltipPositionX = minimumDistanceFromWindowEdge;
        tooltipPositionY = top - height - halfOfArrowWidth * 2;
        tooltipArrowPositionX =
          left - halfOfArrowWidth + arrowModifierToCompensateRoundedEdges;
        tooltipArrowPositionY = top - halfOfArrowWidth * 3;
      }
      // Checks if the tooltip element is too close to the right window edge
      else if (this.document.body.clientWidth - elementCenter < width / 2) {
        tooltipPositionX =
          this.document.body.getBoundingClientRect().width -
          width -
          minimumDistanceFromWindowEdge;
        tooltipPositionY = top - height - halfOfArrowWidth * 2;
        tooltipArrowPositionX =
          -width +
          right +
          width -
          halfOfArrowWidth -
          arrowModifierToCompensateRoundedEdges;
        tooltipArrowPositionY = top - halfOfArrowWidth * 3;
      } else {
        tooltipPositionX = right - width * 0.5 - (right - left) / 2;
        tooltipPositionY = top - height - halfOfArrowWidth * 2;
        tooltipArrowPositionX =
          right -
          width * 0.5 -
          (right - left) / 2 +
          (width / 2 - halfOfArrowWidth);
        tooltipArrowPositionY = top - halfOfArrowWidth * 3;
      }

      this.componentRef.instance.left = tooltipPositionX + this.tooltipRight;
      this.componentRef.instance.top = tooltipPositionY;
      this.componentRef.instance.arrowLeft = tooltipArrowPositionX + this.tooltipRight;
      this.componentRef.instance.arrowTop = tooltipArrowPositionY;
      this.componentRef.changeDetectorRef.detectChanges();
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.DestroyComponent();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.DestroyComponent();
  }

  private DestroyComponent() {
    if (this.componentRef !== null) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  @HostListener('click', ['$event'])
  onMouseClick(event: Event) {
    event?.stopPropagation();
  }
}
