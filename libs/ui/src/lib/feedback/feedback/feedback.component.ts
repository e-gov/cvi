import { Component, Input } from '@angular/core';

@Component({
  selector: 'ria-poc-feedback',
  templateUrl: './feedback.component.html',
})
export class FeedbackComponent {
  /** Form title */
  @Input() title = 'Did you find what you were looking for?';

  /** Feedback options */
  @Input() options: { value: any, label: string }[] = [
    { value: 'NO', label: 'No' },
    { value: 'PARTIALLY', label: 'Partially' },
    { value: 'YES', label: 'Yes' }
  ];

  /** Should radio buttons have regular or compact outline button styling */
  @Input() appearance: 'regular' | 'compact' = 'regular';

  /** Display or hide 'sad_face' and 'happy_face' icons */
  @Input() showIcons = false;
}
