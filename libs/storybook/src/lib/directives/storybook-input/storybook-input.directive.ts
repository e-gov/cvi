import { Renderer2, ElementRef, Directive, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[cviNgStorybookInput]',
})
export class StorybookInputDirective implements AfterViewInit {
  private baseClass = 'u-storybook-input';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.addClass(this.el.nativeElement, this.baseClass);
  }
}
