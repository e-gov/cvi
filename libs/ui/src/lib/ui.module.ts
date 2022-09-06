import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { FormItemComponent } from './form-item/form-item.component';
import { StepsComponent } from './steps/steps/steps.component';
import { StepComponent } from './steps/step/step.component';
import { LabeledIconComponent } from './icons/labeled-icon/labeled-icon.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemDirective } from './accordion/directives/accordion-item.directive';
import { AccordionContentDirective } from './accordion/directives/accordion-content.directive';
import { AccordionTitleDirective } from './accordion/directives/accordion-title.directive';
import { AccordionHeaderDirective } from './accordion/directives/accordion-header.directive';

const components = [
  ButtonComponent,
  InputComponent,
  FormItemComponent,
  LabeledIconComponent,
  StepsComponent,
  StepComponent,
  AccordionComponent,
  AccordionItemDirective,
  AccordionContentDirective,
  AccordionTitleDirective,
  AccordionHeaderDirective
];

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
})
export class UiModule {}
