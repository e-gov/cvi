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
  Input,
  HostListener,
} from '@angular/core';
import { TabComponent } from './tab.component';
import { merge, Subscription } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'cvi-ng-tabs',
  templateUrl: './tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CviTabsComponent implements AfterViewInit, OnDestroy {
  @Input() bindValue?: string;
  @Input() bindLabel?: string;
  @ContentChildren(TabComponent) allTabs!: QueryList<TabComponent>;

  @Output() activeTabChange = new EventEmitter<number>();

  @HostBinding('class') get hostClasses(): string {
    return 'cvi-tabs';
  }

  activeIndex = 0;
  focusIndex = 0;

  /** @internal */
  baseId = 'tabgroup-' + uuidv4();

  /** @internal */
  private tabChangesSubscription = Subscription.EMPTY;
  isOpen = false;

  @ViewChildren('menuButton') tabButtons!: QueryList<
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
      this.focusIndex = index;
      this.activeTabChange.emit(this.activeIndex);
      this.cdRef.detectChanges();
      this.close();
    }
  }

  isTabSelected(tabIndex: number): boolean {
    return this.activeIndex === tabIndex;
  }

  getActiveTabTitle() {
    const activeTab = this.allTabs.get(this.activeIndex);
    if (!activeTab) {
      throw new Error(`no tab exists with index ${this.activeIndex}`);
    }

    return activeTab.title;
  }

  getActiveTabContent() {
    const activeTab = this.allTabs.get(this.activeIndex);
    if (!activeTab) {
      throw new Error(`no tab exists with index ${this.activeIndex}`);
    }

    return activeTab.content;
  }

  open() {
    this.isOpen = true;
  }

  close() {
    if (!this.isOpen) {
      return;
    }

    this.isOpen = false;
  }

  handleArrowButtonClick(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();

    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside() {
    this.close();
  }

  @HostListener('keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      this.tabButtons.get(this.focusIndex)?.nativeElement.focus();
      event.preventDefault();
      this.focusPreviousButton();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.focusNextButton();
      this.tabButtons.get(this.focusIndex)?.nativeElement.focus();
    }
  }

  focusNextButton() {
    if (this.focusIndex < this.tabButtons.length - 1) {
      this.focusIndex++;
    } else {
      this.focusIndex = 0;
    }
  }

  focusPreviousButton() {
    if (this.focusIndex > 0) {
      this.focusIndex--;
    } else {
      this.focusIndex = this.tabButtons.length - 1;
    }
  }
}
