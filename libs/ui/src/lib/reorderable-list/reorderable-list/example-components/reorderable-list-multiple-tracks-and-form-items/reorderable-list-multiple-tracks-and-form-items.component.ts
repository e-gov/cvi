import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReorderableListExampleBase } from '../reorderable-list-example-base';

@Component({
  selector: 'cvi-ng-reorderable-list-multiple-tracks-and-form-items-example',
  templateUrl:
    './reorderable-list-multiple-tracks-and-form-items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReorderableListMultipleTracksAndFormItemsComponent
  extends ReorderableListExampleBase
  implements OnInit
{
  ngOnInit(): void {
    this.items = [
      {
        index: 0,
        track1Field1: 'A value in the first track',
        track1Field2: 'Something important',
        track1Field3: '1234567890',
        track2Field1: 'Now this is the second track',
        track2Field2: 'Qwerty',
        singleField:
          'Here you can write a lot ... or as long as a lot is less that 100 characters',
      },
    ];
  }
}
