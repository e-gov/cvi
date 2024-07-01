import { Meta, StoryObj } from '@storybook/angular';
import notes from './timed-notice.html.md?raw';

export default {
  title: 'HTML/Timed Notice',
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
    layout: 'padded',
  },
} as Meta;

export const Default: StoryObj = {
  render: (args: any) => ({
    props: args,
    /* template */
    template: `
      <div class="cvi-timed-notice">
        <div class="cvi-timed-notice__container cvi-timed-notice__container--severity-info">
          <div class="cvi-timed-notice__icon-container">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20" height="24px">
                <path d="M16 2h-1V0h-2v2H5V0H3v2H2A1.99 1.99 0 0 0 .01 4L0 18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm0 16H2V7h14v11ZM4 9h5v5H4V9Z"></path>
              </svg>
            </span>
          </div>
          <div class="cvi-timed-notice__content">
            <div class="cvi-track cvi-track--direction-horizontal cvi-track--layout-flex" style="--gap: 0; --horizontal-alignment: space-between; --vertical-alignment: center; --wrap: wrap;">
              <div class="cvi-track cvi-track--direction-horizontal cvi-track--layout-flex" style="--gap: 4; --horizontal-alignment: flex-start; --vertical-alignment: center;">
                <div class="cvi-track cvi-track--direction-vertical cvi-track--layout-flex" style="--gap: 0; --horizontal-alignment: center; --vertical-alignment: flex-start;">
                  <div class="cvi-timed-notice__title">01.03.2023</div>
                  <div>22:59</div>
                </div>
                <div class="cvi-track cvi-track--direction-vertical cvi-track--layout-flex" style="--gap: 0; --horizontal-alignment: center; --vertical-alignment: flex-start;">
                  <a class="cvi-timed-notice__title underlined" href="https://www.eesti.ee">KMD Käibedeklaratsioon</a>
                  <div class="cvi-track cvi-track--direction-horizontal cvi-track--layout-flex" style="--gap: 2; --horizontal-alignment: normal;">
                    <div>Maksu- ja tolliamet</div>
                    <span>
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="20px">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2z"></path>
                        <path d="M13 16h-2v2h2zM13 10h-2v5h2z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div class="cvi-track cvi-track--direction-horizontal cvi-track--layout-flex" style="--gap: 4; --horizontal-alignment: flex-end; --vertical-alignment: center;">
                <div class="cvi-track cvi-track--direction-vertical cvi-track--layout-flex" style="--gap: 1; --horizontal-alignment: center; --vertical-alignment: flex-start;">
                  <div class="cvi-timed-notice__aside-track-item cvi-track cvi-track--direction-horizontal cvi-track--layout-flex" style="--gap: 4; --horizontal-alignment: space-between; --vertical-alignment: center;">
                    <div class="cvi-timed-notice__title">138€</div>
                    <span class="cvi-timed-notice__aside-track-item-icon">
                      <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" height="24px">
                        <path d="M6.333 3.666h1.334V5H6.334V3.666Zm0 2.667h1.334v4H6.334v-4Zm.667-6A6.67 6.67 0 0 0 .333 7 6.669 6.669 0 0 0 7 13.666 6.669 6.669 0 0 0 13.667 7 6.669 6.669 0 0 0 7 .333Zm0 12A5.34 5.34 0 0 1 1.667 7 5.34 5.34 0 0 1 7 1.666 5.34 5.34 0 0 1 12.334 7 5.34 5.34 0 0 1 7 12.333Z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <span class="cvi-button cvi-button--appearance-primary cvi-button--size-s">
                  <button type="button" class="cvi-button__button">
                    <div class="cvi-track cvi-track--direction-horizontal cvi-track--layout-flex" style="--gap: 2; --horizontal-alignment: normal; --vertical-alignment: center;">
                      kohustust täitma
                      <span class="cvi-button__icon">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="24px">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2v-4h2v4h14V5H5v4H3V5a2 2 0 0 1 2-2Zm6.5 14-1.41-1.41L12.67 13H3v-2h9.67l-2.58-2.59L11.5 7l5 5-5 5Z"></path>
                        </svg>
                      </span>
                    </div>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
