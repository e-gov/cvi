import { ContentChild, Directive, Input } from '@angular/core';
import { AccordionContentDirective } from './accordion-content.directive';
import { AccordionHeaderDirective } from './accordion-header.directive';
import { AccordionTitleDirective } from './accordion-title.directive';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'veera-ng-accordion-item',
})
export class AccordionItemDirective {
  @Input() title = '';
  @Input() details = '';
  @Input() disabled = false;
  @ContentChild(AccordionContentDirective) content!: AccordionContentDirective;
  @ContentChild(AccordionTitleDirective) customTitle!: AccordionTitleDirective;
  @ContentChild(AccordionHeaderDirective)
  customHeader!: AccordionHeaderDirective;
}
