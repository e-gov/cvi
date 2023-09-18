import {Meta, Story} from '@storybook/angular';
import {concatMap, delay, from, of} from 'rxjs';
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
      control: {type: 'inline-radio'},
    },
    severity: {
      name: 'Severity',
      options: ['success', 'error', 'info', 'none'],
      control: {type: 'select'},
    },
    size: {
      name: 'Size',
      options: ['s', 'm'],
      control: {type: 'inline-radio'},
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
    size: 's',
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
      [size]="size"
      [iconName]="iconName"
      [progressPercentage]="progressPercentage"
    >4</cvi-ng-circle>
  `,
});

export const Default = Template.bind({});

export const WithLightTheme = Template.bind({});
WithLightTheme.parameters = {
  backgrounds: {default: 'Gray'}
};
WithLightTheme.args = {
  theme: 'light',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  iconName: 'close',
};

const TemplateProgress: Story<CircleComponent> = (args: CircleComponent) => ({
  props: {
    ...args,
    progress$: from([20, 40, 60, 80, 100]).pipe(
      concatMap((item) => of(item).pipe(delay(800)))
    ),
  },
  template: `
    <ng-container *ngIf="(progress$ | async) as progress">
      <cvi-ng-circle
        [theme]="theme"
        [severity]="severity"
        [size]="size"
        [iconName]="iconName"
        [progressPercentage]="progress"
      >{{ progress }}</cvi-ng-circle>
    </ng-container>
  `,
});
export const WithProgress = TemplateProgress.bind({});

const CustomBorderTemplate: Story<CircleComponent> = (
  args: CircleComponent
) => ({
  props: {
    ...args,
  },
  template: `
    <cvi-ng-circle
      [theme]="theme"
      [severity]="severity"
      [size]="size"
      [iconName]="iconName"
      [progressPercentage]="progressPercentage"
      style="--cvi-circle-border-color: --cvi-color-sea-green-10"
    >4</cvi-ng-circle>
  `,
});

export const WithCustomBorderColor = CustomBorderTemplate.bind({});
WithCustomBorderColor.args = {
  theme: 'light',
  severity: 'success',
};
