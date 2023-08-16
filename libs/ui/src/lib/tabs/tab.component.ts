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
import { CviIconName } from '@egov/cvi-icons';
import { LabeledIconPosition } from '../icons/icon-position';
import { Gap } from '../track/track';

@Component({
  selector: 'cvi-ng-tab',
  templateUrl: './tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent implements OnChanges, OnDestroy {
  @Input() title: string | undefined;
  @Input() iconName!: CviIconName | undefined;
  @Input() iconPosition: LabeledIconPosition = 'before';
  @Input() svgClass = '';
  @Input() iconHeight = 20;
  @Input() gap: Gap = 2;

  @ViewChild(TemplateRef, { static: true }) _content!: TemplateRef<any>;

  /** @internal */
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
