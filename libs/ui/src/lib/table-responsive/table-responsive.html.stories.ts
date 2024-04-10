import { StoryObj, Meta } from '@storybook/angular';
import notes from './table-responsive.html.md';

export default {
  title: 'HTML/Responsive table',
  parameters: {
    notes,
    options: { selectedPanel: 'storybook/html/panel' },
  },
} as Meta;

export const Default: StoryObj = {
  render: (args: any) => ({
    props: args,
    /* template */
    template: `
    <div class="cvi-table-responsive">
      <div class="cvi-table-responsive__table cvi-table">
        <div class="cvi-table__inner">
          <table class="cvi-table__table">
            <tr class="cvi-table__header-row">
              <th class="cvi-table__header-cell"><div class="cvi-table__header-cell-inner">First column</div></th>
              <th class="cvi-table__header-cell">
                <div class="cvi-table__header-cell-inner">Another second column</div>
              </th>
              <th class="cvi-table__header-cell"><div class="cvi-table__header-cell-inner">Third column</div></th>
              <th class="cvi-table__header-cell">
                <div class="cvi-table__header-cell-inner">Fourth one and that is it!</div>
              </th>
            </tr>
            <tr class="cvi-table__body-row">
              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">Abielu sõlmimine</div></td>
              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">2021-07-20</div></td>
              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">Lõppenud</div></td>
              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">info</div></td>
            </tr>
            <tr class="cvi-table__body-row">
              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">Lapse saamine</div></td>
              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">2018-07-17</div></td>
              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">Katkenud</div></td>
              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">error</div></td>
            </tr>
          </table>
        </div>
      </div>
      <div
        class="cvi-table-responsive__cards cvi-track cvi-track--direction-vertical cvi-track--layout-flex"
        style="--gap: 2; --horizontal-alignment: normal;">
        <div class="cvi-table-card">
          <div
            class="cvi-track cvi-track--direction-vertical cvi-track--layout-flex"
            style="--gap: 2; --horizontal-alignment: normal; --vertical-alignment: flex-start;">
            <div class="cvi-labeled-item">
              <div
                class="cvi-track cvi-track--direction-vertical cvi-track--layout-flex"
                style="--gap: 1; --horizontal-alignment: normal;">
                <div class="cvi-labeled-item__label">First column</div>
                <span class="cvi-labeled-item__content">Abielu sõlmimine</span>
              </div>
            </div>
            <div class="cvi-labeled-item">
              <div
                class="cvi-track cvi-track--direction-vertical cvi-track--layout-flex"
                style="--gap: 1; --horizontal-alignment: normal;">
                <div class="cvi-labeled-item__label">Another second column</div>
                <span class="cvi-labeled-item__content">2021-07-20</span>
              </div>
            </div>
            <div class="cvi-labeled-item">
              <div
                class="cvi-track cvi-track--direction-vertical cvi-track--layout-flex"
                style="--gap: 1; --horizontal-alignment: normal;">
                <div class="cvi-labeled-item__label">Third column</div>
                <span class="cvi-labeled-item__content">Lõppenud</span>
              </div>
            </div>
            <div class="cvi-labeled-item">
              <div
                class="cvi-track cvi-track--direction-vertical cvi-track--layout-flex"
                style="--gap: 1; --horizontal-alignment: normal;">
                <div class="cvi-labeled-item__label">Fourth one and that is it!</div>
                <span class="cvi-labeled-item__content">info</span>
              </div>
            </div>
          </div>
        </div>
        <div class="cvi-table-card">
          <div class="cvi-track cvi-track--direction-vertical cvi-track--layout-flex"
            style="--gap: 2; --horizontal-alignment: normal; --vertical-alignment: flex-start;">
            <div class="cvi-labeled-item">
              <div
                class="cvi-track cvi-track--direction-vertical cvi-track--layout-flex"
                style="--gap: 1; --horizontal-alignment: normal;">
                <div class="cvi-labeled-item__label">First column</div>
                <span class="cvi-labeled-item__content">Lapse saamine</span>
              </div>
            </div>
            <div class="cvi-labeled-item">
              <div
                class="cvi-track cvi-track--direction-vertical cvi-track--layout-flex"
                style="--gap: 1; --horizontal-alignment: normal;">
                <div class="cvi-labeled-item__label">Another second column</div>
                <span class="cvi-labeled-item__content">2018-07-17</span>
              </div>
            </div>
            <div class="cvi-labeled-item">
              <div
                class="cvi-track cvi-track--direction-vertical cvi-track--layout-flex"
                style="--gap: 1; --horizontal-alignment: normal;">
                <div class="cvi-labeled-item__label">Third column</div>
                <span class="cvi-labeled-item__content">Katkenud</span>
              </div>
            </div>
            <div class="cvi-labeled-item">
              <div
                class="cvi-track cvi-track--direction-vertical cvi-track--layout-flex"
                style="--gap: 1; --horizontal-alignment: normal;">
                <div class="cvi-labeled-item__label">Fourth one and that is it!</div>
                <span class="cvi-labeled-item__content">error</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  }),
};

export const Mobile: StoryObj = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12mini',
    },
  },
};
