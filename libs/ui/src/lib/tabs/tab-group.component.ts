import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'veera-ng-tab-group',
  templateUrl: './tab-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabGroupComponent {
  @ContentChildren(TabComponent) allTabs!: QueryList<TabComponent>;

  activeIndex = 0;

  makeActive(index: number) {
    this.activeIndex = index;
  }

  getActiveTabContent() {
    const activeTab = this.allTabs.get(this.activeIndex);
    if (!activeTab) {
      throw new Error(`no tab exists with index ${this.activeIndex}`);
    }

    return activeTab.content;
  }
}
