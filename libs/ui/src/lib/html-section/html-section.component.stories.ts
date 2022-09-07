import { Meta, Story } from '@storybook/angular/';
import { HtmlSectionComponent } from './html-section.component';
import notes from './html-section.component.md';

export default {
  title: 'Angular/Html section',
  component: HtmlSectionComponent,
  parameters: { notes },
  argTypes: {

  },
  args: {
    html: `
      <h3 class="veera-html-section__title">Politsei- ja Piirivalveameti kontaktid</h3>
      <div class="veera-html-section__content">
        <div class="veera-html-section__content-elements">
          <p>Antud teenust haldab PPA ja abi saamiseks palun pöörduge nende poole</p>
          <p>Telefonikõnedele vastatakse E-R 9-17 ning kõnesid teenindatakse eesti, vene ja inglise keeles</p>
        </div>
        <div class="veera-html-section__content-elements">
          <ria-poc-labeled-icon name="call"><a href="tel:+3726123000">+372 612 3000</a></ria-poc-labeled-icon>
          <ria-poc-labeled-icon name="email"><a href="mailto:ppa@politsei.ee">ppa@politsei.ee</a></ria-poc-labeled-icon>
          <ria-poc-labeled-icon name="screen_share"><a href="https://politsei.ee" target="_blank">politsei.ee</a></ria-poc-labeled-icon>
          <ria-poc-labeled-icon name="location">Pärnu mnt 139, 15060 Tallinn</ria-poc-labeled-icon>
        </div>
      </div>   
    `
  }
} as Meta;

const Template: Story<HtmlSectionComponent> = (args: HtmlSectionComponent) => ({
  component: HtmlSectionComponent,
  props: {
    ...args
  },
  template: `
    <ria-poc-html-section [html]="html"></ria-poc-html-section>
  `
});

export const Default = Template.bind({});
Default.args = {};

export const Contacts = Template.bind({});
Contacts.args = {
  html: `
    <h3 class="veera-html-section__title">Kontaktid</h3>
    <div class="veera-html-section__content">
      <div class="veera-html-section__content-elements">
        <p>Võta ühendust perekonnaseisuasutusega, kus soovid abielu sõlmida</p>
      </div>
      <div class="veera-html-section__content-elements">
        <ria-poc-labeled-icon name="screen_share"><a href="#">Maakonnakeskuste kohalikud omavalitsused</a></ria-poc-labeled-icon>
        <ria-poc-labeled-icon name="screen_share"><a href="#">Notarid</a></ria-poc-labeled-icon>
        <ria-poc-labeled-icon name="screen_share"><a href="#">Abielu sõlmimise õigust omavad vaimulikud</a></ria-poc-labeled-icon>
      </div>
    </div>   
  `
}
