import {
  ChangeDetectionStrategy,
  Component, ElementRef, HostListener,
  Injector,
  Input,
  OnInit, ViewChild,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { IconComponent } from '../icons/icon/icon.component';
import { LabeledIconComponent } from '../icons/labeled-icon/labeled-icon.component';
import { TrackComponent } from '../track/track.component';

@Component({
  selector: 'cvi-ng-html-section',
  templateUrl: './html-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtmlSectionComponent implements OnInit {
  @Input() html?: string;
  @Input() sanitize = true;
  @ViewChild('htmlSectionRef') htmlSectionRef?: ElementRef;

  constructor(private readonly injector: Injector) {}

  @HostListener('document:click') onClick() {
    if (
      this.htmlSectionRef &&
      this.htmlSectionRef.nativeElement.innerHTML !== this.html
    ) {
      this.html = this.htmlSectionRef.nativeElement.innerHTML;
    }
  }

  ngOnInit() {
    this.createCustomElements([
      [LabeledIconComponent, 'cvi-web-labeled-icon'],
      [IconComponent, 'cvi-web-icon'],
      [TrackComponent, 'cvi-web-track'],
    ]);
  }

  private createCustomElements(elements: [any, string][]) {
    elements
      .filter(([, name]) => !customElements.get(name))
      .forEach(([component, name]) => {
        const element = createCustomElement(component, {
          injector: this.injector,
        });
        customElements.define(name, element);
      });
  }
}
