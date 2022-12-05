import { Meta, Story } from '@storybook/angular';
import { ReorderableListComponent } from './reorderable-list.component';

export default {
  title: 'Angular/Reorderable list',
  component: ReorderableListComponent,
  parameters: {
    layout: 'padded',
  },
  args: {
    stepNameLabel: 'Step name',
    configurations: [
      { index: 0, title: 'Submission of application' },
      { index: 1, title: 'Confirmation of time and place' },
      { index: 2, title: 'Getting married' },
      { index: 3, title: 'Application for ID card and passport' },
      { index: 4, title: 'Receiving the ID card and passport' },
    ],
  },
} as Meta<ReorderableListComponent>;

const Template: Story<ReorderableListComponent> = (
  args: ReorderableListComponent
) => ({
  props: args,
  template: `
    <veera-ng-reorderable-list [stepNameLabel]="stepNameLabel"
                               [configurations]="configurations">
    </veera-ng-reorderable-list>
  `,
});

export const Default = Template.bind({});
Default.args = {};
