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
  ViewChild,
} from '@angular/core';
import { TabComponent } from './tab.component';
import { merge, Subscription } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'cvi-ng-tabs',
  templateUrl: './tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements AfterViewInit, OnDestroy {
  @Input() bindValue?: string;
  @Input() bindLabel?: string;
  @ContentChildren(TabComponent) allItems!: QueryList<TabComponent>;

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
  isDropdownOpen = false;

  @ViewChild('dropdownButton', { static: true })
  dropdownButton?: ElementRef<HTMLInputElement>;

  @ViewChildren('dropdownItemButton') dropdownItemButtons!: QueryList<
    ElementRef<HTMLButtonElement>
  >;

  @ViewChildren('tabButton') tabButtons!: QueryList<
    ElementRef<HTMLButtonElement>
  >;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.tabChangesSubscription = merge(
      ...this.allItems.map((tab) => tab._stateChanges)
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
      this.updateTabButtonFocus();
    }
  }

  makeActivePrev(currentIndex: number) {
    let newIndex = this.allItems.length - 1;
    if (this.activeIndex > 0) {
      newIndex = currentIndex - 1;
    }
    this.makeActive(newIndex);
  }

  makeActiveNext(currentIndex: number) {
    let newIndex = 0;
    if (this.activeIndex < this.allItems.length - 1) {
      newIndex = currentIndex + 1;
    }
    this.makeActive(newIndex);
  }

  updateTabButtonFocus(): void {
    this.tabButtons.get(this.activeIndex)?.nativeElement.focus();
  }

  isTabSelected(tabIndex: number): boolean {
    return this.activeIndex === tabIndex;
  }

  getActiveTabTitle() {
    const activeTab = this.allItems.get(this.activeIndex);
    if (!activeTab) {
      throw new Error(`no tab exists with index ${this.activeIndex}`);
    }

    return activeTab.title;
  }

  getActiveTabContent() {
    const activeTab = this.allItems.get(this.activeIndex);
    if (!activeTab) {
      throw new Error(`no tab exists with index ${this.activeIndex}`);
    }

    return activeTab.content;
  }

  open() {
    this.isDropdownOpen = true;
  }

  close() {
    if (!this.isDropdownOpen) {
      return;
    }

    this.isDropdownOpen = false;
  }

  handleArrowButtonClick(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();

    if (this.isDropdownOpen) {
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
      this.dropdownItemButtons.get(this.focusIndex)?.nativeElement.focus();
      event.preventDefault();
      this.focusPreviousDropdownButton();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.focusNextDropdownButton();
      this.dropdownItemButtons.get(this.focusIndex)?.nativeElement.focus();
    } else if (event.key === 'Escape') {
      if (this.isDropdownOpen) {
        event.preventDefault();
        this.close();
        this.dropdownButton?.nativeElement.focus();
      }
    }
  }

  focusNextDropdownButton() {
    if (this.focusIndex < this.dropdownItemButtons.length - 1) {
      this.focusIndex++;
    } else {
      this.focusIndex = 0;
    }
  }

  focusPreviousDropdownButton() {
    if (this.focusIndex > 0) {
      this.focusIndex--;
    } else {
      this.focusIndex = this.dropdownItemButtons.length - 1;
    }
  }
}
