/* eslint-disable @typescript-eslint/no-explicit-any */
import { SwapReorderableListItems } from '../../swap-reorderable-list-items';

export class ReorderableListExampleBase {
  items: any[] = [];

  addNewItem(): void {
    this.items = [...this.items, { index: this.items.length } as any];
  }

  isNotFirstItem(item: any): boolean {
    return this.items.indexOf(item) !== 0;
  }

  isNotLastItem(item: any): boolean {
    return this.items.indexOf(item) !== this.items.length - 1;
  }

  swapSteps(change: SwapReorderableListItems): void {
    const itemsTemp = this.items[change.index1];
    this.items[change.index1] = this.items[change.index2];
    this.items[change.index2] = itemsTemp;
  }

  removeStep(item: any): void {
    this.items.splice(this.getIndex(item), 1);
    this.items.forEach((stepConfig, index) => (stepConfig.index = index));
  }

  getIndex(item: any): number {
    return this.items.indexOf(item);
  }

  getOrderNr(item: any): number {
    return this.getIndex(item) + 1;
  }

  getStepId(item: any, i: number): string {
    return 'step-' + this.getOrderNr(item) + '-form-item' + i;
  }
}
