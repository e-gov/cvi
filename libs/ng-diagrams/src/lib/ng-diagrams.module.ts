import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HierarchicalBoxDiagramComponent } from './hierarchical-box-diagram/hierarchical-box-diagram.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HierarchicalBoxDiagramComponent],
  exports: [HierarchicalBoxDiagramComponent],
})
export class NgDiagramsModule {}
