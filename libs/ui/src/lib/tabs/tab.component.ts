import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'veera-ng-tab',
  templateUrl: './tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent implements OnChanges, OnDestroy {
  @Input() title: string | undefined;
  @ViewChild(TemplateRef, { static: true }) _content!: TemplateRef<any>;

  _stateChanges = new Subject<void>();

  get content() {
    return this._content;
  }

  ngOnChanges() {
    this._stateChanges.next();
  }

  ngOnDestroy() {
    this._stateChanges.complete();
  }
}
