import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { SwapReorderableListItems } from '../swap-reorderable-list-items';

@Component({
  selector: 'veera-ng-reorderable-list-item',
  templateUrl: './reorderable-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReorderableListItemComponent {
  @Input() index!: number;
  @Input() setAsPreviousStepButtonVisible!: boolean;
  @Input() setAsNextStepButtonVisible!: boolean;

  @Output() swapStepsEvent = new EventEmitter<SwapReorderableListItems>();
  @Output() removeStepEvent = new EventEmitter<number>();

  @HostBinding('class') get getHostClasses(): string {
    return `veera-reorderable-list__item`;
  }

  get orderNr(): number {
    return this.index + 1;
  }

  moveStepTo(direction: 'previous' | 'next'): void {
    this.swapStepsEvent.emit({
      index1: this.index,
      index2: (this.index += direction === 'next' ? 1 : -1),
    } as SwapReorderableListItems);
  }

  removeStep(): void {
    this.removeStepEvent.emit(this.index);
  }
}
