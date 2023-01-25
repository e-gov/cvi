import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[cviNgAccordionHeader]',
})
export class AccordionHeaderDirective {
  constructor(public templateRef: TemplateRef<any> | null) {}
}
