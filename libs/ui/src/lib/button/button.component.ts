import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'cvi-ng-button',
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
    return `cvi-button cvi-button--appearance-${
      this.appearance
    } cvi-button--size-${this.size}${
      this.disabled ? ' cvi-button--is-disabled' : ''
    }`;
  }

  @ViewChild('buttonRef') buttonRef!: ElementRef<HTMLButtonElement>;

  onClick(): void {
    this.clickEvent.emit();
  }

  focus(): void {
    this.buttonRef.nativeElement.focus();
  }
}
