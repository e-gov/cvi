import {
  ComponentRef,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';

import { FormMessageComponent } from './form-message.component';
import { FormMessageSeverity } from './form-message';

@Directive({
  selector: '[cviNgFormMessage]',
  exportAs: 'cviNgFormMessage',
})
export class FormMessageDirective implements OnChanges {
  @Input() message = '';
  @Input() severityLevel!: FormMessageSeverity;
  @Input() displayMessage!: boolean;
  @Input() title?: string;

  private componentRef: ComponentRef<FormMessageComponent> | null = null;
  private container: HTMLDivElement | null = null;
  private inputRef: HTMLInputElement | HTMLTextAreaElement | null = null;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2
  ) {}

  ngOnChanges(): void {
    if (!this.displayMessage) {
      this.destroyComponent();
      return;
    }
    if (this.componentRef && this.inputRef !== null) {
      this.updateComponentProperties();
      return;
    }
    if (this.displayMessage) {
      this.createComponent();
    }
  }
  @HostBinding('style.--cvi-form-input-border-color')
  get hostFormInputBorderColor(): string | null {
    if (this.displayMessage && this.severityLevel === 'warning') {
      return 'var(--cvi-color-dark-tangerine-10)';
    } else if (this.displayMessage && this.severityLevel === 'error') {
      return 'var(--cvi-color-jasper-10)';
    } else {
      return 'var(--cvi-color-black-coral-5)';
    }
  }

  createComponent() {
    const childNode = Array.from(this.elementRef.nativeElement.childNodes).find(
      (el: any) => ['DIV', 'TEXTAREA', 'INPUT'].includes(el.nodeName)
    );

    this.inputRef = childNode as HTMLInputElement | HTMLTextAreaElement;

    if (!this.componentRef && this.inputRef) {
      this.container = this.renderer.createElement('div');
      this.renderer.insertBefore(
        this.elementRef.nativeElement,
        this.container,
        this.inputRef.nextSibling
      );

      this.componentRef =
        this.viewContainerRef.createComponent(FormMessageComponent);
      this.renderer.appendChild(
        this.container,
        this.componentRef.location.nativeElement
      );

      this.updateComponentProperties();
    }
  }

  private destroyComponent() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }

    if (this.container) {
      this.renderer.removeChild(this.elementRef.nativeElement, this.container);
      this.container = null;
    }
  }

  private updateComponentProperties() {
    if (this.componentRef) {
      this.componentRef.instance.displayMessage = this.displayMessage;
      this.componentRef.instance.message = this.message;
      this.componentRef.instance.severityLevel = this.severityLevel;
      this.componentRef.instance.title = this.title + ': ';
      this.componentRef.instance.detectChanges();
    }
  }
}
