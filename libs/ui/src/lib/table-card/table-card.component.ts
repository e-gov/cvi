import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  HostBinding,
  Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'cvi-ng-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableCardComponent {
  @Input() headers!: any[];
  @Input() data!: any[];
  @ContentChild('body') body: TemplateRef<any> | undefined;

  @HostBinding('class') get getHostClasses(): string {
    return 'cvi-table-card';
  }
}
