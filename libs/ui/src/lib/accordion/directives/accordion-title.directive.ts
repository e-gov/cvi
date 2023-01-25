import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[cviNgAccordionTitle]',
})
export class AccordionTitleDirective {
  constructor(public templateRef: TemplateRef<any> | null) {}
}
