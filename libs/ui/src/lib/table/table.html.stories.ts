import { Story, Meta } from '@storybook/angular';
import notes from './table.component.md';

export default {
  title: 'HTML/Table',
  parameters: {
    notes,
    options: { selectedPanel: 'storybook/html/panel' },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div class="cvi-table">
      <div class="cvi-table__inner">
        <table class="cvi-table__table">
          <tr class="cvi-table__header-row">
            <th class="cvi-table__header-cell">
              <div class="cvi-table__header-cell-inner">Sündmusteenus</div>
            </th>
            <th class="cvi-table__header-cell">
              <div class="cvi-table__header-cell-inner">Staatus</div>
            </th>
            <th class="cvi-table__header-cell">
              <div class="cvi-table__header-cell-inner">Viimati muudetud</div>
            </th>
          </tr>
          <tr class="cvi-table__body-row">
            <td class="cvi-table__body-cell">
              <div class="cvi-table__body-cell-inner">Abiellumine</div>
            </td>
            <td class="cvi-table__body-cell">
              <div class="cvi-table__body-cell-inner">Mustand</div>
            </td>
            <td class="cvi-table__body-cell">
              <div class="cvi-table__body-cell-inner">2021-07-15</div>
            </td>
            <td class="cvi-table__body-cell">
              <div class="cvi-table__body-cell-inner">
                <div class="cvi-track cvi-track--direction-horizontal cvi-track--layout-flex" style="--gap:3;">
                  <button title="Edit">
                    <span class="cvi-screenreader-text">Edit</span>
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" height="18px">
                      <path d="M14.63.739a2.443 2.443 0 0 0-3.455 0l-9.684 9.684a.543.543 0 0 0-.14.239L.078 15.259a.543.543 0 0 0 .668.668l4.598-1.273a.542.542 0 0 0 .239-.14l9.684-9.684c.952-.955.952-2.5 0-3.454zM2.674 10.776l7.925-7.926 2.557 2.556-7.926 7.926ZM2.163 11.8l2.042 2.042-2.825.783Zm12.336-7.738-.576.576-2.556-2.556.576-.576c.53-.53 1.39-.53 1.92 0l.636.637c.53.53.53 1.39 0 1.92z"></path>
                    </svg>
                  </button>
                  <button title="Delete">
                    <span class="cvi-screenreader-text">Delete</span>
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" height="18px">
                      <path d="M10.523 5.797c-.237 0-.429.168-.429.375v7.082c0 .206.192.374.429.374.236 0 .428-.168.428-.374V6.172c0-.207-.192-.375-.428-.375ZM5.47 5.797c-.237 0-.429.168-.429.375v7.082c0 .206.192.374.428.374.237 0 .428-.168.428-.374V6.172c0-.207-.191-.375-.428-.375Z"></path>
                      <path d="M1.786 4.763v9.232c0 .546.229 1.058.628 1.426a2.26 2.26 0 0 0 1.53.579h8.103c.579 0 1.132-.21 1.53-.579.4-.368.628-.88.628-1.426V4.763c.794-.184 1.309-.855 1.202-1.568-.106-.713-.8-1.246-1.622-1.246h-2.192V1.48a1.385 1.385 0 0 0-.495-1.05A1.814 1.814 0 0 0 9.897 0H6.094a1.814 1.814 0 0 0-1.202.43 1.385 1.385 0 0 0-.494 1.05v.469H2.206c-.822 0-1.516.533-1.622 1.246-.107.713.408 1.384 1.202 1.568Zm10.26 10.488H3.945c-.732 0-1.301-.55-1.301-1.256V4.796h10.705v9.2c0 .704-.57 1.255-1.301 1.255ZM5.256 1.48a.678.678 0 0 1 .243-.522.89.89 0 0 1 .596-.21h3.803a.89.89 0 0 1 .596.21.678.678 0 0 1 .243.521v.469H5.255V1.48Zm-3.05 1.217h11.58c.426 0 .771.302.771.674 0 .373-.345.675-.77.675H2.205c-.426 0-.771-.302-.771-.675 0-.372.345-.674.77-.674Z"></path>
                      <path d="M7.996 5.797c-.237 0-.429.168-.429.375v7.082c0 .206.192.374.429.374.236 0 .428-.168.428-.374V6.172c0-.207-.192-.375-.428-.375Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr class="cvi-table__body-row">
            <td class="cvi-table__body-cell">
              <div class="cvi-table__body-cell-inner">Abiellumine</div>
            </td>
            <td class="cvi-table__body-cell">
              <div class="cvi-table__body-cell-inner">Avaldatud</div>
            </td>
            <td class="cvi-table__body-cell">
              <div class="cvi-table__body-cell-inner">2018-07-17</div>
            </td>
            <td class="cvi-table__body-cell">
              <div class="cvi-table__body-cell-inner">
                <div class="cvi-track cvi-track--direction-horizontal cvi-track--layout-flex" style="--gap:3;">
                  <button title="Add">
                    <span class="cvi-screenreader-text">Add</span>
                    <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" height="18px">
                      <path d="M28 16H16v12h-4V16H0v-4h12V0h4v12h12v4Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr class="cvi-table__body-row">
            <td class="cvi-table__body-cell">
              <div class="cvi-table__body-cell-inner">Abiellumine</div>
            </td>
            <td class="cvi-table__body-cell">
              <div class="cvi-table__body-cell-inner">Avaldamise ootel</div>
            </td>
            <td class="cvi-table__body-cell">
              <div class="cvi-table__body-cell-inner">2016-07-05</div>
            </td>
            <td class="cvi-table__body-cell">
              <div class="cvi-table__body-cell-inner">
                <div class="cvi-track cvi-track--direction-horizontal cvi-track--layout-flex" style="--gap:3;">
                  <button title="Edit">
                    <span class="cvi-screenreader-text">Edit</span>
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" height="18px">
                      <path d="M14.63.739a2.443 2.443 0 0 0-3.455 0l-9.684 9.684a.543.543 0 0 0-.14.239L.078 15.259a.543.543 0 0 0 .668.668l4.598-1.273a.542.542 0 0 0 .239-.14l9.684-9.684c.952-.955.952-2.5 0-3.454zM2.674 10.776l7.925-7.926 2.557 2.556-7.926 7.926ZM2.163 11.8l2.042 2.042-2.825.783Zm12.336-7.738-.576.576-2.556-2.556.576-.576c.53-.53 1.39-.53 1.92 0l.636.637c.53.53.53 1.39 0 1.92z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  `,
});

export const Default = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};
