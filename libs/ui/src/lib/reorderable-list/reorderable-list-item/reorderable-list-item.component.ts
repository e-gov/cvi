import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import {
  ReorderableListStepConfiguration,
  SwapConfigurations,
} from '../reorderable-list/reorderable-list-step-configuration';

@Component({
  selector: 'veera-ng-reorderable-list-item',
  templateUrl: './reorderable-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReorderableListItemComponent {
  @Input() stepNameLabel!: string;
  @Input() configuration!: ReorderableListStepConfiguration;

  @Input() setAsPreviousStepButtonVisible!: boolean;
  @Input() setAsNextStepButtonVisible!: boolean;

  @Output() swapConfigurationsEvent = new EventEmitter<SwapConfigurations>();
  @Output() removeStepEvent = new EventEmitter<number>();

  @HostBinding('class') get getHostClasses(): string {
    return `veera-reorderable-list__item`;
  }

  constructor(private readonly cdRef: ChangeDetectorRef) {}

  moveStepTo(direction: 'previous' | 'next'): void {
    this.swapConfigurationsEvent.emit({
      index1: this.configuration.index,
      index2: (this.configuration.index += direction === 'next' ? 1 : -1),
    });
  }

  removeStep(): void {
    this.removeStepEvent.emit(this.configuration.index);
  }

  markForCheck(): void {
    this.cdRef.markForCheck();
  }

  get orderNr(): number {
    return this.configuration.index + 1;
  }
}
