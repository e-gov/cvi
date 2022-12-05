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

  get filteredItems(): SelectOption[] {
    return this._filteredItems;
  }

  get items(): SelectOption[] {
    return this._items;
  }

  select(item: SelectOption) {
    this._selectedItem = item;
  }

  setItems(items: unknown[]) {
    this._items = items.map((item) => this.mapItem(item));
    this._filteredItems = [...this._items];
  }

  addItem(item: any) {
    const option = this.mapItem(item);
    this._items.push(option);
    this._filteredItems.push(option);
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

  private defaultSearchFn(search: string, option: SelectOption) {
    return option.label.indexOf(search) > -1;
  }
}
