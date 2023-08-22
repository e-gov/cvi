import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { NotificationSeverity } from '@egov/cvi-ng';

@Component({
  selector: 'cvi-ng-form-control',
  templateUrl: './form-control.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlComponent {
  message = '';
  display!: boolean;
  severity!: NotificationSeverity;

  constructor(private cdRef: ChangeDetectorRef) {}

  detectChanges() {
    this.cdRef.markForCheck();
    this.cdRef.detectChanges();
  }
}
