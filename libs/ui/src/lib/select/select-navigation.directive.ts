import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[cviNgSelectNavigation]',
})
export class SelectNavigationDirective {
  @Input() scrollableEl?: HTMLElement;
  @Input() inputField?: HTMLInputElement | ElementRef<HTMLInputElement>;
  @Output() closed: EventEmitter<any> = new EventEmitter();

  focusedElement?: HTMLElement;
  focusedClass = 'is-focused';

  @HostListener('document:keydown', ['$event'])
  onKeyDown($event: KeyboardEvent): void {
    if (this.isArrowDown($event) || this.isArrowUp($event)) {
      $event.preventDefault();
      this.onNavigation($event);
    }

    if (this.isEventOfKey('Tab', $event)) {
      this.closed.emit();
    }

    if (this.isEventOfKey('Enter', $event) && this.focusedElement) {
      this.focusedElement.click();
      // to prevent submit event when inside of a form
      if (this.inputField) {
        const inputElement =
          this.inputField instanceof HTMLElement
            ? this.inputField
            : this.inputField.nativeElement;
        inputElement.blur();
      }
    }
  }

  constructor(private readonly hostEl: ElementRef) {}

  private isEventOfKey(key: string, event: KeyboardEvent): boolean {
    return event.key === key;
  }

  private isArrowDown(event: KeyboardEvent): boolean {
    return this.isEventOfKey('ArrowDown', event);
  }

  private isArrowUp(event: KeyboardEvent): boolean {
    return this.isEventOfKey('ArrowUp', event);
  }

  private onNavigation(event: KeyboardEvent): void {
    const listEl = this.hostEl.nativeElement;
    const opts = listEl.children as HTMLCollectionOf<HTMLElement>;

    if (!opts || opts.length < 1) {
      return;
    }

    if (this.focusedElement) {
      this.focusedElement.classList.remove(this.focusedClass);
    }

    this.setFocusedElement(event, opts);
    this.scrollToFocusedElement(listEl);
  }

  private setFocusedElement(
    event: KeyboardEvent,
    opts: HTMLCollectionOf<HTMLElement>
  ): void {
    const idx = this.isArrowDown(event) ? 0 : opts.length - 1;
    const prop = this.isArrowDown(event)
      ? 'nextElementSibling'
      : 'previousElementSibling';

    if (this.focusedElement && this.focusedElement[prop]) {
      this.focusedElement = this.focusedElement[prop] as HTMLElement;
    } else {
      this.focusedElement = opts[idx];
    }

    this.focusedElement.classList.add(this.focusedClass);
  }

  private scrollToFocusedElement(listEl: HTMLElement): void {
    if (this.scrollableEl) {
      const listElHeight = this.pxStringToNumber(
        getComputedStyle(listEl, null).height
      );
      const scrollableHeight = this.pxStringToNumber(
        getComputedStyle(this.scrollableEl, null).height
      );
      if (listElHeight > scrollableHeight) {
        const offset = this.focusedElement ? this.focusedElement.offsetTop : 0;
        const middle = scrollableHeight / 2;
        this.scrollableEl.scrollTo(0, offset - middle);
      }
    }
  }

  private pxStringToNumber(value: string): number {
    const numVal = value.substring(0, value.length - 2); // remove 'px'
    return parseInt(numVal, 10);
  }
}
