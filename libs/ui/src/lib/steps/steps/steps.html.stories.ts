import { Story, Meta } from '@storybook/angular';
import notes from './steps.html.md';

export default {
  title: 'HTML/Steps',
  parameters: {
    notes,
    options: { selectedPanel: 'storybook/html/panel' },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div class="cvi-steps is-any-step-selected">
      <h1 class="cvi-steps__title">Abiellumine</h1>
      <div class="cvi-steps__inner-wrapper">
        <div class="cvi-steps__intro">
          <p>You can now add custom content before steps</p>
        </div>
        <div class="cvi-steps__inner">
          <ol class="cvi-steps__list" style="--progress:50%;">
            <li class="cvi-steps__list-item is-past">
              <button class="cvi-steps__list-item-button">
                <div class="cvi-steps__list-item-inner">
                  <span class="cvi-steps__list-item-title">Abiellumine</span>
                  <span class="cvi-steps__list-item-arrow-icon-wrapper">
                    <svg viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg" class="cvi-steps__list-item-arrow-icon" height="24px">
                      <path d="m7.485 6.634-5.101 5.101a.896.896 0 0 1-1.272 0l-.848-.847a.897.897 0 0 1 0-1.272L3.881 6 .264 2.384a.897.897 0 0 1 0-1.272l.848-.848a.897.897 0 0 1 1.272 0l5.101 5.102a.892.892 0 0 1 0 1.268Z"></path>
                    </svg>
                  </span>
                </div>
              </button>
            </li>
            <li class="cvi-steps__list-item is-past is-current">
              <button class="cvi-steps__list-item-button">
                <div class="cvi-steps__list-item-inner">
                  <span class="cvi-steps__list-item-title">Second</span>
                  <span class="cvi-steps__list-item-arrow-icon-wrapper">
                    <svg viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg" class="cvi-steps__list-item-arrow-icon" height="24px">
                      <path d="m7.485 6.634-5.101 5.101a.896.896 0 0 1-1.272 0l-.848-.847a.897.897 0 0 1 0-1.272L3.881 6 .264 2.384a.897.897 0 0 1 0-1.272l.848-.848a.897.897 0 0 1 1.272 0l5.101 5.102a.892.892 0 0 1 0 1.268Z"></path>
                    </svg>
                  </span>
                </div>
              </button>
            </li>
            <li class="cvi-steps__list-item">
              <button class="cvi-steps__list-item-button">
                <div class="cvi-steps__list-item-inner">
                  <span class="cvi-steps__list-item-title">Third</span>
                  <span class="cvi-steps__list-item-arrow-icon-wrapper">
                    <svg viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg" class="cvi-steps__list-item-arrow-icon" height="24px">
                      <path d="m7.485 6.634-5.101 5.101a.896.896 0 0 1-1.272 0l-.848-.847a.897.897 0 0 1 0-1.272L3.881 6 .264 2.384a.897.897 0 0 1 0-1.272l.848-.848a.897.897 0 0 1 1.272 0l5.101 5.102a.892.892 0 0 1 0 1.268Z"></path>
                    </svg>
                  </span>
                </div>
              </button>
            </li>
            <li class="cvi-steps__list-item">
              <button class="cvi-steps__list-item-button">
                <div class="cvi-steps__list-item-inner">
                  <span class="cvi-steps__list-item-title">Fourth</span>
                  <span class="cvi-steps__list-item-arrow-icon-wrapper">
                    <svg viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg" class="cvi-steps__list-item-arrow-icon" height="24px">
                      <path d="m7.485 6.634-5.101 5.101a.896.896 0 0 1-1.272 0l-.848-.847a.897.897 0 0 1 0-1.272L3.881 6 .264 2.384a.897.897 0 0 1 0-1.272l.848-.848a.897.897 0 0 1 1.272 0l5.101 5.102a.892.892 0 0 1 0 1.268Z"
                     ></path>
                    </svg>
                  </span>
                </div>
              </button>
            </li>
          </ol>
          <div class="cvi-steps__step">
          </div>
          <div class="cvi-steps__step">
            <div class="cvi-steps__content-panel">
              <h2 class="cvi-steps__content-panel-title">Abiellumine</h2>
              <p>Fetal stemcells, aren't those controversial? In your time, yes, but nowadays shut up! Besides, these are adult stemcells, harvested from perfectly healthy adults whom I killed for their stemcells. Bender?! You stole the atom.</p>
            </div>
          </div>
          <div class="cvi-steps__step">
          </div>
          <div class="cvi-steps__step">
          </div>
          <div class="cvi-steps__directional-buttons">
            <button class="cvi-steps__directional-button cvi-steps__directional-button--direction-prev" title="Abiellumine">
              <span>
                <svg viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg" class="cvi-steps__directional-button-icon" height="24px">
                  <path d="M.515 5.366 5.616.264a.897.897 0 0 1 1.272 0l.848.848a.897.897 0 0 1 0 1.272L4.119 6l3.617 3.616a.897.897 0 0 1 0 1.272l-.848.848a.896.896 0 0 1-1.272 0L.515 6.633a.892.892 0 0 1 0-1.268Z"></path>
                </svg>
              </span>
              <span class="cvi-steps__directional-button-label">Abiellumine</span>
            </button>
            <button class="cvi-steps__directional-button cvi-steps__directional-button--direction-next" title="Second">
              <span class="cvi-steps__directional-button-label">Second</span>
              <span>
                <svg viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg" class="cvi-steps__directional-button-icon" height="24px">
                  <path d="m7.485 6.634-5.101 5.101a.896.896 0 0 1-1.272 0l-.848-.847a.897.897 0 0 1 0-1.272L3.881 6 .264 2.384a.897.897 0 0 1 0-1.272l.848-.848a.897.897 0 0 1 1.272 0l5.101 5.102a.892.892 0 0 1 0 1.268Z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="visibility: hidden; position: absolute;">
        <filter id="round">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur"></feGaussianBlur>
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9" result="goo"></feColorMatrix>
          <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
        </filter>
      </svg>
    </div>
  `,
  styles: [
    `
      .cvi-steps {
        --current-step: '2';
      }
    `,
  ],
});

export const Default = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'light',
  },
  viewport: {
    defaultViewport: 'iphone12mini',
  },
};
