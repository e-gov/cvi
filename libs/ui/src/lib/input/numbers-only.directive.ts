import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[cviNgNumbersOnly]',
})
export class NumbersOnlyDirective {
  @Input() cviNgNumbersOnly = false;
  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    if (this.cviNgNumbersOnly) {
      this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^0-9]/g, '');
    }
  }
  ngOnInit() {
    this.applyChanges();
  }

  ngOnChanges() {
    this.applyChanges();
  }

  private applyChanges() {
    if (this.cviNgNumbersOnly) {
      this.el.nativeElement.setAttribute('inputmode', 'numeric');
      this.el.nativeElement.setAttribute('pattern', '[0-9]*');
    } else {
      this.el.nativeElement.removeAttribute('inputmode');
      this.el.nativeElement.removeAttribute('pattern');
    }
  }
}
