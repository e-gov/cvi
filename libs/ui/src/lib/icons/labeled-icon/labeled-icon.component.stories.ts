import { Meta, Story } from '@storybook/angular/';
import { LabeledIconComponent } from './labeled-icon.component';
import notes from './labeled-icon.component.md';

export default {
  title: 'Angular/Labeled icon',
  component: LabeledIconComponent,
  parameters: { notes },
  argTypes: {
    name: {
      name: 'Name',
    },
  },
  args: {
    name: 'call',
    iconPosition: 'before',
  },
} as Meta<LabeledIconComponent>;

const Template: Story<LabeledIconComponent> = (args: LabeledIconComponent) => ({
  props: args,
  template: `
    <veera-ng-labeled-icon [name]="name" [iconPosition]="iconPosition" [alignment]="alignment">
        This is a labeled icon
    </veera-ng-labeled-icon>
  `,
});

export const Default = Template.bind({});

export const WithIconAfter = Template.bind({});
WithIconAfter.args = { iconPosition: 'after' };

const TemplateIconAfterButton: Story<LabeledIconComponent> = (
  args: LabeledIconComponent
) => ({
  props: args,
  template: `
  <veera-ng-button appearance="secondary">
    <veera-ng-labeled-icon [name]="name" [iconPosition]="iconPosition" [alignment]="alignment" [iconClass]="iconClass">
        This is a labeled icon
    </veera-ng-labeled-icon>
  </veera-ng-button>
  `,
  styles: [
    `::ng-deep .size-20 {
      height: 20px;
    }`,
  ],
});

export const LabeledIconInsideButton = TemplateIconAfterButton.bind({});
LabeledIconInsideButton.args = {
  iconPosition: 'after',
  alignment: 'center',
  iconClass: 'size-20',
};

const TemplateWithStyling: Story<LabeledIconComponent> = (
  args: LabeledIconComponent
) => ({
  props: args,
  template: `
    <veera-ng-labeled-icon [name]="name"
                           [iconPosition]="iconPosition"
                           [alignment]="alignment"
                           [iconClass]="iconClass"
                           [svgClass]="svgClass">
        This is a labeled icon
    </veera-ng-labeled-icon>
  `,
  styles: [
    `::ng-deep .red {
      fill: red;
    }

    ::ng-deep .size-40 {
      height: 40px;
    }`,
  ],
});
export const WithStyling = TemplateWithStyling.bind({});
WithStyling.args = {
  iconClass: 'size-40',
  svgClass: 'red',
  alignment: 'center',
};
