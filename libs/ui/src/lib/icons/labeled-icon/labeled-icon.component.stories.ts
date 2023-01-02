import { Meta, Story } from '@storybook/angular/';
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
    svgClass: { control: false },
    iconClass: { control: false },
  },
  args: {
    iconHeight: iconSizeDefault,
    name: 'call',
    iconPosition: 'before',
  },
} as Meta<LabeledIconComponent>;

const Template: Story<LabeledIconComponent> = (args: LabeledIconComponent) => ({
  props: args,
  template: `
    <veera-ng-labeled-icon [name]="name" [iconPosition]="iconPosition" [alignment]="alignment" [iconHeight]="iconHeight">
        This is a labeled icon
    </veera-ng-labeled-icon>
  `,
});

export const Default = Template.bind({});

export const WithIconAfter = Template.bind({});
WithIconAfter.args = { iconPosition: 'after' };

const TemplateInsideButton: Story<LabeledIconComponent> = (
  args: LabeledIconComponent
) => ({
  props: args,
  template: `
  <veera-ng-button appearance="secondary">
    <veera-ng-labeled-icon [name]="name" [iconPosition]="iconPosition" [alignment]="alignment" [iconHeight]="iconHeight">
        This is a labeled icon
    </veera-ng-labeled-icon>
  </veera-ng-button>
  `,
});

export const LabeledIconInsideButton = TemplateInsideButton.bind({});
LabeledIconInsideButton.args = {
  iconPosition: 'after',
  alignment: 'center',
};

const TemplateWithCustomStyling: Story<LabeledIconComponent> = (
  args: LabeledIconComponent
) => ({
  props: args,
  /* template */
  template: `
    <veera-ng-labeled-icon [name]="name"
                           [iconPosition]="iconPosition"
                           [alignment]="alignment"
                           [iconHeight]="iconHeight"
                           iconClass="icon-wrapper-class"
                           svgClass="svg-class">
      This is a labeled icon
    </veera-ng-labeled-icon>
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
export const WithCustomStyling = TemplateWithCustomStyling.bind({});
WithCustomStyling.args = {
  iconHeight: 40,
  alignment: 'center',
};
