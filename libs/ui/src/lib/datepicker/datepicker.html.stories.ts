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
    <div class="cvi-textfield">
      <div class="cvi-datepicker__input-container cvi-datepicker__input-container--focused">
        <label class="cvi-screenreader-text" id="datePickerLabel-datepicker-e5fbfa48-a30e-4edf-aa76-a1e84c2657c7" for="datepicker-html-id">Vali kuupäev</label>
        <span class="cvi-screenreader-text" id="dateDescription-datepicker-e5fbfa48-a30e-4edf-aa76-a1e84c2657c7">Nõutud kuupäeva formaat: dd.MM.yyyy</span>
        <input type="text" role="textbox" aria-haspopup="true" class="cvi-datepicker__input-field" placeholder="pp.kk.aaaa" id="datepicker-html-id" aria-labelledby="datePickerLabel-datepicker-e5fbfa48-a30e-4edf-aa76-a1e84c2657c7" aria-describedby="dateDescription-datepicker-e5fbfa48-a30e-4edf-aa76-a1e84c2657c7" />
        <div class="cvi-datepicker__input-icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20" class="cvi-datepicker__input-icon" height="20px"><path d="M16 2h-1V0h-2v2H5V0H3v2H2A1.99 1.99 0 0 0 .01 4L0 18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm0 16H2V7h14v11ZM4 9h5v5H4V9Z"></path></svg>
        </div>
      </div>
      <div aria-live="polite" class="cvi-screenreader-text">06.06.2023</div>
      <div>
        <div tabindex="-1" role="dialog" aria-modal="true" class="cvi-datepicker__calendar" title="Calendar" id="datePickerCalendar-datepicker-e5fbfa48-a30e-4edf-aa76-a1e84c2657c7">
          <div class="cvi-datepicker__calendar-header">
            <div class="cvi-datepicker__calendar-header-chevron">
              <button aria-label="Previous month">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cvi-datepicker__header-chevron-icon" height="24px"><path d="M14.83 2.83 12 0 0 12l12 12 2.83-2.83L5.66 12l9.17-9.17Z"></path></svg>
                </div>
              </button>
            </div>
            <div aria-live="polite" class="cvi-datepicker__calendar-header-month" id="monthYearLabel-datepicker-e5fbfa48-a30e-4edf-aa76-a1e84c2657c7">Juuni 2023</div>
            <div class="cvi-datepicker__calendar-header-chevron">
              <button aria-label="Next month">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cvi-datepicker__header-chevron-icon" height="24px"><path d="M3 0 .17 2.83 9.34 12 .17 21.17 3 24l12-12L3 0Z"></path></svg>
                </div>
              </button>
            </div>
          </div>
          <div role="grid" class="cvi-datepicker__calendar-grid" aria-busy="true" aria-labelledby="monthYearLabel-datepicker-e5fbfa48-a30e-4edf-aa76-a1e84c2657c7">
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
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button"  aria-label="Neljapäev">1</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button"  aria-label="Reede">2</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button cvi-datepicker__calendar-button--weekend" aria-label="Laupäev">3</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button cvi-datepicker__calendar-button--weekend" aria-label="Pühapäev">4</button>
              </div>
            </div>
            <div class="cvi-datepicker__calendar-weekrow">
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button"  aria-label="Esmaspäev">5</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button cvi-datepicker__calendar-button--selected" aria-label="Teisipäev">6</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button"  aria-label="Kolmapäev">7</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button"  aria-label="Neljapäev">8</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button"  aria-label="Reede">9</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button cvi-datepicker__calendar-button--weekend" aria-label="Laupäev">10</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button cvi-datepicker__calendar-button--weekend" aria-label="Pühapäev">11</button>
              </div>
            </div>
            <div class="cvi-datepicker__calendar-weekrow">
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button cvi-datepicker__calendar-button--today" aria-label="Esmaspäev" aria-current="date">12</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button"  aria-label="Teisipäev">13</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button"  aria-label="Kolmapäev">14</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button"  aria-label="Neljapäev">15</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button"  aria-label="Reede">16</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button cvi-datepicker__calendar-button--weekend" aria-label="Laupäev">17</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button cvi-datepicker__calendar-button--weekend" aria-label="Pühapäev">18</button>
              </div>
            </div>
            <div class="cvi-datepicker__calendar-weekrow">
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button"  aria-label="Esmaspäev">19</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button"  aria-label="Teisipäev">20</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button"  aria-label="Kolmapäev">21</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button"  aria-label="Neljapäev">22</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button"  aria-label="Reede">23</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button cvi-datepicker__calendar-button--weekend" aria-label="Laupäev">24</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button cvi-datepicker__calendar-button--weekend" aria-label="Pühapäev">25</button>
              </div>
            </div>
            <div class="cvi-datepicker__calendar-weekrow">
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button"  aria-label="Esmaspäev">26</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button"  aria-label="Teisipäev">27</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button"  aria-label="Kolmapäev">28</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button"  aria-label="Neljapäev">29</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
                <button class="cvi-datepicker__calendar-button"  aria-label="Reede">30</button>
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
              </div>
              <div class="cvi-datepicker__calendar-daynumber">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
});

export const Default = Template.bind({});
