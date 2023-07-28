import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReorderableListExampleBase } from '../reorderable-list-example-base';

@Component({
  selector: 'cvi-ng-reorderable-list-example',
  templateUrl: './reorderable-list-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReorderableListExampleComponent
  extends ReorderableListExampleBase
  implements OnInit
{
  ngOnInit(): void {
    this.items = [
      { index: 0, value: 'Me as well' },
      { index: 1, value: 'And so am I' },
      { index: 2, value: 'I am a reorderable item' },
    ];
  }
}
