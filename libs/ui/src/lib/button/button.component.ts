import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { CviIconName } from '../../../../../dist/libs/icons';
import { iconSizeDefault } from '../icons/icon/icon';
import { LabeledIconPosition } from '../icons/icon-position';
import { Gap } from '../track/track';

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

  @Input() iconPosition: LabeledIconPosition = 'before';

  @Input() iconName?: CviIconName;

  @Input() iconHeight?: number = iconSizeDefault;

  @Input() gap: Gap = 4;

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
