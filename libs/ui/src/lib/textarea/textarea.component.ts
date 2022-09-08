import { Component, Input } from '@angular/core';

@Component({
  selector: 'veera-ng-textarea',
  templateUrl: './textarea.component.html',
})
export class TextareaComponent {
  /** Max number of characters */
  @Input() maxLength = 2000;

  /** Minimum number of rows to display */
  @Input() minRows = 3;

  /** Maximum number of rows to display */
  @Input() maxRows = 5;

  /** Input placeholder */
  @Input() placeholder = '';
}
