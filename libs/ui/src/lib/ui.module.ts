import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { FormItemComponent } from './form-item/form-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, InputComponent, FormItemComponent],
  exports: [ButtonComponent, InputComponent, FormItemComponent],
})
export class UiModule {}
