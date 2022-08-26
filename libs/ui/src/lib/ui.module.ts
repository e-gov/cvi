import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { FormItemComponent } from './form-item/form-item.component';
import { StepsComponent } from './steps/steps/steps.component';
import { StepComponent } from './steps/step/step.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, InputComponent, FormItemComponent, StepsComponent, StepComponent],
  exports: [ButtonComponent, InputComponent, FormItemComponent, StepsComponent, StepComponent],
})
export class UiModule {}
