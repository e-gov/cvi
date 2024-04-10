import { Meta, componentWrapperDecorator } from '@storybook/angular';
import { concatMap, delay, from, of } from 'rxjs';
import { CircleComponent } from './circle.component';
import notes from './circle.component.md';
import { storybookIconsNames } from '../icons/storybook-icons';

const wrapperDecorators = [
  componentWrapperDecorator(CircleComponent, ({ args }) => {
    return args;
  }),
];

export default {
  title: 'Angular/Circle',
  component: CircleComponent,
  parameters: {
    notes,
    layout: 'centered',
    backgrounds: {
      default: 'Gray',
    },
  },
  argTypes: {
    theme: {
      name: 'Theme',
      control: { type: 'inline-radio' },
    },
    severity: {
      name: 'Severity',
      control: { type: 'inline-radio' },
    },
    size: {
      name: 'Size',
      control: { type: 'inline-radio' },
    },
    iconName: {
      name: 'Icon name',
      options: storybookIconsNames,
      control: { type: 'select' },
    },
    progressPercentage: {
      name: 'Progress',
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    content: {
      name: 'Content',
      table: {
        category: 'Playground',
      },
    },
  },
  args: {
    theme: 'dark',
    severity: 'none',
    size: 's',
    iconName: undefined,
    progressPercentage: undefined,
    content: '4',
  },
} as Meta<CircleComponent>;

export const Default = {
  render: (args: CircleComponent) => ({
    props: args,
    template: `{{ content }}`,
  }),
  decorators: wrapperDecorators,
};

export const WithLightTheme = {
  ...Default,
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
  args: {
    theme: 'light',
  },
};

export const WithIcon = {
  ...Default,
  args: {
    iconName: 'close',
  },
};

export const WithProgress = {
  render: (args: CircleComponent) => ({
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
  }),
};

export const WithCustomBorderColor = {
  render: (args: CircleComponent) => ({
    props: args,
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
  }),
  args: {
    theme: 'light',
    severity: 'success',
  },
};
