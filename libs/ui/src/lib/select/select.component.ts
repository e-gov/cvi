import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { fromEvent, merge, Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { takeUntil } from 'rxjs/operators';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  LabelTemplateDirective,
  OptionTemplateDirective,
} from './select-templates.directive';
import { SelectOption } from './select.types';
import { SelectItemsList } from './select-items-list';

@Component({
  selector: 'veera-ng-select',
  templateUrl: './select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SelectComponent),
    },
  ],
})
export class SelectComponent
  implements ControlValueAccessor, OnInit, OnDestroy, OnChanges
{
  @Input() bindValue?: string;
  @Input() bindLabel?: string;
  @Input() items?: unknown[];
  @Input() placeholder = '';
  @Input() searchFn?: ((search: string, item: unknown) => boolean) | null =
    null;

  @Output() itemChanged = new EventEmitter();

  @ContentChild(LabelTemplateDirective, { read: TemplateRef })
  labelTemplate?: TemplateRef<LabelTemplateDirective>;
  @ContentChild(OptionTemplateDirective, { read: TemplateRef })
  optionTemplate?: TemplateRef<OptionTemplateDirective>;

  @ViewChild('searchInput', { static: true })
  searchInput?: ElementRef<HTMLInputElement>;

  isOpen = false;
  searchTerm: string | null = null;
  itemsList: SelectItemsList;

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
    @Optional() @Inject(DOCUMENT) private document: any
  ) {
    this.select = elementRef.nativeElement;
    this.itemsList = new SelectItemsList(this);
  }

  get selectedItem(): SelectOption | undefined {
    return this.itemsList.selectedItem;
  }

  get hasValue() {
    return !!this.selectedItem;
  }

  ngOnInit(): void {
    this.handleOutsideClick();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.setItems(changes['items'].currentValue || []);
    }
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
  }

  focus() {
    // timeout is needed to focus input element when it is hidden and becomes visible again
    setTimeout(() => this.searchInput?.nativeElement.focus());
  }

  blur() {
    this.searchInput?.nativeElement.blur();
  }

  handleMousedown(event: MouseEvent) {
    if (!this.hasValue) {
      const target = event.target as HTMLElement;
      if (target.tagName !== 'INPUT') {
        event.preventDefault();
      }

      this.open();
    }
  }

  handleArrowClick(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();

    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.isOpen = true;
    this.focus();
  }

  close() {
    this.isOpen = false;
    this.searchTerm = null;
    this.itemsList.resetFilteredItems();

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
    // empty
  }

  writeValue(obj: any): void {
    const item = this.itemsList.findItem(obj);
    if (item) {
      this.itemsList.select(item);
    }
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

  private setItems(items: any[]) {
    this.itemsList.setItems(items);
  }
}
