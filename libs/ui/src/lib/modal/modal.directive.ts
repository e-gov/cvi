import {
  ComponentRef,
  Directive,
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
  selector: '[cviNgModal]',
})
export class ModalDirective implements OnInit {
  @Input() cviNgModal!: TemplateRef<any>;
  @Input() modalTitle!: string;
  @Input() open = false;

  private componentRef: ComponentRef<ModalComponent> | null = null;

  constructor(
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
    this.componentRef.instance.templateRef = this.cviNgModal;
    this.componentRef.instance.title = this.modalTitle;
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
