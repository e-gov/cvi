import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ButtonsModule} from "@ria-poc/buttons";
import {InputsModule} from "@ria-poc/inputs";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonsModule, InputsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
