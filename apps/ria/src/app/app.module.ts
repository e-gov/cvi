import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from '@ria-poc/button';
import { InputModule } from '@ria-poc/input';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonModule, InputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
