import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  HostBinding,
  Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'veera-ng-reorderable-list',
  template: `
    <ng-container *ngFor="let item of items">
      <ng-container
        *ngTemplateOutlet="templateRef; context: { $implicit: item }"
      ></ng-container>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReorderableListComponent {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  @Input() items!: any[];
  @ContentChild(TemplateRef) templateRef!: TemplateRef<never>;

  @HostBinding('class') get getHostClasses(): string {
    return `veera-reorderable-list`;
  }
}
