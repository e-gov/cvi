import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
} from '@angular/core';
import { CviIconName } from '@egov/cvi-icons';
import { FormMessageSeverity } from './form-message';
import { FormMessageSeverityToHeaderIconPipe } from './form-message-severity-to-header-icon.pipe';

@Component({
  selector: 'cvi-ng-form-message',
  templateUrl: './form-message.component.html',
  providers: [FormMessageSeverityToHeaderIconPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormMessageComponent {
  message = '';
  display!: boolean;
  severity!: FormMessageSeverity;
  errorLabel!: string;

  constructor(
    private cdRef: ChangeDetectorRef,
    private readonly iconPipe: FormMessageSeverityToHeaderIconPipe
  ) {}

  @HostBinding('class') get getHostClasses(): string {
    return `cvi-form-message cvi-form-message--severity-${this.severity}`;
  }

  detectChanges() {
    this.cdRef.markForCheck();
    this.cdRef.detectChanges();
  }

  getIconName(): CviIconName | undefined {
    return this.iconPipe.transform(this.severity);
  }
}
