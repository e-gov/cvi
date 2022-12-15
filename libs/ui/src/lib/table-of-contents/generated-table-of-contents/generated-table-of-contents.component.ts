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

@Component({
  selector: 'veera-ng-generated-table-of-contents',
  templateUrl: './generated-table-of-contents.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneratedTableOfContentsComponent
  implements AfterViewInit, OnChanges, OnDestroy
{
  /** This prop will be passed to veera-ng-table-of-contents */
  @Input() title!: string;
  @Input() headingSelector = 'h1, h2, h3';

  /** The internal marker is needed because of this Storybook bug https://github.com/storybookjs/storybook/issues/17004 */
  /** @internal */
  tocItems: TocItem[] = [];
  domMutations!: MutationObserver;
  timeout!: NodeJS.Timeout;

  @HostBinding('class') get getHostClasses(): string {
    return `veera-generated-table-of-contents`;
  }

  @ViewChild('content') content!: ElementRef;

  constructor(
    private renderer: Renderer2,
    private tocService: TableOfContentsService,
    private cdRef: ChangeDetectorRef
  ) {}

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
  }

  ngOnDestroy(): void {
    this.removeToc();
    this.domMutations.disconnect();
    clearTimeout(this.timeout);
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
    }
  }

  createItemIntersectionObserver(
    headingEl: HTMLHeadingElement,
    anchorId: string
  ): IntersectionObserver {
    const intersectionObservable = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio === 1) {
            this.tocService.setCurrentToCSection(anchorId, entry.time);
            this.cdRef.detectChanges();
          }
        });
      },
      { rootMargin: '0px 0px -50% 0px', threshold: 1 }
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
