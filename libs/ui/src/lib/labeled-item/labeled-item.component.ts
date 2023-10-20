import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'cvi-ng-labeled-item',
  templateUrl: './labeled-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabeledItemComponent {
  @Input() label!: string;

  @HostBinding('class') get getHostClasses(): string {
    return 'cvi-labeled-item';
  }
  /** @internal */
  baseId = 'labeled-item-' + uuidv4();
}
