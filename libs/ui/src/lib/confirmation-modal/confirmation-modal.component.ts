import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'veera-ng-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationModalComponent {
  @Input() title = '';
  @Input() cancelButtonText = '';
  @Input() confirmButtonText = '';

  @Output() cancelled = new EventEmitter();
  @Output() confirmed = new EventEmitter();
}
