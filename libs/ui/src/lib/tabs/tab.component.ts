import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'veera-ng-tab',
  templateUrl: './tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
  @Input() title: string | undefined;
  @ViewChild(TemplateRef, { static: true }) _content!: TemplateRef<any>;

  get content() {
    return this._content;
  }
}
