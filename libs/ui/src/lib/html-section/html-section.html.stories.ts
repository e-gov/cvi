import { Meta, Story } from '@storybook/angular';
import notes from './html-section.html.md';

export default {
  title: 'HTML/Html section',
  parameters: {
    notes,
    options: { selectedPanel: 'html/panel' },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  template: `
    <div class="veera-html-section">
      <h3 class="veera-html-section__title">Politsei- ja Piirivalveameti kontaktid</h3>
      <div class="veera-html-section__content">
        <div class="veera-html-section__content-elements">
          <p>Antud teenust haldab PPA ja abi saamiseks palun pöörduge nende poole</p>
          <p>Telefonikõnedele vastatakse E-R 9-17 ning kõnesid teenindatakse eesti, vene ja inglise keeles</p>
        </div>
        <div class="veera-html-section__content-elements">
          <div class="veera-labeled-icon">
            <svg  class="veera-labeled-icon__wrapper--icon-before" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.61 14.99 15.86 14.89 16.12 14.89C16.22 14.89 16.33 14.9 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3ZM6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02Z"/>
            </svg>
            <div class="veera-labeled-icon__content">
              <a href="tel:+3726123000">+372 612 3000</a>
            </div>
          </div>
          <div class="veera-labeled-icon">
            <svg  class="veera-labeled-icon__wrapper--icon-before" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM12 13L4 8V18H20V8L12 13Z"/>
            </svg>
            <div class="veera-labeled-icon__content">
              <a href="mailto:ppa@politsei.ee">ppa@politsei.ee</a>
            </div>
          </div>
          <div class="veera-labeled-icon">
            <svg  class="veera-labeled-icon__wrapper--icon-before" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20 18C21.1 18 21.99 17.1 21.99 16L22 6C22 4.89 21.1 4 20 4H4C2.89 4 2 4.89 2 6V16C2 17.1 2.89 18 4 18H0V20H24V18H20ZM4 16V6H20V16.01L4 16ZM7 15C7.56 12.33 9.11 9.67 13 9.13V7L17 10.73L13 14.47V12.28C10.22 12.28 8.39 13.13 7 15Z"/>
            </svg>
            <div class="veera-labeled-icon__content">
              <a href="https://politsei.ee" target="_blank">politsei.ee</a>
            </div>
          </div>
          <div class="veera-labeled-icon">
            <svg  class="veera-labeled-icon__wrapper--icon-before" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 11.88 14.12 16.19 12 18.88C9.92 16.21 7 11.85 7 9ZM9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C12.8932 6.5 13.7185 6.9765 14.1651 7.75C14.6116 8.5235 14.6116 9.4765 14.1651 10.25C13.7185 11.0235 12.8932 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9Z"/>
            </svg>
            <div class="veera-labeled-icon__content">
              Pärnu mnt 139, 15060 Tallinn
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
