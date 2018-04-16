import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SharedModule } from './_shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';

@NgModule({
<<<<<<< HEAD
  declarations: [AppComponent, HeaderComponent, AboutComponent],
  imports: [BrowserModule, SharedModule],
=======
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule],
>>>>>>> 583e793955aab74b615b48995345d7a041f90ab5
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
