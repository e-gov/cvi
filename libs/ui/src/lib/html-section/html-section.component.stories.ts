import { Meta, Story } from '@storybook/angular/';
import { HtmlSectionComponent } from './html-section.component';
import notes from './html-section.component.md';

export default {
  title: 'Angular/Html section',
  component: HtmlSectionComponent,
  parameters: { notes },
  args: {
    html: `
      <h3 class="veera-html-section__title">Politsei- ja Piirivalveameti kontaktid</h3>
      <div class="veera-html-section__content">
        <div class="veera-html-section__content-elements">
          <p>Antud teenust haldab PPA ja abi saamiseks palun pöörduge nende poole</p>
          <p>Telefonikõnedele vastatakse E-R 9-17 ning kõnesid teenindatakse eesti, vene ja inglise keeles</p>
        </div>
        <div class="veera-html-section__content-elements">
          <veera-web-labeled-icon name="call"><a href="tel:+3726123000">+372 612 3000</a></veera-web-labeled-icon>
          <veera-web-labeled-icon name="email"><a href="mailto:ppa@politsei.ee">ppa@politsei.ee</a></veera-web-labeled-icon>
          <veera-web-labeled-icon name="screen_share"><a href="https://politsei.ee" target="_blank">politsei.ee</a></veera-web-labeled-icon>
          <veera-web-labeled-icon name="location">Pärnu mnt 139, 15060 Tallinn</veera-web-labeled-icon>
        </div>
      </div>
    `,
  },
} as Meta;

const Template: Story<HtmlSectionComponent> = (args: HtmlSectionComponent) => ({
  props: {
    ...args,
  },
  template: `
    <veera-ng-html-section [html]="html" [sanitize]="sanitize"></veera-ng-html-section>
  `,
});

export const Default = Template.bind({});
Default.args = {};

const TemplateWithWidth: Story<HtmlSectionComponent> = (
  args: HtmlSectionComponent
) => ({
  props: {
    ...args,
  },
  template: `
    <div class="container">
      <veera-ng-html-section [html]="html" [sanitize]="sanitize"></veera-ng-html-section>
    </div>
  `,
  styles: [
    `.container {
      width: 400px;
      background-color: #ccc;
      padding: 20px;
    }`,
  ],
});

export const Contacts = TemplateWithWidth.bind({});
Contacts.args = {
  html: `
    <h3 class="veera-html-section__title">Kontaktid</h3>
    <div class="veera-html-section__content">
      <div class="veera-html-section__content-elements">
        <p>Võta ühendust perekonnaseisuasutusega, kus soovid abielu sõlmida</p>
      </div>
      <div class="veera-html-section__content-elements">
        <veera-web-labeled-icon name="screen_share"><a href="#" class="external-link">Maakonnakeskuste kohalikud omavalitsused</a></veera-web-labeled-icon>
        <veera-web-labeled-icon name="screen_share"><a href="#">Notarid</a></veera-web-labeled-icon>
        <veera-web-labeled-icon name="screen_share"><a href="#">Abielu sõlmimise õigust omavad vaimulikud</a></veera-web-labeled-icon>
      </div>
    </div>
  `,
  sanitize: true,
};

export const List = Template.bind({});
List.args = {
  html: `
    <p>Ordered <b>list</b></p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
    <br>
    <p>Unordered <i>list</i></p>
    <ul>
      <li><a href="#" target="_blank" class="external-link">Item 1</a></li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  `,
  sanitize: true,
};
