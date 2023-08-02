import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { TableOfContentsService } from '../table-of-contents.service';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'cvi-ng-generated-table-of-contents',
  templateUrl: './generated-table-of-contents.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneratedTableOfContentsComponent
  implements AfterViewInit, OnChanges, OnDestroy
{
  /** This prop will be passed to cvi-ng-table-of-contents */
  @Input() title!: string;
  @Input() headingSelector = 'h1, h2, h3';

  /** The internal marker is needed because of this Storybook bug https://github.com/storybookjs/storybook/issues/17004 */
  /** @internal */
  tocItems: TocItem[] = [];
  domMutations!: MutationObserver;
  timeout!: NodeJS.Timeout;
  scrollingTimeout!: NodeJS.Timeout;

  /** @internal */
  private readonly destroy$ = new Subject<void>();

  @HostBinding('class') get getHostClasses(): string {
    return `cvi-generated-table-of-contents`;
  }

  @ViewChild('content') content!: ElementRef;

  constructor(
    private renderer: Renderer2,
    private tocService: TableOfContentsService,
    private cdRef: ChangeDetectorRef
  ) {
    fromEvent(window, 'scroll')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (this.scrollingTimeout) {
          clearTimeout(this.scrollingTimeout);
        }
        this.scrollingTimeout = setTimeout(() => {
          if (this.tocService.toCItemToHighlight) {
            this.tocService.setCurrentToCSection(
              this.tocService.toCItemToHighlight
            );
            this.tocService.toCItemToHighlight = undefined;
          }
        }, 300);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title']) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => this.buildToc(), 1);
    }
  }

  /** For more complex cases we have to observe the entire element */
  ngAfterViewInit(): void {
    this.domMutations = new MutationObserver(() => this.buildToc());

    this.domMutations.observe(this.content.nativeElement, {
      childList: true,
      subtree: true,
    });
    this.cdRef.markForCheck();
  }

  ngOnDestroy(): void {
    this.removeToc();
    this.domMutations.disconnect();
    clearTimeout(this.timeout);

    this.destroy$.next();
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

  buildToc(): void {
    if (!this.content) {
      return;
    }
    this.removeToc();
    const headingNodes: NodeList = this.content.nativeElement.querySelectorAll(
      this.headingSelector
    );
    if (headingNodes.length > 0) {
      const headingEls = Array.from(headingNodes) as HTMLHeadingElement[];
      headingEls.forEach((headingEl: HTMLHeadingElement, i: number) => {
        if (headingEl.textContent) {
          const anchorId = `toc-${i}`;
          const lastAnchorId = `toc-${headingEls.length - 1}`;
          this.renderer.setProperty(headingEl, 'id', anchorId);
          this.tocItems.push({
            label: headingEl.textContent,
            href: `#${anchorId}`,
            intersectionObserver: this.createItemIntersectionObserver(
              headingEl,
              anchorId,
              lastAnchorId
            ),
          });
        }
      });
      this.cdRef.detectChanges();
    }
  }

  createItemIntersectionObserver(
    headingEl: HTMLHeadingElement,
    anchorId: string,
    lastAnchorId: string
  ): IntersectionObserver {
    const intersectionObservable = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const isBottom = isBottomOfPage();
        const isTop = isTopOfPage();
        if (isBottom && !isTop) {
          this.tocService.setCurrentToCSection(
            lastAnchorId,
            entries[entries.length - 1].time
          );
          this.cdRef.detectChanges();
          return;
        }
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio === 1 &&
            !this.tocService.toCItemToHighlight
          ) {
            this.tocService.setCurrentToCSection(anchorId, entry.time);
            this.cdRef.detectChanges();
          }
        });
      },
      { rootMargin: '5px 0px 5px 0px', threshold: 1 }
    );
    intersectionObservable.observe(headingEl);
    return intersectionObservable;
  }

  private removeToc() {
    if (this.tocItems?.length > 0) {
      this.tocItems.forEach((item: TocItem) =>
        item.intersectionObserver.disconnect()
      );
      this.tocItems = [];
    }
  }
}

function isBottomOfPage() {
  return window.innerHeight + window.scrollY + 1 > document.body.offsetHeight;
}

function isTopOfPage() {
  return window.scrollY === 0;
}

type TocItem = {
  label: string;
  href: string;
  intersectionObserver: IntersectionObserver;
};
