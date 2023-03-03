import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Input,
  OnInit,
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

  constructor(private readonly injector: Injector) {}

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
