import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'cvi-ng-content-panel',
  templateUrl: './content-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentPanelComponent {
  @Input() title = '';
  @HostBinding('class') get getHostClasses(): string {
    return `cvi-content-panel`;
  }
}
