import notes from './tabs.component.md';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TabsComponent } from './tabs.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { storybookIconsNames } from '../icons/storybook-icons';

export default {
  title: 'Angular/Tabs/Tabs',
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
  argTypes: {
    content: {
      name: 'Content',
      table: {
        category: 'Playground',
      },
      control: { type: 'text' },
    },
    activeTabChange: { action: 'Tab switched!' },
  },
  args: {
    content: 'First tab content with some more text that might overflow',
  },
} as Meta<TabsComponent>;
type Story = StoryObj<TabsComponent>;

export const Default: Story = {
  render: (args: TabsComponent) => {
    const form = new FormGroup({
      text: new FormControl('Some text'),
    });

    return {
      props: {
        ...args,
        form: form,
        formMinRows: 5,
        formHtmlId: 'fk123sd4kfds',
        formLabel: 'Label',
      },
      /* template */
      template: `
        <cvi-ng-tabs (activeTabChange)="activeTabChange($event)">
          <cvi-ng-tab title="Tab 1">{{ content }}</cvi-ng-tab>
          <cvi-ng-tab title="Tab 2, with a form">
            <div [formGroup]="form">
              Textarea, input and the character counter directive should work properly inside tabs.
              <cvi-ng-form-item [label]="formLabel" [htmlId]="formHtmlId">
                <cvi-ng-textarea formControlName="text" cviNgCharacterCounter [maxChars]="30" [minRows]="formMinRows" [htmlId]="formHtmlId"></cvi-ng-textarea>
              </cvi-ng-form-item>
            </div>
          </cvi-ng-tab>
          <cvi-ng-tab title="Tab 3 with lots and lots of random text">Third tab content. File not found. I was having the most wonderful dream. Except you were there, and you were there, and you were there! And when we woke up, we had these bodies. I could if you hadn't turned on the light and shut off my stereo.</cvi-ng-tab>
        </cvi-ng-tabs>
      `,
    };
  },
};

export const Mobile: Story = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12mini',
    },
  },
};

export const WithIcon = {
  render: (args: TabsComponent) => ({
    props: args,
    template: `
        <cvi-ng-tabs (activeTabChange)="activeTabChange($event)">
          <cvi-ng-tab
            title="Tab 1"
            [iconName]="iconName"
            [svgClass]="'svg-class'"
            [iconPosition]="iconPosition"
            [iconHeight]="iconHeight"
            [gap]="gap"
            >{{ content }}</cvi-ng-tab>
          <cvi-ng-tab title="Tab 2 with lots and lots of random text">Third tab content. File not found. I was having the most wonderful dream. Except you were there, and you were there, and you were there! And when we woke up, we had these bodies. I could if you hadn't turned on the light and shut off my stereo.</cvi-ng-tab>
        </cvi-ng-tabs>
    `,
    styles: [
      // you don't need to use ::ng-deep in your app
      `
        ::ng-deep .svg-class {
          fill: red;
        }
      `,
    ],
  }),
  argTypes: {
    iconName: {
      name: 'Icon name',
      options: storybookIconsNames,
      control: { type: 'select' },
    },
    gap: {
      name: 'Gap',
      control: { type: 'range', min: 0, max: 20, step: 1 },
    },
    svgClass: { control: false },
    iconPosition: {
      name: 'Icon position',
      options: ['before', 'after'],
      control: { type: 'radio' },
    },
  },
  args: {
    iconName: 'input_error',
    iconHeight: 15,
    iconPosition: 'before',
    gap: 2,
  },
};
