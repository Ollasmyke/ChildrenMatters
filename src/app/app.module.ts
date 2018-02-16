import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StandComponent } from './stand/stand.component';
import { SideNavComponent } from './layouts/side-nav/side-nav.component';
import { HomeSideNavComponent } from './layouts/home-side-nav/home-side-nav.component';
import { MainSideNavComponent } from './layouts/main-side-nav/main-side-nav.component';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { StandSideNavComponent } from './layouts/stand-side-nav/stand-side-nav.component';
// import { NgbootstrapModule } from './ngbootstrap.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StandComponent,
    SideNavComponent,
    HomeSideNavComponent,
    MainSideNavComponent,
    StandSideNavComponent,
    // NgbootstrapModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
