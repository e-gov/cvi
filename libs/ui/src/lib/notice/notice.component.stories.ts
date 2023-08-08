import { Story, Meta } from '@storybook/angular';
import notes from './notice.component.md';
import { NoticeComponent } from './notice.component';

export default {
  title: 'Angular/Notice',
  parameters: { notes, layout: 'padded' },
  argTypes: {
    severity: {
      name: 'Severity style',
      options: ['info', 'success', 'error'],
      control: { type: 'select' },
    },
  },
  args: {
    severity: 'info',
    title: 'KMD Käibedeklaratsioon',
    dueDate: '01.03.2023',
    fulfillmentDate: '01.04.2023',
    time: '23:59',
    subtitle: 'Maksu- ja tolliamet',
  },
} as Meta<NoticeComponent>;

const Template: Story<NoticeComponent> = (args: NoticeComponent) => ({
  props: args,
  template: `
    <cvi-ng-notice [iconName]="iconName" [severity]="severity"
      title="KMD Käibedeklaratsioon"
      dueDate="01.03.2023"
      time="22:59">

      <cvi-ng-track
        slot="'aside'"
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
    </cvi-ng-notice>
  `,
});

export const Default = Template.bind({});

const TemplateWithError: Story<NoticeComponent> = (args: NoticeComponent) => ({
  props: args,
  template: `
    <cvi-ng-notice [iconName]="iconName" [severity]="'error'" title="KMD Käibedeklaratsioon"
      dueDate="01.03.2023"
      time="22:59"
      subtitle="Maksu- ja tolliamet">
      <cvi-ng-track
      slot="'aside'"
      layout="flex"
      horizontalAlignment="justify"
      verticalAlignment="center"
      [gap]="4"
    >
      <div>138.00€</div>
      <cvi-ng-icon
        [name]="'info'"
        [height]="'24'"
        [cviNgTooltip]="'some tooltip info'"
      ></cvi-ng-icon>
    </cvi-ng-track>
    <cvi-ng-button
    slot="action"
    size="'s'"
    [iconName]="'exit_to_app'"
    [iconPosition]="'after'"
    [iconHeight]="24"
  >
    kohustust täitma
  </cvi-ng-button>
    </cvi-ng-notice>
  `,
});

export const WithError = TemplateWithError.bind({});

const TemplateWithSuccess: Story<NoticeComponent> = (
  args: NoticeComponent
) => ({
  props: args,
  template: `
  <cvi-ng-notice [iconName]="iconName" [severity]="'success'" title="KMD Käibedeklaratsioon"
    dueDate="01.03.2023"
    fulfillmentDate="01.04.2023"
    time="22:59"
    subtitle="Maksu- ja tolliamet">
    <cvi-ng-track
    slot="aside"
    layout="flex"
    horizontalAlignment="center"
    verticalAlignment="top"
    [gap]="1"
    flexDirection="vertical"
  >
    <div class="cvi-notice--dark-title">{{ fulfillmentDate }}</div>
    <cvi-ng-track
      layout="flex"
      horizontalAlignment="justify"
      verticalAlignment="center"
      [gap]="4"
      [ngStyle]="{ width: '100%' }"
    >
      Tasutud
      <cvi-ng-icon
        [name]="'info'"
        [height]="'24'"
        [cviNgTooltip]="
          'This tooltip is displayed when hovering, if you move mouse out of element then tooltip dissapears'
        "
      ></cvi-ng-icon>
    </cvi-ng-track>
    <cvi-ng-track
      layout="flex"
      horizontalAlignment="justify"
      verticalAlignment="center"
      [gap]="4"
    >
      <div>138.00€</div>
      <cvi-ng-icon
        [name]="'info'"
        [height]="'24'"
        [cviNgTooltip]="
          'This tooltip is displayed when hovering, if you move mouse out of element then tooltip dissapears'
        "
      ></cvi-ng-icon>
    </cvi-ng-track>
  </cvi-ng-track>
    <cvi-ng-button slot="action" appearance="secondary"> Lisainfo </cvi-ng-button>
  </cvi-ng-notice>
  
  `,
});

export const WithSuccess = TemplateWithSuccess.bind({});

const TemplateWithInfo: Story<NoticeComponent> = (args: NoticeComponent) => ({
  props: args,
  template: `
  <cvi-ng-notice [iconName]="iconName" [severity]="'info'"
    title="KMD Käibedeklaratsioon"
    dueDate="01.03.2023"
    fulfillmentDate="01.04.2023"
    time="22:59"
    subtitle="Maksu- ja tolliamet">
      <cvi-ng-track
      slot="'aside'"
      layout="flex"
      horizontalAlignment="justify"
      verticalAlignment="center"
      [gap]="4"
    >
      <div>138.00€</div>
      <cvi-ng-icon
        [name]="'info'"
        [height]="24"
        [cviNgTooltip]="'some tooltip info'"
      ></cvi-ng-icon>
    </cvi-ng-track>
    <cvi-ng-button
    slot="action"
    size="'s'"
    [iconName]="'exit_to_app'"
    [iconPosition]="'after'"
    [iconHeight]="24"
  >
    kohustust täitma
  </cvi-ng-button>
  </cvi-ng-notice>
  `,
});

export const WithInfo = TemplateWithInfo.bind({});
