import {
  Directive,
  ElementRef,
  Inject,
  InjectionToken,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

export const DATA_ATTRIBUTE_TOKEN = new InjectionToken<string>(
  'DATA_ATTRIBUTE_TOKEN',
  {
    providedIn: 'root',
    factory: () => 'cy',
  }
);

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[dataAttribute]',
})
export class DataAttributeDirective implements OnInit {
  @Input('dataAttribute') value = '';

  constructor(
    @Inject(DATA_ATTRIBUTE_TOKEN) private readonly token: string,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.renderer.setAttribute(
      this.el.nativeElement,
      `data-${this.token}`,
      this.value
    );
  }
}
