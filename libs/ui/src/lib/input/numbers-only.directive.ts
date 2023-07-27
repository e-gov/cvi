import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[numbersOnly]',
})
export class AllowOnlyNumbersDirective {
  @Input() numbersOnly = false;
  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    if (this.numbersOnly) {
      this.el.nativeElement.value = this.el.nativeElement.value.replace(
        /[^0-9]/g,
        ''
      );
    }
  }
}
