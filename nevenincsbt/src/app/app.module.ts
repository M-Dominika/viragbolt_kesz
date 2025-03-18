import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KiiratasComponent } from './kiiratas/kiiratas.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { ArukComponent } from './aruk/aruk.component';
import { MegrendelesComponent } from './megrendeles/megrendeles.component';

@NgModule({
  declarations: [
    AppComponent,
    KiiratasComponent,
    IndexComponent,
    ArukComponent,
    MegrendelesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
