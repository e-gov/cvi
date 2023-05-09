import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  selector: 'cvi-ng-character-counter',
  templateUrl: './character-counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCounterComponent {
  charsMax = 0;
  charsUsed = 0;

  constructor(private cdRef: ChangeDetectorRef) {}

  detectChanges() {
    this.cdRef.markForCheck();
    this.cdRef.detectChanges();
  }
}
