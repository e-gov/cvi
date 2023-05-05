/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ReorderableListComponent } from './reorderable-list.component';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SwapReorderableListItems } from '../swap-reorderable-list-items';
import { FormsModule } from '@angular/forms';
import notes from './reorderable-list.component.md';

class ReorderableListExampleBaseComponent {
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

@Component({
  selector: 'cvi-ng-reorderable-list-example',
  templateUrl: './example-templates/reorderable-list-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class ReorderableListExampleComponent
  extends ReorderableListExampleBaseComponent
  implements OnInit
{
  ngOnInit(): void {
    this.items = [
      { index: 0, value: 'Me as well' },
      { index: 1, value: 'And so am I' },
      { index: 2, value: 'I am a reorderable item' },
    ];
  }
}

@Component({
  selector: 'cvi-ng-reorderable-list-single-form-item-example',
  templateUrl:
    './example-templates/reorderable-list-single-form-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class ReorderableListSingleFormItemComponent
  extends ReorderableListExampleBaseComponent
  implements OnInit
{
  ngOnInit(): void {
    this.items = [
      { index: 0, title: 'Submission of application' },
      { index: 1, title: 'Confirmation of time and place' },
      { index: 2, title: 'Getting married' },
      { index: 3, title: 'Application for ID card and passport' },
      { index: 4, title: 'Receiving the ID card and passport' },
    ];
  }
}

@Component({
  selector: 'cvi-ng-reorderable-list-multiple-form-items-example',
  templateUrl:
    './example-templates/reorderable-list-multiple-form-items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class ReorderableListMultipleFormItemsComponent
  extends ReorderableListExampleBaseComponent
  implements OnInit
{
  ngOnInit(): void {
    this.items = [
      {
        index: 0,
        field1: 'Some value',
        field2: 'Another value',
        field3: 'And another one',
        field4: 'And yet another one',
        field5: 'The final one, I swear',
      },
      {
        index: 1,
        field1: 'Sorry, here is another item',
        field2: 'With another value',
        field3: 'And another',
        field4: 'Second to last value',
        field5: 'THE last one :)',
      },
    ];
  }
}

@Component({
  selector: 'cvi-ng-reorderable-list-multiple-tracks-and-form-items-example',
  templateUrl:
    './example-templates/reorderable-list-multiple-tracks-and-form-items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class ReorderableListMultipleTracksAndFormItemsComponent
  extends ReorderableListExampleBaseComponent
  implements OnInit
{
  ngOnInit(): void {
    this.items = [
      {
        index: 0,
        track1Field1: 'A value in the first track',
        track1Field2: 'Something important',
        track1Field3: '1234567890',
        track2Field1: 'Now this is the second track',
        track2Field2: 'Qwerty',
        singleField:
          'Here you can write a lot ... or as long as a lot is less that 100 characters',
      },
    ];
  }
}

export default {
  title: 'Angular/Reorderable list',
  component: ReorderableListComponent,
  parameters: {
    layout: 'padded',
    notes,
  },
  decorators: [
    moduleMetadata({
      imports: [FormsModule],
      declarations: [
        ReorderableListExampleComponent,
        ReorderableListSingleFormItemComponent,
        ReorderableListMultipleFormItemsComponent,
        ReorderableListMultipleTracksAndFormItemsComponent,
      ],
    }),
  ],
} as Meta<ReorderableListComponent>;

const Template: Story<ReorderableListExampleComponent> = (
  args: ReorderableListExampleComponent
) => ({
  props: args,
  template: `
    <cvi-ng-reorderable-list-example>
    </cvi-ng-reorderable-list-example>
  `,
});

export const Default = Template.bind({});
Default.args = {};

const ReorderableListSingleFormItemTemplate: Story<
  ReorderableListSingleFormItemComponent
> = (args: ReorderableListSingleFormItemComponent) => ({
  props: args,
  template: `
    <cvi-ng-reorderable-list-single-form-item-example>
    </cvi-ng-reorderable-list-single-form-item-example>
  `,
});

export const ReorderableListSingleFormItem =
  ReorderableListSingleFormItemTemplate.bind({});
ReorderableListSingleFormItem.storyName = 'Single form item';
ReorderableListSingleFormItem.args = {};

const ReorderableListMultipleFormItemsTemplate: Story<
  ReorderableListMultipleFormItemsComponent
> = (args: ReorderableListMultipleFormItemsComponent) => ({
  props: args,
  template: `
    <cvi-ng-reorderable-list-multiple-form-items-example>
    </cvi-ng-reorderable-list-multiple-form-items-example>
  `,
});

export const ReorderableListMultipleFormItems =
  ReorderableListMultipleFormItemsTemplate.bind({});
ReorderableListMultipleFormItems.storyName = 'A track with multiple form items';
ReorderableListMultipleFormItems.args = {};

const ReorderableListMultipleTracksAndFormItemsTemplate: Story<
  ReorderableListMultipleTracksAndFormItemsComponent
> = (args: ReorderableListMultipleTracksAndFormItemsComponent) => ({
  props: args,
  template: `
    <cvi-ng-reorderable-list-multiple-tracks-and-form-items-example>
    </cvi-ng-reorderable-list-multiple-tracks-and-form-items-example>
  `,
});

export const ReorderableListMultipleTracksAndFormItems =
  ReorderableListMultipleTracksAndFormItemsTemplate.bind({});
ReorderableListMultipleTracksAndFormItems.storyName =
  'Multiple tracks with multiple form items, and a standalone form item';
ReorderableListMultipleTracksAndFormItems.parameters = {
  // Disabling Chromatic because cvi-ng-textarea triggers a visual change on every build
  chromatic: { disableSnapshot: true },
};
