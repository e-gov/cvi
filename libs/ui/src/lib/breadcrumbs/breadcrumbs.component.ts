import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CviIconName } from '@egov/cvi-icons';

@Component({
  selector: 'cvi-ng-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  @Input() breadcrumbLabels!: string[];

  /** Name of an icon in front of breadcrumb */
  // TODO: the icon is always the same (arrow_a_left), the prop should be removed
  @Input() iconName: CviIconName | null = null;

  @Output() breadcrumbChange = new EventEmitter<number>();
}
