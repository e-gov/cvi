import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

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
}
