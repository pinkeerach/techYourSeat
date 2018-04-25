import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SharedModule } from './_shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { AboutComponent } from './about/about.component';
import { OrganizersComponent } from './organizers/organizers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SponsorsComponent,
    OrganizersComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
