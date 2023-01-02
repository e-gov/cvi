import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[veera-ng-header-cell]',
  templateUrl: './header-cell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderCellComponent {
  @HostBinding('class') get getHostClasses(): string {
    return 'veera-table__header-cell';
  }
}
