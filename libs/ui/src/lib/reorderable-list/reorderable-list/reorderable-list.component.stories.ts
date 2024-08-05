import {
  Meta,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';
import { ReorderableListComponent } from './reorderable-list.component';
import notes from './reorderable-list.component.md';
import { ReorderableListExampleComponent } from './example-components/reorderable-list-example/reorderable-list-example.component';
import { ReorderableListSingleFormItemComponent } from './example-components/reorderable-list-single-form-item/reorderable-list-single-form-item.component';
import { ReorderableListMultipleFormItemsComponent } from './example-components/reorderable-list-multiple-form-items/reorderable-list-multiple-form-items.component';
import { ReorderableListMultipleTracksAndFormItemsComponent } from './example-components/reorderable-list-multiple-tracks-and-form-items/reorderable-list-multiple-tracks-and-form-items.component';
import { ReorderableListExamplesModule } from './example-components/reorderable-list-examples.module';

const renderComponent = (component: any) => {
  return componentWrapperDecorator(component, ({ args }) => {
    return args;
  });
};

export default {
  title: 'Angular/Reorderable list',
  component: ReorderableListComponent,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: notes,
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [ReorderableListExamplesModule],
    }),
  ],
} as Meta<ReorderableListComponent>;

export const Default = {
  decorators: [renderComponent(ReorderableListExampleComponent)],
};

export const ReorderableListSingleFormItem = {
  decorators: [renderComponent(ReorderableListSingleFormItemComponent)],
  name: 'Single form item',
};

export const ReorderableListMultipleFormItems = {
  decorators: [renderComponent(ReorderableListMultipleFormItemsComponent)],
  name: 'A track with multiple form items',
};

export const ReorderableListMultipleTracksAndFormItems = {
  decorators: [
    renderComponent(ReorderableListMultipleTracksAndFormItemsComponent),
  ],
  name: 'Multiple tracks with multiple form items, and a standalone form item',

  parameters: {
    // Disabling Chromatic because cvi-ng-textarea triggers a visual change on every build
    chromatic: { disableSnapshot: true },
  },
};
