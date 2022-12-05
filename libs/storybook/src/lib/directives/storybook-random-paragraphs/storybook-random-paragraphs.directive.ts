import {
  Renderer2,
  ElementRef,
  Directive,
  AfterViewInit,
  Input,
} from '@angular/core';
import { storybookRandomParagraphs } from './storybook-random-paragraphs';

@Directive({
  selector: '[veeraNgStorybookRandomParagraphs]',
})
export class StorybookRandomParagraphsDirective implements AfterViewInit {
  @Input('veeraNgStorybookRandomParagraphs') minParagraphs = 5;

  maxParagraphs = 20;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

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
