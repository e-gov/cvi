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
  @Input() breadcrumbs!: { title: string; href: string | undefined }[];

  /** Name of an icon in front of breadcrumb */
  @Input() iconName: CviIconName | null = null;

  @Input() skipLastBreadcrumbMobile = false;

  @Output() breadcrumbChange = new EventEmitter<number>();

  mobileBreadcrumbIndex!: number;

  // Finds the index of a breadcrumb item that should be shown for mobile view.
  // Finds the index of last element starting from penultimate element in the list that has a href.
  // If no such elements exist, returns index of last element.
  public getMobileBreadcrumbIndex(): number {
    let lastElementIndex = this.breadcrumbs.length - 1;
    if (this.skipLastBreadcrumbMobile) {
      lastElementIndex -= 1;
    }
    for (let index = lastElementIndex - 1; index >= 0; index--) {
      if (index !== lastElementIndex && this.breadcrumbs[index].href) {
        return index;
      }
    }
    return lastElementIndex;
  }
}
