import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'veera-ng-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableOfContentsComponent {
  @HostBinding('attr.aria-label') @Input() title!: string | null;

  @HostBinding('attr.role') roleAttr = 'navigation';
  @HostBinding('class') get getHostClasses(): string {
    return `veera-table-of-contents__aside-inner`;
  }
  @HostBinding('attr.title') get getTitle(): null {
    return null;
  }
}
