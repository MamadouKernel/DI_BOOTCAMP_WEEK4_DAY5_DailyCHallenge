import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RSearchComponent } from './recipe/r-search/r-search.component';
import { RInfoComponent } from './recipe/r-info/r-info.component';

@NgModule({
  declarations: [
    AppComponent,
    RSearchComponent,
    RInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
