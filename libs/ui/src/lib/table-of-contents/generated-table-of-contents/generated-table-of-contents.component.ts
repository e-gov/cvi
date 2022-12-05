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
    if (this.domMutations && changes['title']) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => this.buildToc(), 1);
    }
  }

  ngAfterViewInit(): void {
    this.buildToc();
    this.domMutations = new MutationObserver((mutations: MutationRecord[]) => {
      mutations.forEach((mutation: MutationRecord) => {
        (Array.from(mutation.addedNodes) as HTMLElement[]).forEach(
          (addedEl: HTMLElement) => {
            if (
              addedEl.nodeType === Node.ELEMENT_NODE &&
              addedEl.querySelector(this.headingSelector)
            ) {
              this.buildToc();
            }
          }
        );
      });
    });

    this.domMutations.observe(this.content.nativeElement, {
      childList: true,
      subtree: true,
    });
  }

  ngOnDestroy(): void {
    if (this.tocItems && this.tocItems.length > 0) {
      this.tocItems.forEach((item: TocItem) => {
        item.intersectionObserver.disconnect();
      });
    }
    this.domMutations.disconnect();
    clearTimeout(this.timeout);
  }

  buildToc(): void {
    this.tocItems = [];
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
          if (entry.isIntersecting) {
            this.tocService.setCurrentToCSection(anchorId);
            this.cdRef.markForCheck();
          }
        });
      },
      { rootMargin: '0px', threshold: [1] }
    );
    intersectionObservable.observe(headingEl);
    return intersectionObservable;
  }
}

type TocItem = {
  label: string;
  href: string;
  intersectionObserver: IntersectionObserver;
};
