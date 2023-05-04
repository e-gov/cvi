import {
  AfterViewInit,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { CharacterCounterComponent } from './character-counter.component';

@Directive({
  selector: '[cviNgCharacterCounter]',
  exportAs: 'cviNgCharacterCounter',
})
export class CharacterCounterDirective implements AfterViewInit {
  @Input() maxChars = '';

  private componentRef: ComponentRef<CharacterCounterComponent> | null = null;
  private inputRef: HTMLInputElement | HTMLTextAreaElement | null = null;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2
  ) {}

  @HostListener('input')
  onInputChange() {
    if (this.componentRef && this.inputRef !== null) {
      this.componentRef.instance.charsUsed = this.inputRef.value.length;
      this.componentRef.instance.detectChanges();
    }
  }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event: string) {
    const length = String(event)?.length;
    if (this.componentRef && length !== undefined) {
      this.componentRef.instance.charsUsed = length;
      this.componentRef.instance.detectChanges();
    }
  }

  ngAfterViewInit() {
    const childNode = Array.from(this.elementRef.nativeElement.childNodes).find(
      (el: any) =>
        ((el.nodeName === 'INPUT' && el.type === 'text') ||
          el.nodeName === 'TEXTAREA') &&
        ((el.maxLength !== -1 && el.maxLength !== 524288) || this.maxChars)
    );

    if (childNode !== undefined) {
      if (this.maxChars) {
        this.renderer.setAttribute(childNode, 'maxLength', this.maxChars);
      }
      this.inputRef = childNode as HTMLInputElement | HTMLTextAreaElement;
    }

    if (this.componentRef === null && this.inputRef !== null) {
      this.componentRef = this.viewContainerRef.createComponent(
        CharacterCounterComponent
      );
      this.componentRef.instance.charsUsed = this.inputRef.value.length;
      this.componentRef.instance.charsMax = this.inputRef.maxLength;

      setTimeout(() => this.onInputChange());
    }
  }
}
