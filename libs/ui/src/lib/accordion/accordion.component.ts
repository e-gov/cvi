import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  HostBinding,
  Input,
  QueryList
} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AccordionItemDirective } from './directives/accordion-item.directive';

@Component({
  selector: 'ria-poc-accordion',
  templateUrl: './accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('contentExpansion', [
      state('expanded', style({ height: '*', opacity: 1, visibility: 'visible' })),
      state('collapsed', style({ height: '0px', opacity: 0, visibility: 'hidden' })),
      transition('expanded <=> collapsed',
        animate('200ms cubic-bezier(.37,1.04,.68,.98)')),
    ])
  ]
})
export class AccordionComponent {
  /** Removing this will break the Storybook story due to https://github.com/storybookjs/storybook/issues/18198 */
  /** @internal */
  expandedItems: number[] = [];
  @Input() singleOpen = true;

  @ContentChildren(AccordionItemDirective) items!: QueryList<AccordionItemDirective>;

  @HostBinding('class') get getHostClasses(): string {
    return `veera-accordion`;
  }

  getToggleState(index: number) {
    return this.toggle.bind(this, index);
  };

  itemInExpanded(i: number): boolean {
    return this.expandedItems.indexOf(i) >= 0;
  }

  toggle(index: number): void {
    if (this.expandedItems.includes(index)) {
      this.expandedItems = this.expandedItems.filter(i => i !== index);
    } else {
      if (this.singleOpen) {
        this.expandedItems = [];
      }
      this.expandedItems = [...this.expandedItems, index];
    }
  }
}
