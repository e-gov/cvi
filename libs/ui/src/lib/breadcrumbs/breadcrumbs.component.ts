import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CviIconName } from '@egov/cvi-icons';

@Component({
  selector: 'cvi-ng-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent implements OnChanges, OnInit {
  @Input() breadcrumbs!: { title: string; href: string | undefined }[];

  /** Name of an icon in front of breadcrumb */
  @Input() iconName: CviIconName | null = null;

  @Output() breadcrumbChange = new EventEmitter<number>();

  mobileBreadcrumbIndex!: number;

  ngOnInit(): void {
    this.mobileBreadcrumbIndex = this.getMobileBreadcrumbIndex();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['breadcrumbs'] && this.breadcrumbs) {
      this.mobileBreadcrumbIndex = this.getMobileBreadcrumbIndex();
    }
  }

  private getMobileBreadcrumbIndex(): number {
    const lastElementIndex = this.breadcrumbs.length - 1;
    for (let index = lastElementIndex - 1; index >= 0; index--) {
      if (index !== lastElementIndex && this.breadcrumbs[index].href) {
        return index;
      }
    }
    return lastElementIndex;
  }
}
