import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CviIconName } from '@ria/cvi-icons';

@Component({
  selector: 'veera-ng-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  @Input() breadcrumbLabels!: string[];

  /** Name of an icon in front of breadcrumb */
  @Input() iconName: CviIconName | null = null;

  @Output() breadcrumbChange = new EventEmitter<number>();
}
