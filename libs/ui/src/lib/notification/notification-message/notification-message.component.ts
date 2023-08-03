import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NotificationSeverity, NotificationSeverityToHeaderIconPipe, NotificationSize} from "@egov/cvi-ng";
import { CviIconName } from '@egov/cvi-icons';

@Component({
  selector: 'cvi-ng-notification-message',
  templateUrl: './notification-message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationMessageComponent {

  @Input() severity: NotificationSeverity = 'info';

  /** Notification size */
  @Input() size: NotificationSize = 'regular';

  /** Should the icon be displayed (before header for regular and before content for compact) */
  @Input() showIcon = true;

  /** Icon to show (if not set, showing default icon for severity) */
  @Input() iconName?: CviIconName;

  /** Should the close button be displayed */
  @Input() showCloseButton = true;

  /** Notification title */
  @Input() title!: string;

  @Input() contentPrefix?: string;

  /** Emitter for the close button click */
  @Output() closed = new EventEmitter<void>();

  constructor(
    private readonly iconPipe: NotificationSeverityToHeaderIconPipe
  ) {}

  getIconName(): CviIconName | undefined {
    return this.showIcon
      ? this.iconName || this.iconPipe.transform(this.severity)
      : undefined;
  }

  close() {
    this.closed.emit();
  }

}
