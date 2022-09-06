import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[riaPocAccordionContent]'
})
export class AccordionContentDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
