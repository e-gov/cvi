import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { CviIconName } from '@egov/cvi-icons';
import { FormNotificationSeverity } from './form-notification';
import { FormNotificationSeverityToHeaderIconPipe } from './form-notification-severity-to-header-icon.pipe';

@Component({
  selector: 'cvi-ng-form-notification',
  templateUrl: './form-notification.component.html',
  providers: [ FormNotificationSeverityToHeaderIconPipe ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormNotificationComponent {
  message = '';
  display!: boolean;
  severity!: FormNotificationSeverity;

  constructor(private cdRef: ChangeDetectorRef,
              private readonly iconPipe: FormNotificationSeverityToHeaderIconPipe) {}

  detectChanges() {
    this.cdRef.markForCheck();
    this.cdRef.detectChanges();
  }

  getIconName(): CviIconName | undefined {
    return this.iconPipe.transform(this.severity);
  }
}
