import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cvi-ng-table-card',
  templateUrl: './table-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableCardComponent {
  @HostBinding('class') get getHostClasses(): string {
    return 'cvi-table-card';
  }
}
