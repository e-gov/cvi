import {Meta, Story} from '@storybook/angular';
import {CircleComponent} from './circle.component';
import notes from './circle.component.md';
import {storybookIconsNames} from '../icons/storybook-icons';

export default {
  title: 'Angular/Circle',
  parameters: {notes, layout: 'centered'},
  argTypes: {
    theme: {
      name: 'Theme',
      options: ['light', 'dark'],
      control: {type: 'select'},
    },
    severity: {
      name: 'Severity',
      options: ['success', 'error', 'info', 'none'],
      control: {type: 'select'},
    },
    iconName: {
      name: 'Icon name',
      options: storybookIconsNames,
      control: {type: 'select'},
    },
    progressPercentage: {
      name: 'Progress',
      control: {type: 'range', min: 0, max: 100, step: 1},
    },
  },
  args: {
    theme: 'dark',
    severity: 'none',
    iconName: undefined,
    progressPercentage: undefined,
  },
} as Meta<CircleComponent>;

const Template: Story<CircleComponent> = (args: CircleComponent) => ({
  props: {
    ...args,
  },
  template: `
    <cvi-ng-circle
      [theme]="theme"
      [severity]="severity"
      [iconName]="iconName"
      [progressPercentage]="progressPercentage"
    ></cvi-ng-circle>
  `,
});

export const Default = Template.bind({});

const TemplateLight: Story<CircleComponent> = (args: CircleComponent) => ({
  props: {
    ...args,
  },
  template: `
    <div class="container">
      <cvi-ng-circle
        [theme]="theme"
        [severity]="severity"
      ></cvi-ng-circle>
    </div>
  `,
  styles: [
    `.container {
      width: 50px;
      height: 50px;
      background-color: var(--cvi-color-black-coral-2);
      display: flex;
      justify-content: center;
      align-items: center;
    }`,
  ],
});

export const WithLightTheme = TemplateLight.bind({});
WithLightTheme.args = {
  theme: 'light',
};

export const WithProgress = Template.bind({});
WithProgress.args = {
  progressPercentage: 40,
};

const CustomStyleTemplate: Story<CircleComponent> = (
  args: CircleComponent
) => ({
  props: args,
  template: `
    <cvi-ng-circle
    [theme]="theme"
    [severity]="severity"
    style="--border-color: --cvi-color-sea-green-10"
  ></cvi-ng-circle>
  `,
});

export const WithCustomBorderColor = CustomStyleTemplate.bind({});
