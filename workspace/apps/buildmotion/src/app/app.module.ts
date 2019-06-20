import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app-routes.module';
import { SiteComponentsModule } from './modules/site-components/site-components.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutesModule, BrowserModule, RouterModule, SharedModule, SiteComponentsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
