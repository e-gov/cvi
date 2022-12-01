import {
  ComponentRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Inject,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { ModalComponent } from './modal.component';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[veeraNgModal]',
})
export class ModalDirective implements OnInit {
  @Input() veeraNgModal!: TemplateRef<any>;
  @Input() open = false;

  private componentRef: ComponentRef<ModalComponent> | null = null;

  constructor(
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    if (this.open) {
      this.createModal();
      this.showModal();
    }
  }

  @HostListener('click')
  onClick() {
    if (this.componentRef) {
      return;
    }
    this.createModal();
    this.showModal();
  }

  private createModal() {
    this.componentRef = this.viewContainerRef.createComponent(ModalComponent);
    this.componentRef.instance.templateRef = this.veeraNgModal;
    this.componentRef.instance.closed.subscribe(() => this.hideModal());
  }

  private showModal() {
    if (this.componentRef) {
      const domElement = (this.componentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0];
      this.document.body.appendChild(domElement);
    }
  }

  hideModal() {
    this.componentRef?.destroy();
    this.componentRef = null;
  }
}
