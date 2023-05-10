import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Self,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { fromEvent, merge, Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { takeUntil } from 'rxjs/operators';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import {
  LabelTemplateDirective,
  OptionTemplateDirective,
} from './select-templates.directive';
import { SelectOption } from './select.types';
import { SelectItemsList } from './select-items-list';

export type AddItemFn = (term: string) => unknown | Promise<unknown>;

@Component({
  selector: 'cvi-ng-select',
  templateUrl: './select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent
  implements ControlValueAccessor, OnInit, OnDestroy, OnChanges
{
  @Input() bindValue?: string;
  @Input() bindLabel?: string;

  @Input() set items(items: unknown[]) {
    this.setItems(items);
  }

  @Input() placeholder = '';
  @Input() searchFn?: ((search: string, item: unknown) => boolean) | null =
    null;
  /** This function is mandatory when objects as items are provided */
  @Input() valueFormatFn?: ((item: unknown) => string) | null = null;
  @Input() addItemLabel: string | undefined;
  @Input() addItemFn: AddItemFn | undefined;
  @Input() minTermLength = 0;
  @Input() backgroundDisabled = false;
  @Input() disabled = false;

  /** HTML id passed from FormItem component */
  @Input() htmlId!: string;

  /** Label id passed from FormItem component */
  @Input() labelId!: string;
  @Input() loading = false;
  @Input() loadingLabel = 'Laadimine...';
  @Input() sortItemsFn: ((a: unknown, b: unknown) => number) | undefined;

  @Output() itemChanged = new EventEmitter();

  @ContentChild(LabelTemplateDirective, { read: TemplateRef })
  labelTemplate?: TemplateRef<LabelTemplateDirective>;
  @ContentChild(OptionTemplateDirective, { read: TemplateRef })
  optionTemplate?: TemplateRef<OptionTemplateDirective>;

  @ViewChild('searchInput', { static: true })
  searchInput?: ElementRef<HTMLInputElement>;
  @ViewChild('editButton', { static: true })
  editButton?: ElementRef<HTMLButtonElement>;

  isOpen = false;
  searchTerm: string | null = null;
  itemsList: SelectItemsList;
  searchInputFocused = false;
  focusedOptionIndex: number | null = null;

  private readonly destroy$ = new Subject<void>();
  private readonly select: HTMLElement;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private valueChangedFn: (value: unknown) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched: () => unknown = () => {};

  constructor(
    private zone: NgZone,
    elementRef: ElementRef,
    private cd: ChangeDetectorRef,
    @Optional() @Inject(DOCUMENT) private document: Document,
    @Self() @Optional() public control: NgControl
  ) {
    this.control && (this.control.valueAccessor = this);
    this.select = elementRef.nativeElement;
    this.itemsList = new SelectItemsList(this);
  }

  get invalid(): boolean {
    return this.control ? !!this.control.invalid : false;
  }

  get inputValue(): string | undefined {
    if (this.searchTerm) {
      return this.searchTerm;
    }

    return '';
  }

  get touched(): boolean {
    return this.control ? !!this.control.touched : false;
  }

  get selectedItem(): SelectOption | undefined {
    return this.itemsList.selectedItem;
  }

  get hasValue() {
    return !!this.selectedItem;
  }

  get showAddItem() {
    if (!this.validTerm) {
      return false;
    }

    return !!this.addItemFn;
  }

  get listboxHtmlId() {
    return this.htmlId + '-listbox';
  }

  get focusedItemHtmlId() {
    if (this.isOpen && this.focusedOptionIndex !== null) {
      return this.htmlId + '-listbox-item-' + this.focusedOptionIndex;
    }
    return '';
  }

  ngOnInit(): void {
    this.handleOutsideClick();

    if (this.control?.control) {
      const originalMarkAsTouched = this.control.control.markAsTouched;
      this.control.control.markAsTouched = (args) => {
        originalMarkAsTouched.apply(this.control.control, [args]);
        this.cd.markForCheck();
      };
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sortItemsFn']) {
      const sortFn = changes['sortItemsFn'].currentValue;

      if (sortFn instanceof Function) {
        this.itemsList.sortItems(changes['sortItemsFn'].currentValue);
      }
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

  selectItem(item: SelectOption): void {
    this.itemsList.select(item);

    const selectedValue = this.bindValue
      ? this.itemsList.selectedItem?.value[this.bindValue]
      : this.itemsList.selectedItem?.value;
    this.itemChanged.emit(selectedValue);

    if (typeof this.valueChangedFn === 'function') {
      this.valueChangedFn(selectedValue);
    }

    this.close();
    this.restoreFocusAfterClosing();
  }

  updateFocusedItem(index: number) {
    this.focusedOptionIndex = index;
  }

  focus() {
    // timeout is needed to focus input element when it is hidden and becomes visible again
    setTimeout(() => this.searchInput?.nativeElement.focus());
  }

  focusEditButton() {
    setTimeout(() => this.editButton?.nativeElement.focus());
  }

  blur() {
    this.searchInput?.nativeElement.blur();
  }

  restoreFocusAfterClosing() {
    if (this.backgroundDisabled && this.hasValue) {
      this.focusEditButton();
    } else {
      this.focus();
    }
  }

  handleOpeningWithArrowFromKeyboard() {
    if (!this.isOpen) {
      this.open();
      this.updateFocusedItem(0);
    }
  }

  handleOpeningWithTypingFromKeyboard() {
    if (!this.isOpen) {
      this.open();
    }
  }

  handleClosingFromKeyboard() {
    if (this.isOpen) {
      this.close();
      this.restoreFocusAfterClosing();
    }
  }

  handleMousedown(event: MouseEvent) {
    if (!this.hasValue || !this.backgroundDisabled) {
      const target = event.target as HTMLElement;
      if (target.tagName !== 'INPUT') {
        event.preventDefault();
      }

      this.open();
    }
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

  open() {
    if (!this.disabled) {
      this.isOpen = true;
      this.focus();
    }
  }

  close() {
    if (!this.isOpen) {
      return;
    }

    this.isOpen = false;
    this.searchTerm = null;
    this.itemsList.resetFilteredItems();
    this.focusedOptionIndex = null;

    if (typeof this.onTouched === 'function') {
      this.onTouched();
    }
    this.cd.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.valueChangedFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;

    if (this.disabled) {
      this.close();
    }

    this.cd.markForCheck();
  }

  writeValue(obj: any): void {
    this.itemsList.clearSelection();

    const item = this.itemsList.findItem(obj);
    if (item) {
      this.itemsList.select(item);
    }

    this.cd.markForCheck();
  }

  private handleOutsideClick() {
    if (!this.document) {
      return;
    }

    this.zone.runOutsideAngular(() => {
      merge(
        fromEvent(this.document, 'touchstart', { capture: true }),
        fromEvent(this.document, 'mousedown', { capture: true })
      )
        .pipe(takeUntil(this.destroy$))
        .subscribe((event) => this.checkToClose(event));
    });
  }

  private checkToClose(event: any) {
    if (this.select.contains(event.target)) {
      return;
    }

    this.zone.run(() => this.close());
  }

  filter(term: string) {
    this.searchTerm = term;
    this.itemsList.filter(term);
  }

  private setItems(items: unknown[]) {
    this.itemsList.setItems(items);
  }

  addItem() {
    let item;
    if (this.addItemFn instanceof Function && !!this.searchTerm) {
      item = this.addItemFn(this.searchTerm);
    } else {
      item = this.searchTerm;
    }

    if (item instanceof Promise) {
      item
        .then((result) => this.selectItem(this.itemsList.addItem(result)))
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        .catch(() => {
          this.close();
        });
    } else {
      this.selectItem(this.itemsList.addItem(item));
    }
  }

  private get validTerm() {
    const term = this.searchTerm && this.searchTerm.trim();
    return term && term.length >= this.minTermLength;
  }
}
