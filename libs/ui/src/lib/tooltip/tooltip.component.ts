import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'veera-ng-tooltip',
  templateUrl: './tooltip.component.html',
})
export class TooltipComponent {
  @Input() message = '';
  @Input() left = 0;
  @Input() top = 0;
  @Input() arrowLeft = 0;
  @Input() arrowTop = 0;
  @HostBinding('class') get getHostClasses(): string {
    return 'veera-tooltip';
  }
}
