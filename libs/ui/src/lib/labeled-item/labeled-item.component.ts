import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { Gap } from '../track/track';

@Component({
  selector: 'cvi-ng-labeled-item',
  templateUrl: './labeled-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabeledItemComponent {
  @Input() label: any;
  @Input() flexDirection:
    | 'horizontal'
    | 'vertical'
    | 'verticalOnMobile'
    | 'verticalReverseOnMobile' = 'vertical';
  @Input() gap: Gap = 1;

  @HostBinding('class') get getHostClasses(): string {
    return 'cvi-labeled-item';
  }
}
