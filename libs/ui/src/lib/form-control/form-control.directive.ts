import {
  ComponentRef,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  ViewContainerRef,
} from '@angular/core';

import { FormControlComponent } from './form-control.component';
import { NotificationSeverity } from '../notification/notification';

@Directive({
  selector: '[cviNgFormControl]',
  exportAs: 'cviNgFormControl',
})
export class FormControlDirective implements OnChanges {
  @Input() message = '';
  @Input() severityLevel!: NotificationSeverity;
  @Input() display!: boolean;

  private componentRef: ComponentRef<FormControlComponent> | null = null;
  private inputRef: HTMLInputElement | HTMLTextAreaElement | null = null;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnChanges(): void {
    if (this.componentRef && this.inputRef !== null) {
      this.componentRef.instance.display = this.display;
      this.componentRef.instance.message = this.message;
      this.componentRef.instance.severity = this.severityLevel;
      this.handleStyle();
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
      this.componentRef =
        this.viewContainerRef.createComponent(FormControlComponent);
      this.componentRef.instance.display = this.display;
      this.componentRef.instance.message = this.message;
      this.componentRef.instance.severity = this.severityLevel;
    }
  }

  private handleStyle() {
    if (this.componentRef && this.inputRef) {
      if (this.display) {
        console.log(this.inputRef.classList);
        this.inputRef.classList.add(
          'cvi-form-control--form-border-' + this.severityLevel
        );
      } else {
        this.inputRef.classList.remove(
          'cvi-form-control--form-border-' + this.severityLevel
        );
      }
    }
  }
}
