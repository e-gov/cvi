import { Component } from '@angular/core';

@Component({
  selector: 'veera-ng-tooltip',
  templateUrl: './tooltip.component.html',
})
export class TooltipComponent {
  message = '';
  left = 0;
  top = 0;
}
