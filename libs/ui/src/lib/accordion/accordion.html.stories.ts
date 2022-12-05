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
    <div class="veera-accordion">
      <ul class="veera-accordion__list">
        <li class="veera-accordion__item is-active">
          <header class="veera-accordion__item-header">
            <button class="veera-accordion__item-toggle-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="veera-accordion__item-toggle-icon">
                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
              </svg>
              <h3 class="veera-accordion__item-title">Super simple accordion</h3>
            </button>
          </header>
          <div class="veera-accordion__item-content is-expanded">
            <div class="veera-accordion__item-content-inner">
              <p>An accordion</p>
            </div>
          </div>
        </li>
        <li class="veera-accordion__item is-active">
          <header class="veera-accordion__item-header">
            <button class="veera-accordion__item-toggle-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="veera-accordion__item-toggle-icon">
                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
              </svg>
              <h3 class="veera-accordion__item-title">Some other item with details</h3>
            </button>
          </header>
          <div class="veera-accordion__item-content is-expanded">
            <div class="veera-accordion__item-details">
              Viimati muudetud 23.12.2023 | Teksti koostas Justiitsministeerium
            </div>
            <div class="veera-accordion__item-content-inner">
              <p>An accordion</p>
            </div>
          </div>
        </li>
        <li class="veera-accordion__item">
          <header class="veera-accordion__item-header">
            <button class="veera-accordion__item-toggle-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="veera-accordion__item-toggle-icon">
                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
              </svg>
              <h3 class="veera-accordion__item-title">Another item</h3>
            </button>
          </header>
          <div class="veera-accordion__item-content" style="height: 0px; opacity: 0; visibility: hidden;">
            <div class="veera-accordion__item-content-inner">
              Che cosa...
            </div>
          </div>
        </li>
        <li class="veera-accordion__item">
          <header class="veera-accordion__item-header">
            <button class="veera-accordion__item-toggle-button is-disabled">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="veera-accordion__item-toggle-icon">
                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
              </svg>
              <h3 class="veera-accordion__item-title">Disabled item</h3>
            </button>
          </header>
          <div class="veera-accordion__item-content" style="height: 0px; opacity: 0; visibility: hidden;">
            <div class="veera-accordion__item-content-inner">
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
