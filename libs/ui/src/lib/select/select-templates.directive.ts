import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[veeraNgSelectLabelTemplate]' })
export class LabelTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[veeraNgSelectOptionTemplate]' })
export class OptionTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
