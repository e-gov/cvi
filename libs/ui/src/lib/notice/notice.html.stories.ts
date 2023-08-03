import { Meta, Story } from '@storybook/angular';
import notes from './notice.html.md';

export default {
  title: 'HTML/Notice',
  parameters: { notes, layout: 'padded' },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
  <cvi-ng-notice [iconName]="iconName" [severity]="'error'">
  <cvi-ng-track
    layout="flex"
    horizontalAlignment="justify"
    verticalAlignment="center"
  >
    <cvi-ng-track
      layout="flex"
      horizontalAlignment="left"
      verticalAlignment="top"
      flexDirection="vertical"
    >
      <cvi-ng-track
        layout="flex"
        horizontalAlignment="justify"
        verticalAlignment="center"
        [gap]="4"
      >
        <div class="cvi-notice--dark-title">01.03.2023</div>
        <div class="cvi-notice--dark-title underlined">
          KMD käibedeklaratsioon
        </div>
      </cvi-ng-track>
      <cvi-ng-track layout="flex" horizontalAlignment="justify" verticalAlignment="center" [gap]="4">
        <div>23:59</div>
        <div>Maksu- ja Tolliamet</div>
        <cvi-ng-icon name="warning_amber" height="18"></cvi-ng-icon>
      </cvi-ng-track>
    </cvi-ng-track>
    <cvi-ng-track
      layout="flex"
      horizontalAlignment="right"
      verticalAlignment="center"
      [gap]="4"
    >
      <cvi-ng-track
        layout="flex"
        horizontalAlignment="justify"
        verticalAlignment="center"
        [gap]="4"
      >
      <div>
        138.00$
        </div>
        <cvi-ng-icon
          [name]="'info'"
          [height]="'24'"
          [cviNgTooltip]="
            'This tooltip is displayed when hovering, if you move mouse out of element then tooltip dissapears'
          "
        ></cvi-ng-icon>
      </cvi-ng-track>
      <cvi-ng-button> kohustust täitma </cvi-ng-button>
    </cvi-ng-track>
  </cvi-ng-track>
</cvi-ng-notice>
  `,
});

export const Default = Template.bind({});
