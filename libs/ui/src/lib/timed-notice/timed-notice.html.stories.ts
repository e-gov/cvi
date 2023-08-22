import { Meta, Story } from '@storybook/angular';
import notes from './timed-notice.html.md';

export default {
  title: 'HTML/Timed Notice',
  parameters: { notes, layout: 'padded' },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
  <cvi-ng-timed-notice [iconName]="iconName" [severity]="severity"
  title="KMD Käibedeklaratsioon"
  dueDate="01.03.2023"
  time="22:59">
  <cvi-ng-track slot="subtitle" layout="flex" [gap]="2">
  <div>Maksu- ja tolliamet</div>
  <cvi-ng-icon
    class="cvi-timed-notice__subtitle-icon"
    name="warning_amber"
    height="20"
  ></cvi-ng-icon>
  </cvi-ng-track>
  <cvi-ng-track
    slot="aside"
    layout="'flex'"
    horizontalAlignment="justify"
    verticalAlignment="center"
    [gap]="4">
      <div>138.00€</div>
      <cvi-ng-icon
        [name]="'info'"
        [height]="'24'"
        [cviNgTooltip]="'some tooltip info'">
        </cvi-ng-icon>
  </cvi-ng-track>
  <cvi-ng-button
  slot="action"
  size="'s'"
  [iconName]="'exit_to_app'"
  [iconPosition]="'after'"
  [iconHeight]="24">
    kohustust täitma
  </cvi-ng-button>
</cvi-ng-timed-notice>
  `,
});

export const Default = Template.bind({});
