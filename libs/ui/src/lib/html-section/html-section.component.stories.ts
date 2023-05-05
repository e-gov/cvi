import { Meta, Story } from '@storybook/angular/';
import { HtmlSectionComponent } from './html-section.component';
import notes from './html-section.component.md';

export default {
  title: 'Angular/Html section',
  component: HtmlSectionComponent,
  parameters: { notes },
  args: {
    html: `
      <h3 class="cvi-html-section__title">Politsei- ja Piirivalveameti kontaktid</h3>
      <div class="cvi-html-section__content">
        <div class="cvi-html-section__content-elements">
          <p>Antud teenust haldab PPA ja abi saamiseks palun pöörduge nende poole</p>
          <p>Telefonikõnedele vastatakse E-R 9-17 ning kõnesid teenindatakse eesti, vene ja inglise keeles</p>
        </div>
        <div class="cvi-html-section__content-elements">
          <cvi-web-track gap="4" layout="flex" flex-direction="vertical">
            <cvi-web-labeled-icon name="call"><a href="tel:+3726123000">+372 612 3000</a></cvi-web-labeled-icon>
            <cvi-web-labeled-icon name="email"><a href="mailto:ppa@politsei.ee">ppa@politsei.ee</a></cvi-web-labeled-icon>
            <cvi-web-labeled-icon name="screen_share"><a href="https://politsei.ee" target="_blank">politsei.ee</a></cvi-web-labeled-icon>
            <cvi-web-labeled-icon name="location">Pärnu mnt 139, 15060 Tallinn</cvi-web-labeled-icon>
          </cvi-web-track>
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
    <cvi-ng-html-section [html]="html" [sanitize]="sanitize"></cvi-ng-html-section>
  `,
});

export const Default = Template.bind({});
Default.args = {};

const TemplateInContactsBlock: Story<HtmlSectionComponent> = (
  args: HtmlSectionComponent
) => ({
  props: {
    ...args,
  },
  template: `
    <div class="container">
      <cvi-ng-html-section [html]="html" [sanitize]="sanitize"></cvi-ng-html-section>
    </div>
  `,
  styles: [
    `.container {
      width: 400px;
      background-color: var(--cvi-color-black-coral-2);
      padding: 20px;
    }`,
  ],
});

export const InContactsBlock = TemplateInContactsBlock.bind({});
InContactsBlock.args = {
  html: `
    <h3 class="cvi-html-section__title">Kontaktid</h3>
    <div class="cvi-html-section__content">
      <div class="cvi-html-section__content-elements">
        <p>Võta ühendust perekonnaseisuasutusega, kus soovid abielu sõlmida</p>
      </div>
      <div class="cvi-html-section__content-elements">
        <cvi-web-track gap="4" layout="flex" flex-direction="vertical">
          <cvi-web-labeled-icon name="screen_share"><a href="#" class="external-link">Maakonnakeskuste kohalikud omavalitsused</a></cvi-web-labeled-icon>
          <cvi-web-labeled-icon name="screen_share"><a href="#">Notarid</a></cvi-web-labeled-icon>
          <cvi-web-labeled-icon name="screen_share"><a href="#">Abielu sõlmimise õigust omavad vaimulikud</a></cvi-web-labeled-icon>
        </cvi-web-track>
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
