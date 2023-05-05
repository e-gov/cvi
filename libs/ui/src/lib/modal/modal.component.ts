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
  selector: 'cvi-ng-modal',
  templateUrl: './modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnDestroy {
  templateRef!: TemplateRef<any>;

  title!: string;

  @Output() closed = new EventEmitter();

  @HostBinding('class') get getHostClasses(): string {
    return `cvi-modal`;
  }

  ngOnDestroy(): void {
    this.closeModal();
  }

  closeModal(): void {
    this.closed.emit();
  }
}
