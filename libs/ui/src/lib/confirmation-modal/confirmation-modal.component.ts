import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'cvi-ng-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationModalComponent implements AfterViewInit {
  @Input() title = '';
  @Input() cancelButtonText = '';
  @Input() confirmButtonText = '';

  @Output() cancelled = new EventEmitter();
  @Output() confirmed = new EventEmitter();

  @ViewChild('cancelButtonRef') cancelButtonRef!: ButtonComponent;

  ngAfterViewInit() {
    this.cancelButtonRef?.focus();
  }
}
