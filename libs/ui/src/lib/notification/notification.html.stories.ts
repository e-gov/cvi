import { Meta, Story } from '@storybook/angular';
import notes from './notification.html.md';
import { NotificationComponent } from './notification.component';

export default {
  title: 'HTML/Notification',
  component: NotificationComponent,
  parameters: { notes },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  template: `
    <div class="veera-notification veera-notification__info">
        <button *ngIf="showCloseButton"
                aria-label="close-button"
                class="veera-notification__close-button"
                type="button"
        >
          <veera-ng-icon class="veera-labeled-icon__image"
                         name="close"
          >
        </veera-ng-icon>
        </button>
        <div class="veera-notification__title">
          <div *ngIf="showHeaderIcon" class="veera-notification__title-icon">
            <veera-ng-icon class="veera-labeled-icon__image"
                           name="info"
            >
            </veera-ng-icon>
          </div>
          <h5>
            Info notification
          </h5>
        </div>
      <div class="veera-notification__content">
          Info notification content
      </div>
    </div>

    <br>

    <div class="veera-notification veera-notification__success">
        <button *ngIf="showCloseButton"
                aria-label="close-button"
                class="veera-notification__close-button"
                type="button"
        >
            <veera-ng-icon class="veera-labeled-icon__image"
                           name="close"
            >
            </veera-ng-icon>
        </button>
        <div class="veera-notification__title">
          <div *ngIf="showHeaderIcon" class="veera-notification__title-icon">
            <veera-ng-icon class="veera-labeled-icon__image"
                           name="check_circle_outline"
            >
            </veera-ng-icon>
          </div>
          <h5>
            Success notification
          </h5>
        </div>
      <div class="veera-notification__content">
          Success notification content
      </div>
    </div>

    <br>

    <div class="veera-notification veera-notification__warning">
        <button *ngIf="showCloseButton"
                aria-label="close-button"
                class="veera-notification__close-button"
                type="button"
        >
            <veera-ng-icon class="veera-labeled-icon__image"
                           name="close"
            >
            </veera-ng-icon>
        </button>
        <div class="veera-notification__title">
          <div *ngIf="showHeaderIcon" class="veera-notification__title-icon">
            <veera-ng-icon class="veera-labeled-icon__image"
                           name="warning_amber"
            >
            </veera-ng-icon>
          </div>
          <h5>
            Warning notification
          </h5>
        </div>

      <div class="veera-notification__content">
          Warning notification content
      </div>
    </div>

    <br>

    <div class="veera-notification veera-notification__error">
        <button *ngIf="showCloseButton"
                aria-label="close-button"
                class="veera-notification__close-button"
                type="button"
        >
            <veera-ng-icon class="veera-labeled-icon__image"
                           name="close"
            >
            </veera-ng-icon>
        </button>
        <div class="veera-notification__title">
          <div *ngIf="showHeaderIcon" class="veera-notification__title-icon">
            <veera-ng-icon class="veera-labeled-icon__image"
                           name="error_outline"
            >
            </veera-ng-icon>
          </div>
          <h5>
            Error notification
          </h5>
        </div>

      <div class="veera-notification__content">
          Error notification content
      </div>
    </div>

    <br>

    <div class="veera-notification veera-notification__compact">
      <div class="veera-notification__content">
          Compact notification content
      </div>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
