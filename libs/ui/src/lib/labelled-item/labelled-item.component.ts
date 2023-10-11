import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { Gap } from '../track/track';

@Component({
  selector: 'cvi-ng-labelled-item',
  templateUrl: './labelled-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelledItemComponent {
  @Input() label: any;
  @Input() flexDirection:
    | 'horizontal'
    | 'vertical'
    | 'verticalOnMobile'
    | 'verticalReverseOnMobile' = 'vertical';
  @Input() gap: Gap = 1;

  @HostBinding('class') get getHostClasses(): string {
    return 'cvi-labelled-item';
  }
}