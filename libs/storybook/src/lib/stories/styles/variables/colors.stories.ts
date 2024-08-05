import { Meta, StoryFn } from '@storybook/angular';

export default {
  title: 'Styles/Available variables/Colors',
  parameters: {
    viewMode: 'docs',
    layout: 'fullscreen',
    includeStories: [],
  },
  args: {
    colorsTotal: 21,
  },
  argTypes: {
    colorsTotal: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const BlackCoral: StoryFn = (args: any) => ({
  props: { ...args },
  template: `
    <cvi-ng-storybook-color-cards>
      <cvi-ng-storybook-color-card *ngFor="let _ of [].constructor(colorsTotal); let i = index" label="black-coral-{{ i }}" [ngStyle]="{'--color': 'var(--cvi-color-black-coral-' + i + ')'}"></cvi-ng-storybook-color-card>
    </cvi-ng-storybook-color-cards>
  `,
});

export const DarkTangerine: StoryFn = (args: any) => ({
  props: { ...args },
  template: `
    <cvi-ng-storybook-color-cards>
      <cvi-ng-storybook-color-card *ngFor="let _ of [].constructor(colorsTotal); let i = index" label="dark-tangerine-{{ i }}" [ngStyle]="{'--color': 'var(--cvi-color-dark-tangerine-' + i + ')'}"></cvi-ng-storybook-color-card>
    </cvi-ng-storybook-color-cards>
  `,
});

export const Jasper: StoryFn = (args: any) => ({
  props: { ...args },
  template: `
    <cvi-ng-storybook-color-cards>
      <cvi-ng-storybook-color-card *ngFor="let _ of [].constructor(colorsTotal); let i = index" label="jasper-{{ i }}" [ngStyle]="{'--color': 'var(--cvi-color-jasper-' + i + ')'}"></cvi-ng-storybook-color-card>
    </cvi-ng-storybook-color-cards>
  `,
});

export const Orange: StoryFn = (args: any) => ({
  props: { ...args },
  template: `
    <cvi-ng-storybook-color-cards>
      <cvi-ng-storybook-color-card *ngFor="let _ of [].constructor(colorsTotal); let i = index" label="orange-{{ i }}" [ngStyle]="{'--color': 'var(--cvi-color-orange-' + i + ')'}"></cvi-ng-storybook-color-card>
    </cvi-ng-storybook-color-cards>
  `,
});

export const SapphireBlue: StoryFn = (args: any) => ({
  props: { ...args },
  template: `
    <cvi-ng-storybook-color-cards>
      <cvi-ng-storybook-color-card *ngFor="let _ of [].constructor(colorsTotal); let i = index" label="sapphire-blue-{{ i }}" [ngStyle]="{'--color': 'var(--cvi-color-sapphire-blue-' + i}"></cvi-ng-storybook-color-card>
    </cvi-ng-storybook-color-cards>
  `,
});
