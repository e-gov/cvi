import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostBinding,
  OnDestroy,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { TabComponent } from './tab.component';
import { merge, Subscription } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'cvi-ng-tab-group',
  templateUrl: './tab-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabGroupComponent implements AfterViewInit, OnDestroy {
  @ContentChildren(TabComponent) allTabs!: QueryList<TabComponent>;

  /** Emitter for notifying of the active tab changes */
  @Output() activeTabChange = new EventEmitter<number>();

  @HostBinding('class') get hostClasses(): string {
    return 'cvi-tab-group';
  }

  activeIndex = 0;

  /** @internal */
  baseId = 'tabgroup-' + uuidv4();

  /** @internal */
  private tabChangesSubscription = Subscription.EMPTY;
  @ViewChildren('tabButton') tabButtons!: QueryList<
    ElementRef<HTMLButtonElement>
  >;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.tabChangesSubscription = merge(
      ...this.allTabs.map((tab) => tab._stateChanges)
    ).subscribe(() => this.cdRef.markForCheck());

    this.activeTabChange.emit(this.activeIndex);
  }

  ngOnDestroy() {
    this.tabChangesSubscription.unsubscribe();
  }

  makeActive(index: number) {
    if (this.activeIndex !== index) {
      this.activeIndex = index;
      this.activeTabChange.emit(this.activeIndex);
      this.cdRef.detectChanges();
    }
  }

  updateButtonFocus(): void {
    this.tabButtons.get(this.activeIndex)?.nativeElement.focus();
  }

  makeActivePrev(event: Event) {
    event.preventDefault();
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = this.allTabs.length - 1;
    }
    this.activeTabChange.emit(this.activeIndex);

    this.updateButtonFocus();
  }

  makeActiveNext(event: Event) {
    event.preventDefault();
    if (this.activeIndex < this.allTabs.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0;
    }
    this.activeTabChange.emit(this.activeIndex);

    this.updateButtonFocus();
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
