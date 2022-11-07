import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EmbeddedViewRef,
  Inject,
  Injectable,
  Injector,
} from '@angular/core';
import { Overlay } from './overlay';
import { ToastComponent } from './toast.component';
import {
  TOAST_CONFIG,
  ToastConfig,
  ToastPackage,
  ToastToken,
} from './toast-config';

export interface ActiveToast {
  id: number;
  title: string;
  message: string;
  componentRef: ComponentRef<ToastComponent>;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly toastConfig: ToastConfig;
  private readonly toasts: ActiveToast[] = [];
  private nextUniqueId = 0;

  constructor(
    @Inject(TOAST_CONFIG) token: ToastToken,
    private readonly overlay: Overlay,
    private readonly injector: Injector,
    private readonly appRef: ApplicationRef
  ) {
    this.toastConfig = {
      ...token.default,
      ...token.config,
    };
  }

  success(title?: string, message?: string) {
    const type = this.toastConfig.toastTypes.success;
    return this.buildAndDisplayNotification(type, title, message);
  }

  info(title?: string, message?: string) {
    const type = this.toastConfig.toastTypes.info;
    return this.buildAndDisplayNotification(type, title, message);
  }

  warning(title?: string, message?: string) {
    const type = this.toastConfig.toastTypes.warning;
    return this.buildAndDisplayNotification(type, title, message);
  }

  error(title?: string, message?: string) {
    const type = this.toastConfig.toastTypes.error;
    return this.buildAndDisplayNotification(type, title, message);
  }

  private buildAndDisplayNotification(
    toastType: string,
    title?: string,
    message?: string
  ): ActiveToast {
    const toastPackage = new ToastPackage(
      this.nextUniqueId++,
      this.toastConfig,
      toastType,
      title,
      message
    );

    const toastInjector = Injector.create({
      providers: [{ provide: ToastPackage, useValue: toastPackage }],
      parent: this.injector,
    });
    const toastComponentRef = createComponent(ToastComponent, {
      environmentInjector: this.appRef.injector,
      elementInjector: toastInjector,
    });

    const toast: ActiveToast = {
      id: toastPackage.id,
      title: title || '',
      message: message || '',
      componentRef: toastComponentRef,
    };

    this.toasts.push(toast);

    const toastContainerRef = this.overlay.getContainerElement();
    const containerElement: Element = toastContainerRef.location.nativeElement;

    containerElement.insertBefore(
      this.getComponentRootNode(toastComponentRef),
      containerElement.firstChild
    );
    this.appRef.attachView(toastComponentRef.hostView);

    return toast;
  }

  remove(toastId: number) {
    const toastIndex = this.findToast(toastId);

    if (toastIndex === -1) {
      return;
    }

    const removedToast = this.toasts.splice(toastIndex, 1)[0];
    removedToast.componentRef.destroy();
  }

  private findToast(id: number): number {
    return this.toasts.findIndex((toast) => toast.id === id);
  }

  private getComponentRootNode(componentRef: ComponentRef<any>): HTMLElement {
    return (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
  }
}
