import { Meta, moduleMetadata, Story } from '@storybook/angular';
import notes from './datepicker.component.md';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui.module';
import { DatepickerComponent } from './datepicker.component';

export default {
  title: 'Angular/Datepicker',
  decorators: [
    moduleMetadata({
      imports: [UiModule, ReactiveFormsModule],
    }),
  ],
  parameters: { notes },
  args: {
    placeholder: 'pp.kk.aaaa',
    disabled: false,
    htmlId: '',
  },
} as Meta<DatepickerComponent>;

const Template: Story<DatepickerComponent> = (args: DatepickerComponent) => ({
  props: args,
  template: `
    <cvi-ng-datepicker  [placeholder]="placeholder"
                        [disabled]="disabled"
                        [htmlId]="htmlId">
    </cvi-ng-datepicker>
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
