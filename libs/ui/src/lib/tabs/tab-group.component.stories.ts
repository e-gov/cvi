import notes from './tab-group.component.md';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TabGroupComponent } from './tab-group.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui.module';

export default {
  title: 'Angular/Tab group',
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
  },
  args: {
    content: 'First tab content with some more text that might overflow',
  },
} as Meta<TabGroupComponent>;

const Template: Story<TabGroupComponent> = (args: TabGroupComponent) => {
  const form = new FormGroup({
    text: new FormControl('Some text'),
  });

  return {
    props: {
      ...args,
      form: form,
      minRows: 5,
      htmlId: 'fk123sd4kfds',
      label: 'Label',
    },
    /* template */
    template: `
      <cvi-ng-tab-group>
        <cvi-ng-tab title="Tab 1">{{ content }}</cvi-ng-tab>
        <cvi-ng-tab title="Tab 2">
        <div [formGroup]="form">
          <cvi-ng-form-item
                        [label]="label"
                        [htmlId]="htmlId">
              <cvi-ng-textarea formControlName="text" cviNgCharacterCounter [maxChars]="30" [minRows]="minRows"></cvi-ng-textarea>
          </cvi-ng-form-item>
        </div>
        </cvi-ng-tab>
        <cvi-ng-tab title="Tab 3 with lots and lots of random text">Third tab content. File not found. I was having the most wonderful dream. Except you were there, and you were there, and you were there! And when we woke up, we had these bodies. I could if you hadn't turned on the light and shut off my stereo.</cvi-ng-tab>
      </cvi-ng-tab-group>
    `,
  };
};
export const Default = Template.bind({});
