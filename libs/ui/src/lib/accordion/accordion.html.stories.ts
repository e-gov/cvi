import { Story, Meta } from '@storybook/angular';
import notes from './accordion.html.md';

export default {
  title: 'HTML/Accordion',
  parameters: {
    notes,
    options: { selectedPanel: 'html/panel' },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  /* template */
  template: `
    <div class="cvi-accordion">
      <ul class="cvi-accordion__list">
        <li class="cvi-accordion__item is-active">
          <div class="cvi-accordion__item-header">
            <button class="cvi-accordion__item-toggle-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="cvi-accordion__item-toggle-icon">
                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
              </svg>
              <h3 class="cvi-accordion__item-title">Super simple accordion</h3>
            </button>
          </div>
          <div class="cvi-accordion__item-content is-expanded">
            <div class="cvi-accordion__item-content-inner">
              <p>An accordion</p>
            </div>
          </div>
        </li>
        <li class="cvi-accordion__item is-active">
          <div class="cvi-accordion__item-header">
            <button class="cvi-accordion__item-toggle-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="cvi-accordion__item-toggle-icon">
                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
              </svg>
              <h3 class="cvi-accordion__item-title">Some other item with details</h3>
            </button>
          </div>
          <div class="cvi-accordion__item-content is-expanded">
            <div class="cvi-accordion__item-details">
              Viimati muudetud 23.12.2023 | Teksti koostas Justiitsministeerium
            </div>
            <div class="cvi-accordion__item-content-inner">
              <p>An accordion</p>
            </div>
          </div>
        </li>
        <li class="cvi-accordion__item">
          <div class="cvi-accordion__item-header">
            <button class="cvi-accordion__item-toggle-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="cvi-accordion__item-toggle-icon">
                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
              </svg>
              <h3 class="cvi-accordion__item-title">Another item</h3>
            </button>
          </div>
          <div class="cvi-accordion__item-content" style="height: 0px; opacity: 0; visibility: hidden;">
            <div class="cvi-accordion__item-content-inner">
              Che cosa...
            </div>
          </div>
        </li>
        <li class="cvi-accordion__item">
          <div class="cvi-accordion__item-header">
            <button class="cvi-accordion__item-toggle-button is-disabled">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="cvi-accordion__item-toggle-icon">
                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
              </svg>
              <h3 class="cvi-accordion__item-title">Disabled item</h3>
            </button>
          </div>
          <div class="cvi-accordion__item-content" style="height: 0px; opacity: 0; visibility: hidden;">
            <div class="cvi-accordion__item-content-inner">
              Not possible to see me!
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};

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
