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
  },
} as Meta<NoticeComponent>;

const Template: Story<NoticeComponent> = (args: NoticeComponent) => ({
  props: args,
  template: `
    <cvi-ng-notice [iconName]="iconName" [severity]="severity">
      <cvi-ng-track
        layout="flex"
        horizontalAlignment="justify"
        verticalAlignment="center"
      >
        any content content
      </cvi-ng-track>
    </cvi-ng-notice>
  `,
});

export const Default = Template.bind({});

const TemplateWithError: Story<NoticeComponent> = (args: NoticeComponent) => ({
  props: args,
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

export const WithError = TemplateWithError.bind({});

const TemplateWithSuccess: Story<NoticeComponent> = (
  args: NoticeComponent
) => ({
  props: args,
  template: `
  <cvi-ng-notice [iconName]="iconName" [severity]="'success'">
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
      <cvi-ng-track layout="flex" horizontalAlignment="justify" [gap]="4">
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
        horizontalAlignment="center"
        verticalAlignment="top"
        [gap]="1"
        flexDirection="vertical"
      >
        <div class="cvi-notice--dark-title">01.03.2023</div>
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
      </cvi-ng-track>
      <cvi-ng-button appearance="secondary"> Lisainfo </cvi-ng-button>
    </cvi-ng-track>
  </cvi-ng-track>
  </cvi-ng-notice>
  
  `,
});

export const WithSuccess = TemplateWithSuccess.bind({});

const TemplateWithInfo: Story<NoticeComponent> = (args: NoticeComponent) => ({
  props: args,
  template: `
  <cvi-ng-notice [iconName]="iconName" [severity]="'info'">
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
      <cvi-ng-track layout="flex" horizontalAlignment="justify" [gap]="4">
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
        horizontalAlignment="center"
        verticalAlignment="top"
        [gap]="1"
        flexDirection="vertical"
      >
        <div class="cvi-notice--dark-title">01.03.2023</div>
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
      </cvi-ng-track>
      <cvi-ng-button appearance="secondary"> Lisainfo </cvi-ng-button>
    </cvi-ng-track>
  </cvi-ng-track>
  </cvi-ng-notice>
  
  `,
});

export const WithInfo = TemplateWithInfo.bind({});
