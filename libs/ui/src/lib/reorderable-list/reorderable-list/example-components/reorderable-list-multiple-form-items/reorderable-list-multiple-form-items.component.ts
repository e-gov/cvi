import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReorderableListExampleBase } from '../reorderable-list-example-base';

@Component({
  selector: 'cvi-ng-reorderable-list-multiple-form-items-example',
  templateUrl: './reorderable-list-multiple-form-items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReorderableListMultipleFormItemsComponent
  extends ReorderableListExampleBase
  implements OnInit
{
  ngOnInit(): void {
    this.items = [
      {
        index: 0,
        field1: 'Some value',
        field2: 'Another value',
        field3: 'And another one',
        field4: 'And yet another one',
        field5: 'The final one, I swear',
      },
      {
        index: 1,
        field1: 'Sorry, here is another item',
        field2: 'With another value',
        field3: 'And another',
        field4: 'Second to last value',
        field5: 'THE last one :)',
      },
    ];
  }
}
