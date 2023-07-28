import { NgModule } from '@angular/core';
import { UiModule } from '@egov/cvi-ng';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReorderableListExampleComponent } from './reorderable-list-example/reorderable-list-example.component';
import { ReorderableListSingleFormItemComponent } from './reorderable-list-single-form-item/reorderable-list-single-form-item.component';
import { ReorderableListMultipleFormItemsComponent } from './reorderable-list-multiple-form-items/reorderable-list-multiple-form-items.component';
import { ReorderableListMultipleTracksAndFormItemsComponent } from './reorderable-list-multiple-tracks-and-form-items/reorderable-list-multiple-tracks-and-form-items.component';

const components = [
  ReorderableListExampleComponent,
  ReorderableListSingleFormItemComponent,
  ReorderableListMultipleFormItemsComponent,
  ReorderableListMultipleTracksAndFormItemsComponent,
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  providers: [],
  imports: [UiModule, FormsModule, CommonModule],
})
export class ReorderableListExamplesModule {}
