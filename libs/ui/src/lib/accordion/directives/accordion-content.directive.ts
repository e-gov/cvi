import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[veeraNgAccordionContent]',
})
export class AccordionContentDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
