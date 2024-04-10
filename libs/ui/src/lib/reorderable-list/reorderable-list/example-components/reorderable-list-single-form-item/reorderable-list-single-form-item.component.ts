import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReorderableListExampleBase } from '../reorderable-list-example-base';

@Component({
  selector: 'cvi-ng-reorderable-list-single-form-item-example',
  templateUrl: './reorderable-list-single-form-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReorderableListSingleFormItemComponent
  extends ReorderableListExampleBase
  implements OnInit
{
  ngOnInit(): void {
    this.items = [
      { index: 0, title: 'Submission of application' },
      { index: 1, title: 'Confirmation of time and place' },
      { index: 2, title: 'Getting married' },
      { index: 3, title: 'Application for ID card and passport' },
      { index: 4, title: 'Receiving the ID card and passport' },
    ];
  }
}
