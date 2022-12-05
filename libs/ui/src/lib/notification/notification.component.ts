import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { VeeraIconName } from '@ria/veera-icons';
import { NotificationSeverity, NotificationSize } from './notification';
import { NotificationSeverityToHeaderIconPipe } from './notification-severity-to-header-icon.pipe';

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

  /** Should the icon be displayed (before header for regular and before content for compact) */
  @Input() showIcon = true;

  /** Icon to show (if not set, showing default icon for severity) */
  @Input() iconName?: VeeraIconName;

  /** Should the close button be displayed */
  @Input() showCloseButton = true;

  /** Notification title */
  @Input() title!: string;

  /** Emitter for the close button click */
  @Output() closed = new EventEmitter<void>();

  constructor(
    private readonly iconPipe: NotificationSeverityToHeaderIconPipe
  ) {}

  getIconName(): VeeraIconName | undefined {
    return this.showIcon
      ? this.iconName || this.iconPipe.transform(this.severity)
      : undefined;
  }

  close() {
    this.closed.emit();
  }
}
