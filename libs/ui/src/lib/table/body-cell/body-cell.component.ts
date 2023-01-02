import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[veera-ng-body-cell]',
  templateUrl: './body-cell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BodyCellComponent {
  @HostBinding('class') get getHostClasses(): string {
    return `veera-table__body-cell`;
  }
}
