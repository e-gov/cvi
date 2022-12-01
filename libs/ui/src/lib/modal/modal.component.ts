import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  OnDestroy,
  Output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'veera-ng-modal',
  templateUrl: './modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnDestroy {
  templateRef!: TemplateRef<any>;

  @Output() closed = new EventEmitter();

  @HostBinding('class') get getHostClasses(): string {
    return `veera-modal`;
  }

  ngOnDestroy(): void {
    this.closeModal();
  }

  closeModal(): void {
    this.closed.emit();
  }
}
