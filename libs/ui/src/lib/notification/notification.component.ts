import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { VeeraIconName } from '@ria/veera-icons';
import { NotificationSeverity, NotificationSize } from './notification';

@Component({
  selector: 'veera-ng-notification',
  templateUrl: './notification.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
  /** Notification severity */
  @Input() severity: NotificationSeverity = 'info';

  /** Notification size */
  @Input() size: NotificationSize = 'regular';

  /** Should the header icon be displayed */
  @Input() showHeaderIcon = true;

  /** Icon to show before content if size is compact */
  @Input() contentIconName?: VeeraIconName;

  /** Should the close button be displayed */
  @Input() showCloseButton = true;

  /** Notification title */
  @Input() title!: string;

  /** Emitter for the close button click */
  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }
}
