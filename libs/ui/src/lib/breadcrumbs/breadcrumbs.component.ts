import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { VeeraIconName } from '@ria/veera-icons';

@Component({
  selector: 'veera-ng-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  @Input() breadcrumbLabels!: string[];

  /** Name of an icon in front of breadcrumb */
  @Input() iconName: VeeraIconName | null = null;

  @Output() breadcrumbChange = new EventEmitter<number>();
}
