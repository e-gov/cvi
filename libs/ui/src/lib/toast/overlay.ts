import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  Inject,
  Injectable,
  OnDestroy,
  Injector,
  EmbeddedViewRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ToastContainerComponent } from './toast-container.component';

@Injectable({ providedIn: 'root' })
export class Overlay implements OnDestroy {
  private containerRef!: ComponentRef<ToastContainerComponent>;

  constructor(
    private readonly appRef: ApplicationRef,
    private readonly injector: Injector,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  ngOnDestroy() {
    if (this.containerRef) {
      this.containerRef.destroy();
    }
  }

  getContainerElement(): ComponentRef<ToastContainerComponent> {
    if (!this.containerRef) {
      this.createContainer();
    }

    return this.containerRef;
  }

  private createContainer(): void {
    this.containerRef = createComponent(ToastContainerComponent, {
      environmentInjector: this.appRef.injector,
      elementInjector: this.injector,
    });
    this.appRef.attachView(this.containerRef.hostView);
    const domElement = (this.containerRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    this.document.body.appendChild(domElement);
  }
}
