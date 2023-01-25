import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[cviNgAccordionContent]',
})
export class AccordionContentDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
