import { Component } from '@angular/core';

@Component({
  selector: 'veera-ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ria';
  html = `
    <h3 class="veera-html-section__title">Kontaktid</h3>
    <div class="veera-html-section__content">
      <div class="veera-html-section__content-elements">
        <p>Võta ühendust perekonnaseisuasutusega, kus soovid abielu sõlmida</p>
      </div>
      <div class="veera-html-section__content-elements">
        <veera-web-labeled-icon name="screen_share"><a href="#">Maakonnakeskuste kohalikud omavalitsused</a></veera-web-labeled-icon>
        <veera-web-labeled-icon name="screen_share"><a href="#">Notarid</a></veera-web-labeled-icon>
        <veera-web-labeled-icon name="screen_share"><a href="#">Abielu sõlmimise õigust omavad vaimulikud</a></veera-web-labeled-icon>
      </div>
    </div>
  `;
}
