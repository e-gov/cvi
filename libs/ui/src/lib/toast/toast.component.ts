import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  HostListener,
} from '@angular/core';
import { ToastService } from './toast.service';
import { ToastPackage } from './toast-config';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'veera-ng-toast',
  templateUrl: './toast.component.html',
  animations: [
    trigger('fade', [
      state('inactive', style({ opacity: 0 })),
      state('active', style({ opacity: 1 })),
      state('removed', style({ opacity: 0 })),
      transition('inactive => active', animate('{{ easeTime }}ms ease-in')),
      transition('active => removed', animate('{{ easeTime }}ms ease-in')),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent implements AfterViewInit {
  toastClasses = '';
  progressBarWidth = -1;

  private timeout: any;
  private animationStartTime = -1;
  private animationFrameRequestId = -1;
  private animationTimeOutLength = -1;

  @HostBinding('@fade')
  state = {
    value: 'inactive',
    params: {
      easeTime: this.toastPackage.config.easeTime,
    },
  };

  @HostBinding('attr.role') role = 'alert';
  @HostBinding('attr.aria-live') ariaLive = 'assertive';
  @HostBinding('attr.aria-atomic') ariaAtomic = 'true';

  constructor(
    private readonly toastService: ToastService,
    private readonly toastPackage: ToastPackage,
    private readonly cd: ChangeDetectorRef
  ) {
    this.toastClasses = `veera-toast ${toastPackage.toastType}`;
  }

  @HostBinding('class')
  get hostClasses(): string {
    return `veera-toast ${this.toastPackage.toastType}`;
  }

  ngAfterViewInit() {
    this.animationTimeOutLength = this.toastPackage.config.timeOut;
    this.timeout = setTimeout(() => this.remove(), this.animationTimeOutLength);
    this.animateProgressBar(performance.now());
    this.state = { ...this.state, value: 'active' };
  }

  @HostListener('click')
  tapToast() {
    this.remove();
  }

  @HostListener('mouseenter')
  keepToastAround() {
    if (this.state.value === 'removed') {
      return;
    }

    clearTimeout(this.timeout);
    cancelAnimationFrame(this.animationFrameRequestId);
    this.animationFrameRequestId = -1;
    this.animationStartTime = -1;
    this.progressBarWidth = 0;
  }

  @HostListener('mouseleave')
  delayedHideToast() {
    this.animationTimeOutLength = this.toastPackage.config.extendedTimeOut;
    this.timeout = setTimeout(() => this.remove(), this.animationTimeOutLength);
    this.animateProgressBar(performance.now());
  }

  get message() {
    return this.toastPackage.message;
  }

  get title() {
    return this.toastPackage.title;
  }

  get progressBar() {
    return this.toastPackage.config.progressBar;
  }

  get isSuccessToast() {
    return (
      this.toastPackage.toastType ===
      this.toastPackage.config.toastTypes.success
    );
  }

  get isInfoToast() {
    return (
      this.toastPackage.toastType === this.toastPackage.config.toastTypes.info
    );
  }

  get isWarningToast() {
    return (
      this.toastPackage.toastType ===
      this.toastPackage.config.toastTypes.warning
    );
  }

  get isErrorToast() {
    return (
      this.toastPackage.toastType === this.toastPackage.config.toastTypes.error
    );
  }

  remove() {
    if (this.state.value === 'removed') {
      return;
    }

    clearTimeout(this.timeout);
    cancelAnimationFrame(this.animationFrameRequestId);
    this.animationFrameRequestId = -1;
    this.state = { ...this.state, value: 'removed' };

    setTimeout(
      () => this.toastService.remove(this.toastPackage.id),
      this.toastPackage.config.easeTime
    );
  }

  private animateProgressBar(timestamp: number) {
    this.animationFrameRequestId = requestAnimationFrame(
      this.animateProgressBar.bind(this)
    );

    if (this.animationStartTime > 0) {
      this.progressBarWidth =
        100 -
        Math.min(
          (timestamp - this.animationStartTime) / this.animationTimeOutLength,
          100
        ) *
          100;
      this.cd.markForCheck();
    } else {
      this.animationStartTime = timestamp;
    }
  }
}
