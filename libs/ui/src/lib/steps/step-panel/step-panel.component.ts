import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnDestroy,
} from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'veera-ng-step-panel',
  templateUrl: './step-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepPanelComponent implements OnDestroy {
  _title!: string;
  @Input()
  set title(title: string) {
    this._title = title;
    this.titleChangeSubject.next(title);
  }
  get title() {
    return this._title;
  }
  public titleChangeSubject = new ReplaySubject<string>(1);

  @HostBinding('class') get getHostClasses(): string {
    return 'veera-steps__content-panel';
  }

  ngOnDestroy(): void {
    this.titleChangeSubject.complete();
  }
}
