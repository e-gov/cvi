import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { CviIconName } from '@egov/cvi-icons';
import { LabeledIconPosition } from '../icons/icon-position';

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

  @Input() iconPosition: LabeledIconPosition = 'after';

  /** Icon height in px */
  private _iconHeight = 16;

  get iconHeight() {
    return this._iconHeight;
  }
  @Input() set iconHeight(iconHeight) {
    this._iconHeight = this.size === 'm' ? 16 : 12;
  }

  /** Icon name */
  @Input() iconName!: CviIconName;

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
