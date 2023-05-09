import { SelectOption } from './select.types';
import { SelectComponent } from './select.component';

export class SelectItemsList {
  private _filteredItems: SelectOption[] = [];
  private _items: SelectOption[] = [];
  private _selectedItem?: SelectOption;

  constructor(private _select: SelectComponent) {}

  get selectedItem(): SelectOption | undefined {
    return this._selectedItem;
  }

  get selectedItemValue(): string | undefined {
    if (this._selectedItem) {
      if (this._select.valueFormatFn) {
        return this._select.valueFormatFn(this._selectedItem.label);
      } else {
        return this._selectedItem.label;
      }
    }
    return undefined;
  }

  get filteredItems(): SelectOption[] {
    return this._filteredItems;
  }

  get items(): SelectOption[] {
    return this._items;
  }

  select(item: SelectOption) {
    this._selectedItem = item;
  }

  clearSelection() {
    this._selectedItem = undefined;
  }

  setItems(items: unknown[]) {
    this._items = items.map((item) => this.mapItem(item));

    if (this._select.sortItemsFn instanceof Function) {
      const sortFn = this._select.sortItemsFn;

      this._items.sort((a, b) => {
        return sortFn(a.value, b.value);
      });
    }

    this._filteredItems = [...this._items];
  }

  addItem(item: any) {
    const option = this.mapItem(item);
    this._items.push(option);
    this._filteredItems.push(option);

    if (this._select.sortItemsFn instanceof Function) {
      const sortFn = this._select.sortItemsFn;

      this._items.sort((a, b) => {
        return sortFn(a.value, b.value);
      });

      this._filteredItems.sort((a, b) => {
        return sortFn(a.value, b.value);
      });
    }

    return option;
  }

  mapItem(item: any): SelectOption {
    const label = this._select.bindLabel ? item[this._select.bindLabel] : item;

    return {
      label,
      value: item,
    };
  }

  findItem(value: any): SelectOption | undefined {
    return this._items.find((item) => item.value === value);
  }

  filter(term: string): void {
    if (!term) {
      this.resetFilteredItems();
      return;
    }

    if (this._select.searchFn) {
      this._filteredItems = this._items.filter((item) =>
        (this._select.searchFn as any)(term, item.value)
      );
    } else {
      this._filteredItems = this._items.filter((item) =>
        this.defaultSearchFn(term, item)
      );
    }
  }

  resetFilteredItems() {
    if (this._filteredItems.length === this._items.length) {
      return;
    }

    this._filteredItems = [...this._items];
  }

  sortItems(sortFn: (a: unknown, b: unknown) => number) {
    this._items.sort((a, b) => {
      return sortFn(a.value, b.value);
    });

    this._filteredItems.sort((a, b) => {
      return sortFn(a.value, b.value);
    });
  }

  private defaultSearchFn(search: string, option: SelectOption) {
    return option.label.indexOf(search) > -1;
  }
}
