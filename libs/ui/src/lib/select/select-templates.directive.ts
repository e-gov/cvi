import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[cviNgSelectLabelTemplate]' })
export class LabelTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[cviNgSelectOptionTemplate]' })
export class OptionTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
