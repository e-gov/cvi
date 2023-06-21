import { componentWrapperDecorator, Meta, StoryFn } from '@storybook/angular';
import { iconSizeDefault } from '../icon/icon';
import { LabeledIconComponent } from './labeled-icon.component';
import notes from './labeled-icon.component.md';
import { storybookIconsNames } from '../storybook-icons';

export default {
  title: 'Angular/Labeled icon',
  component: LabeledIconComponent,
  parameters: { notes },
  argTypes: {
    name: {
      name: 'Icon name',
      options: storybookIconsNames,
      control: { type: 'select' },
    },
    content: {
      name: 'Content',
      table: {
        category: 'Playground',
      },
      control: { type: 'text' },
    },
    gap: {
      name: 'Gap',
      control: { type: 'range', min: 0, max: 20, step: 1 },
    },
    svgClass: { control: false },
    iconClass: { control: false },
  },
  args: {
    iconHeight: iconSizeDefault,
    name: 'call',
    gap: 4,
    iconPosition: 'before',
    content: 'This is a labeled icon',
  },
} as Meta<any>;

const Template: StoryFn<LabeledIconComponent> = (
  args: LabeledIconComponent
) => ({
  props: args,
  /* template */
  template: `
    <cvi-ng-labeled-icon [name]="name" [iconPosition]="iconPosition" [verticalAlignment]="verticalAlignment" [iconHeight]="iconHeight" [gap]="gap">
      {{ content }}
    </cvi-ng-labeled-icon>
  `,
});

export const Default = {
  render: Template,
};

export const WithIconAfter = {
  render: Template,
  args: { iconPosition: 'after' },
};

export const WithCustomGap = {
  render: Template,
  args: { gap: 2 },
};

export const LabeledIconInsideButton = {
  render: Template,

  args: {
    iconPosition: 'after',
    verticalAlignment: 'center',
  },

  decorators: [
    componentWrapperDecorator((story) => {
      return `
        <cvi-ng-button appearance="secondary">
          ${story}
        </cvi-ng-button>
      `;
    }),
  ],
};

const TemplateWithCustomStyling: StoryFn<LabeledIconComponent> = (
  args: LabeledIconComponent
) => ({
  props: args,
  /* template */
  template: `
    <cvi-ng-labeled-icon [name]="name"
                         [iconPosition]="iconPosition"
                         [verticalAlignment]="verticalAlignment"
                         [iconHeight]="iconHeight"
                         iconClass="icon-wrapper-class"
                         svgClass="svg-class">
      {{ content }}
    </cvi-ng-labeled-icon>
  `,
  styles: [
    // you don't need to use ::ng-deep in your app
    `
      ::ng-deep .svg-class {
        fill: red;
      }
    `,
    `
      ::ng-deep .icon-wrapper-class {
        border: 1px green solid;
      }
    `,
  ],
});

export const WithCustomStyling = {
  render: TemplateWithCustomStyling,

  args: {
    iconHeight: 40,
    verticalAlignment: 'center',
  },
};
