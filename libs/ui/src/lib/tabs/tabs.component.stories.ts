import notes from './tabs.component.md';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TabsComponent } from './tabs.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui.module';

export default {
  title: 'Angular/Tabs/Tabs',
  parameters: { notes },
  decorators: [
    moduleMetadata({
      imports: [UiModule, ReactiveFormsModule],
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

const Template: Story<TabsComponent> = (args: TabsComponent) => {
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
};
export const Default = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};
