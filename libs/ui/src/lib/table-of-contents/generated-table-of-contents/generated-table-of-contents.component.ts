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
  private isBottom = false;
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
        this.onScroll();
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title']) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => this.buildToc(), 1);
    }
  }

  /** For more complex cases, we have to observe the entire element */
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

  private onScroll(): void {
    this.isBottom =
      window.innerHeight + window.scrollY + 100 >= document.body.offsetHeight;
    if (this.scrollingTimeout) {
      clearTimeout(this.scrollingTimeout);
    }
    this.scrollingTimeout = setTimeout(() => {
      if (this.isBottom && this.tocItems.length > 0) {
        const lastHeading = this.tocItems[this.tocItems.length - 1];
        this.tocService.setCurrentToCSection(lastHeading.href);
        console.log(lastHeading.label);
        console.log(this.isBottom);
      } else if (this.tocService.toCItemToHighlight) {
        this.tocService.setCurrentToCSection(
          this.tocService.toCItemToHighlight
        );
        this.tocService.toCItemToHighlight = undefined;
      }
    }, 100);
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
          this.renderer.setProperty(headingEl, 'id', anchorId);
          this.tocItems.push({
            label: headingEl.textContent,
            href: `#${anchorId}`,
            intersectionObserver: this.createItemIntersectionObserver(
              headingEl,
              anchorId
            ),
          });
        }
      });
      this.cdRef.detectChanges();
    }
  }

  createItemIntersectionObserver(
    headingEl: HTMLHeadingElement,
    anchorId: string
  ): IntersectionObserver {
    const intersectionObservable = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
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
      { rootMargin: '5px 0px -50% 0px', threshold: 1 }
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

type TocItem = {
  label: string;
  href: string;
  intersectionObserver: IntersectionObserver;
};
