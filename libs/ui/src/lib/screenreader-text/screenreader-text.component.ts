import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'veera-ng-screenreader-text',
  template: `{{ label }}`,
})
export class ScreenreaderTextComponent {
  @Input() label!: string;

  @HostBinding('class') get getHostClasses(): string {
    return `veera-screenreader-text`;
  }
}
