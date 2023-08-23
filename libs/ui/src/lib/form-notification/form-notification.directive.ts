import {
  ComponentRef,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';

import { FormNotificationComponent } from './form-notification.component';
import { FormNotificationSeverity } from './form-notification';

@Directive({
  selector: '[cviNgFormNotification]',
  exportAs: 'cviNgFormNotification',
})
export class FormNotificationDirective implements OnChanges {
  @Input() message = '';
  @Input() severityLevel!: FormNotificationSeverity;
  @Input() display!: boolean;

  private componentRef: ComponentRef<FormNotificationComponent> | null = null;
  private inputRef: HTMLInputElement | HTMLTextAreaElement | null = null;
  private cssClass = '';

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['severityLevel']) {
      this.handleSeverityChange();
    }
    if (this.componentRef && this.inputRef !== null) {
      this.handleStyle();
      this.componentRef.instance.display = this.display;
      this.componentRef.instance.message = this.message;
      this.componentRef.instance.severity = this.severityLevel;
      this.componentRef.instance.detectChanges();
    } else {
      if (this.display) {
        this.createComponent();
        this.handleStyle();
      }
    }
  }

  createComponent() {
    const childNode = Array.from(this.elementRef.nativeElement.childNodes).find(
      (el: any) =>
        el.nodeName === 'DIV' ||
        el.nodeName === 'TEXTAREA' ||
        el.nodeName === 'INPUT'
    );

    this.inputRef = childNode as HTMLInputElement | HTMLTextAreaElement;

    if (this.componentRef === null && this.inputRef !== null) {
      this.componentRef = this.viewContainerRef.createComponent(
        FormNotificationComponent
      );
      this.componentRef.instance.display = this.display;
      this.componentRef.instance.message = this.message;
      this.componentRef.instance.severity = this.severityLevel;
    }
  }

  private handleSeverityChange() {
    // Handle changes in severity level when display stays true
    if (this.componentRef && this.inputRef) {
      if (this.display) {
        this.inputRef.classList.remove(this.cssClass);
        this.cssClass =
          'cvi-form-notification--form-border-' + this.severityLevel;
        this.inputRef.classList.add(this.cssClass);
      }
    }
  }

  private handleStyle() {
    if (this.componentRef && this.inputRef) {
      if (this.display) {
        this.cssClass =
          'cvi-form-notification--form-border-' + this.severityLevel;
        this.inputRef.classList.add(this.cssClass);
      } else {
        this.inputRef.classList.remove(this.cssClass);
      }
    }
  }
}
