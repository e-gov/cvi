import {
  Directive,
  HostBinding,
  Input,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { TableOfContentsService } from './table-of-contents.service';

@Directive({
  selector: '[veeraNgToCSection]',
  exportAs: 'veeraNgToCSection',
})
export class TableOfContentsSectionDirective implements OnInit, OnDestroy {
  /** Must be equal to a href prop value of a TableOfContentsItemComponent in order to have scroll tracking working */
  @HostBinding('id') @Input('veeraNgToCSection') sectionId!: string;

  private intersectionObservable!: IntersectionObserver;
  private elementToObserve!: Element;

  constructor(
    private elementRef: ElementRef,
    private tocService: TableOfContentsService
  ) {}

  ngOnInit(): void {
    this.elementToObserve = this.elementRef.nativeElement;

    this.intersectionObservable = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.tocService.setCurrentToCSection(this.sectionId);
          }
        });
      },
      { rootMargin: '0px 0px -50% 0px' }
    );
    this.intersectionObservable.observe(this.elementToObserve);
  }

  ngOnDestroy(): void {
    this.intersectionObservable.unobserve(this.elementToObserve);
  }
}
