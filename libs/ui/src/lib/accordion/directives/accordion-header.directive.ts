import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[riaPocAccordionHeader]'
})
export class AccordionHeaderDirective {
  constructor(public templateRef: TemplateRef<any> | null) {}
}
