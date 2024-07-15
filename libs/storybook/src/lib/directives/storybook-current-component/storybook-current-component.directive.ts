import {
  Renderer2,
  ElementRef,
  Directive,
  AfterViewInit,
  Input,
} from '@angular/core';

@Directive({
  selector: '[cviNgStorybookCurrentComponent]',
})
export class StorybookCurrentComponentDirective implements AfterViewInit {
  @Input('cviNgStorybookCurrentComponent') type!: 'cover' | 'spot';

  private baseClass = 'u-storybook-current-component';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.renderer.addClass(this.el.nativeElement, this.baseClass);
    this.renderer.addClass(
      this.el.nativeElement,
      `${this.baseClass}--type-${this.type ? this.type : 'cover'}`
    );
  }
}
