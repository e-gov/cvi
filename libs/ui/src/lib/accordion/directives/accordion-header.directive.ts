import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[veeraNgAccordionHeader]',
})
export class AccordionHeaderDirective {
  constructor(public templateRef: TemplateRef<any> | null) {}
}
