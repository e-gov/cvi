import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[veeraNgAccordionTitle]',
})
export class AccordionTitleDirective {
  constructor(public templateRef: TemplateRef<any> | null) {}
}
