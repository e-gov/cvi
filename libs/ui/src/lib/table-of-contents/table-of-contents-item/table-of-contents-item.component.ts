import {
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { TableOfContentsService } from '../table-of-contents.service';

@Component({
  selector: 'veera-ng-table-of-contents-item',
  templateUrl: './table-of-contents-item.component.html',
})
export class TableOfContentsItemComponent implements OnInit, OnDestroy {
  /** Must be equal to a veeraNgToCSection directive value in order to have scroll tracking working */
  @Input() href!: string;
  @Input() label = '';

  @HostBinding('attr.role') roleAttr = 'listitem';
  @HostBinding('class.is-current') current = false;
  @HostBinding('class') get getHostClasses(): string {
    return `veera-table-of-contents__aside-list-item`;
  }
  @HostBinding('attr.href') get getHref(): null {
    return null;
  }
  @HostBinding('attr.label') get getLabel(): null {
    return null;
  }

  tocSubscription!: Subscription;
  scrollListener: any;

  constructor(
    private renderer: Renderer2,
    private tocService: TableOfContentsService
  ) {}

  ngOnInit() {
    this.tocSubscription = this.tocService.currentToCSection$.subscribe(
      (id: string) => {
        this.current = `#${id}` === this.href;
      }
    );
  }

  ngOnDestroy() {
    this.tocSubscription.unsubscribe();
    this.scrollListener = null;
  }

  onClick(): void {
    let timer: any;
    this.scrollListener = this.renderer.listen(window, 'scroll', () => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        this.tocService.setCurrentToCSection(this.href.slice(1));
      }, 300);
    });
  }
}
