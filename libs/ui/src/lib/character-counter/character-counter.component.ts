import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  selector: 'veera-ng-character-counter',
  templateUrl: './character-counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCounterComponent {
  charsMax = 0;
  charsUsed = 0;

  constructor(private changeDetector: ChangeDetectorRef) {}

  markForCheck() {
    this.changeDetector.markForCheck();
  }
}
