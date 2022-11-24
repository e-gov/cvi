import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  OnDestroy,
  QueryList,
} from '@angular/core';
import { TabComponent } from './tab.component';
import { merge, Subscription } from 'rxjs';

@Component({
  selector: 'veera-ng-tab-group',
  templateUrl: './tab-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabGroupComponent implements AfterViewInit, OnDestroy {
  @ContentChildren(TabComponent) allTabs!: QueryList<TabComponent>;

  activeIndex = 0;

  private tabChangesSubscription = Subscription.EMPTY;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.tabChangesSubscription = merge(
      ...this.allTabs.map((tab) => tab._stateChanges)
    ).subscribe(() => this.cd.markForCheck());
  }

  ngOnDestroy() {
    this.tabChangesSubscription.unsubscribe();
  }

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
