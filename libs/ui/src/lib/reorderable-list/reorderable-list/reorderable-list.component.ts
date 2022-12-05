import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  ReorderableListStepConfiguration,
  SwapConfigurations,
} from './reorderable-list-step-configuration';
import { ReorderableListItemComponent } from '../reorderable-list-item/reorderable-list-item.component';

@Component({
  selector: 'veera-ng-reorderable-list',
  templateUrl: './reorderable-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReorderableListComponent {
  @Input() stepNameLabel!: string;
  @Input() configurations: ReorderableListStepConfiguration[] = [];

  @ViewChildren(ReorderableListItemComponent)
  children!: QueryList<ReorderableListItemComponent>;

  @HostBinding('class') get getHostClasses(): string {
    return `veera-reorderable-list`;
  }

  swapConfigurations(change: SwapConfigurations): void {
    this.swapSteps(this.configurations, change.index1, change.index2);
    this.configurations.forEach(
      (stepConfig, index) => (stepConfig.index = index)
    );
  }

  removeStep(index: number): void {
    this.configurations.splice(index, 1);
    this.configurations.forEach(
      (stepConfig, index) => (stepConfig.index = index)
    );
    this.children.forEach((child) => child.markForCheck());
  }

  getOrderNr(configuration: ReorderableListStepConfiguration): number {
    return configuration.index + 1;
  }

  private swapSteps(
    configurations: ReorderableListStepConfiguration[],
    index1: number,
    index2: number
  ) {
    const tempStepConfiguration = configurations[index1];
    configurations[index1] = configurations[index2];
    configurations[index2] = tempStepConfiguration;
  }
}
