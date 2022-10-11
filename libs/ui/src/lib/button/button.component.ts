import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'veera-ng-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() appearance: 'primary' | 'secondary' | 'text' = 'primary';

  /** Button size */
  @Input() size: 'm' | 's' = 'm';

  /** Button is disabled */
  @Input() disabled = false;

  @Output() clickEvent = new EventEmitter();

  @HostBinding('class') get getHostClasses(): string {
    return `veera-button veera-button--appearance-${
      this.appearance
    } veera-button--size-${this.size}${
      this.disabled ? ' veera-button--is-disabled' : ''
    }`;
  }

  onClick(): void {
    this.clickEvent.emit();
  }
}
