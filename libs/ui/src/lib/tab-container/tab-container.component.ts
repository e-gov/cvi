import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VeeraTab } from './veera-tab.model';

@Component({
  selector: 'veera-ng-tab-container',
  templateUrl: './tab-container.component.html',
})
export class TabContainerComponent {
  @Input() tabs: VeeraTab[] = [];
  @Output() activeTabChanged: EventEmitter<number> = new EventEmitter<number>();

  selectTab(id: number): void {
    this.tabs = this.tabs.map((t: VeeraTab) => ({ ...t, active: t.id === id }));
    this.activeTabChanged.next(id);
  }
}
