import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  HostBinding,
  OnDestroy,
  QueryList,
} from '@angular/core';
import { TabComponent } from './tab.component';
import { merge, Subscription } from 'rxjs';

@Component({
  selector: 'cvi-ng-tab-group',
  templateUrl: './tab-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabGroupComponent implements AfterViewInit, OnDestroy {
  @ContentChildren(TabComponent) allTabs!: QueryList<TabComponent>;
  @HostBinding('class') get hostClasses(): string {
    return 'cvi-tab-group';
  }

  activeIndex = 0;

  /** @internal */
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

  isTabSelected(tabIndex: number): boolean {
    return this.activeIndex === tabIndex;
  }

  getActiveTabContent() {
    const activeTab = this.allTabs.get(this.activeIndex);
    if (!activeTab) {
      throw new Error(`no tab exists with index ${this.activeIndex}`);
    }

    return activeTab.content;
  }
}
