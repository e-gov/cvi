import {
  Renderer2,
  ElementRef,
  Directive,
  AfterViewInit,
  Input,
  HostBinding,
} from '@angular/core';
import { storybookRandomParagraphs } from './storybook-random-paragraphs';

@Directive({
  selector: '[cviNgStorybookRandomParagraphs]',
})
export class StorybookRandomParagraphsDirective implements AfterViewInit {
  @Input('cviNgStorybookRandomParagraphs') minParagraphs = 5;
  // Ignore the generated DOM in Chromatic because it changes on every render and triggers a false visual change https://www.chromatic.com/docs/ignoring-elements#ignore-dom-elements
  @HostBinding('attr.data-chromatic') chromaticIgnoreAttr = 'ignore';

  maxParagraphs = 20;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    const randomParagraphsCount = Math.floor(
      Math.random() * (this.maxParagraphs - this.minParagraphs) +
        this.minParagraphs
    );
    let text = '';
    for (let index = 0; index < randomParagraphsCount; index++) {
      text += this.getRandomParagraph();
    }

    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', text);
  }

  getRandomParagraph(): string {
    return `<p>${
      storybookRandomParagraphs[
        Math.floor(Math.random() * storybookRandomParagraphs.length)
      ]
    }</p>`;
  }
}
