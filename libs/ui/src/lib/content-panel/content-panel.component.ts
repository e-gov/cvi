import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'veera-ng-content-panel',
  templateUrl: './content-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentPanelComponent {
  @Input() title = '';
  @HostBinding('class') get getHostClasses(): string {
    return `veera-content-panel`;
  }
}
