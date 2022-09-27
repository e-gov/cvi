import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'veera-ng-radio-button',
  templateUrl: './radio-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent {
  /** HTML name */
  @Input() name!: string;

  /** Radio button value */
  @Input() value!: string;

  /** Radio button label */
  @Input() label!: string;

  @Input() checked = false;

  @Input() disabled = false;

  @Output() inputInteraction: EventEmitter<string> = new EventEmitter<string>();

  constructor(private changeDetector: ChangeDetectorRef) {}

  onInputInteraction(event: Event) {
    event.stopPropagation();

    if (!this.checked) {
      this.inputInteraction.emit(this.value);
    }
  }

  markForCheck() {
    this.changeDetector.markForCheck();
  }
}
