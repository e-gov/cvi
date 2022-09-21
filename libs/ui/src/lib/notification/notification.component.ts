import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NotificationType } from './notification-type';

@Component({
  selector: 'veera-ng-notification',
  templateUrl: './notification.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
  /** Notification type */
  @Input() type: NotificationType = 'info';

  /** Should the close button be displayed */
  @Input() showHeaderIcon = true;

  /** Should the close button be displayed */
  @Input() showCloseButton = true;

  /** Notification header */
  @Input() header!: string;

  /** Emitter for the close button click */
  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }
}
