import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[riaPocAccordionTitle]'
})
export class AccordionTitleDirective {
  constructor(public templateRef: TemplateRef<any> | null) {}
}
