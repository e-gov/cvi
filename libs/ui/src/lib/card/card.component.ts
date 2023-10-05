import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  HostBinding,
  Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'cvi-ng-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() headers!: any[];
  @Input() data!: any[];
  @ContentChild('body') body: TemplateRef<any> | undefined;

  @HostBinding('class') get getHostClasses(): string {
    return 'cvi-card';
  }
}
