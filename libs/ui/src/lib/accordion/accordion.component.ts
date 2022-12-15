import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  HostBinding,
  Input,
  OnDestroy,
  QueryList,
} from '@angular/core';
import { AccordionItemDirective } from './directives/accordion-item.directive';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'veera-ng-accordion',
  templateUrl: './accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('contentExpansion', [
      state(
        'expanded',
        style({ height: '*', opacity: 1, visibility: 'visible' })
      ),
      state(
        'collapsed',
        style({ height: '0px', opacity: 0, visibility: 'hidden' })
      ),
      transition(
        'expanded <=> collapsed',
        animate('200ms cubic-bezier(.37,1.04,.68,.98)')
      ),
    ]),
  ],
})
export class AccordionComponent implements AfterViewInit, OnDestroy {
  @Input() expandedItems: number[] = [];
  @Input() singleOpen = true;

  @ContentChildren(AccordionItemDirective)
  accordionItemDirectives!: QueryList<AccordionItemDirective>;

  private items = new BehaviorSubject<AccordionItemDirective[]>([]);
  items$ = this.items.asObservable();
  changesSubscription = new Subscription();

  @HostBinding('class') get getHostClasses(): string {
    return `veera-accordion`;
  }

  ngAfterViewInit(): void {
    this.changesSubscription = this.accordionItemDirectives?.changes.subscribe(
      () => this.items.next(this.accordionItemDirectives.toArray())
    );
  }

  getToggleState(index: number) {
    return this.toggle.bind(this, index);
  }

  itemInExpanded(i: number): boolean {
    return this.expandedItems.indexOf(i) >= 0;
  }

  toggle(index: number): void {
    if (this.expandedItems.includes(index)) {
      this.expandedItems = this.expandedItems.filter((i) => i !== index);
    } else {
      if (this.singleOpen) {
        this.expandedItems = [];
      }
      this.expandedItems = [...this.expandedItems, index];

      const itemToScrollTo = document.getElementById('accordion-item-' + index);
      if (itemToScrollTo) {
        itemToScrollTo.scrollIntoView(true);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.changesSubscription) {
      this.changesSubscription.unsubscribe();
    }
  }
}
