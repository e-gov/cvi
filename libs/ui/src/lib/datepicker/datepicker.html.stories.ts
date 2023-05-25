import { Meta, Story } from '@storybook/angular';
import notes from './datepicker.html.md';

export default {
  title: 'HTML/Form/Datepicker',
  parameters: {
    notes,
    options: { selectedPanel: 'html/panel' },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
  <div
  tabindex="0"
  class="cvi-datepicker__input-container"
>
  <label
    class="cvi-datepicker__calendar-visually-hidden"
    for="datepicker-html-id"
  >
    Select Date
  </label>
  <input
    type="text"
    tabindex="-1"
    value="04.05.2023"
    class="cvi-datepicker__input-field"
    placeholder="pp.kk.aaaa"
    id="datepicker-html-id"
  />
  <span class="cvi-datepicker__input-icon-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 20"
        width="18"
        height="20"
        aria-hidden="true"
        class="cvi-datepicker__input-calendar-icon"
      >
        <path
          d="M16 2.00049H15V0.000488281H13V2.00049H5V0.000488281H3V2.00049H2C0.895 2.00049 0.00999999 2.89549 0.00999999 4.00049L0 18.0005C0 19.1055 0.895 20.0005 2 20.0005H16C17.105 20.0005 18 19.1055 18 18.0005V4.00049C18 2.89549 17.105 2.00049 16 2.00049ZM16 18.0005H2V7.00049H16V18.0005ZM4 9.00049H9V14.0005H4V9.00049Z"
          fill="#5D6071"
        ></path>
      </svg>
    </span>
</div>
<div
  aria-live="polite"
  class="cvi-datepicker__calendar-visually-hidden"
>04.05.2023
</div>

<div tabindex="-1" id="datePickerCalendar" class="cvi-datepicker__calendar">
  <div class="cvi-datepicker__calendar-header">
    <div class="cvi-datepicker__calendar-header-chevron">
      <button aria-label="Previous month">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
             class="cvi-datepicker__header-chevron-icon">
          <path d="M14.83 2.83L12 0L0 12L12 24L14.83 21.17L5.66 12L14.83 2.83Z" fill="white"></path>
        </svg>
      </button>
    </div>
    <div id="monthYearLabel" class="cvi-datepicker__calendar-header-month">Mai 2023</div>
    <div class="cvi-datepicker__calendar-header-chevron">
      <button aria-label="Next month">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
             class="cvi-datepicker__header-chevron-icon">
          <path d="M2.99992 0L0.169922 2.83L9.33992 12L0.169922 21.17L2.99992 24L14.9999 12L2.99992 0Z"
                fill="white"></path>
        </svg>
      </button>
    </div>
  </div>
  <div role="grid" aria-labelledby="monthYearLabel" class="cvi-datepicker__calendar-grid">
    <div class="cvi-datepicker__calendar-daylabels">
      <div class="cvi-datepicker__calendar-daylabel">E</div>
      <div class="cvi-datepicker__calendar-daylabel">T</div>
      <div class="cvi-datepicker__calendar-daylabel">K</div>
      <div class="cvi-datepicker__calendar-daylabel">N</div>
      <div class="cvi-datepicker__calendar-daylabel">R</div>
      <div class="cvi-datepicker__calendar-daylabel">L</div>
      <div class="cvi-datepicker__calendar-daylabel">P</div>
    </div>
    <div class="cvi-datepicker__calendar-weekrow">
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button"
                aria-current="false"> 1
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button"
                aria-current="false"> 2
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button"
                aria-current="false"> 3
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button cvi-datepicker__calendar-button-selected"
                aria-current="true"> 4
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button"
                aria-current="false"> 5
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button cvi-datepicker__calendar-weekend"
                 aria-current="false"> 6
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button cvi-datepicker__calendar-weekend"
                 aria-current="false"> 7
        </button>
      </div>
    </div>
    <div class="cvi-datepicker__calendar-weekrow">
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button"
                aria-current="false"> 8
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button"
                aria-current="false"> 9
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button"
                aria-current="false"> 10
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button"
                aria-current="false"> 11
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button"
                aria-current="false"> 12
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button cvi-datepicker__calendar-weekend"
                 aria-current="false"> 13
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button cvi-datepicker__calendar-weekend"
                 aria-current="false"> 14
        </button>
      </div>
    </div>
    <div class="cvi-datepicker__calendar-weekrow">
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button"
                aria-current="false"> 15
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button"
                aria-current="false"> 16
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button"
                aria-current="false"> 17
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button"
                aria-current="false"> 18
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button"
                aria-current="false"> 19
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button cvi-datepicker__calendar-weekend"
                 aria-current="false"> 20
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button cvi-datepicker__calendar-weekend"
                 aria-current="false"> 21
        </button>
      </div>
    </div>
    <div class="cvi-datepicker__calendar-weekrow">
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button"
                aria-current="false"> 22
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button"
                aria-current="false"> 23
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button"
                aria-current="false"> 24
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button cvi-datepicker__calendar-button-today"
                 aria-current="false"> 25
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button"
                aria-current="false"> 26
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button cvi-datepicker__calendar-weekend"
                 aria-current="false"> 27
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button cvi-datepicker__calendar-weekend"
                 aria-current="false"> 28
        </button>
      </div>
    </div>
    <div class="cvi-datepicker__calendar-weekrow">
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button"
                aria-current="false"> 29
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button"
                aria-current="false"> 30
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber">
        <button class="cvi-datepicker__calendar-button"
                aria-current="false"> 31
        </button>
      </div>
      <div class="cvi-datepicker__calendar-daynumber"></div>
      <div class="cvi-datepicker__calendar-daynumber">
      </div>
      <div class="cvi-datepicker__calendar-daynumber">

      </div>
      <div class="cvi-datepicker__calendar-daynumber">
      </div>
    </div>
  </div>
</div>
  `,
});

export const Default = Template.bind({});
