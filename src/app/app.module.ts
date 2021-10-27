import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';

import { HeaderComponent } from './header/header.component';
import { Row2Component } from './row2/row2.component';
import { NavComponent } from './nav/nav.component';
import { Row3Component } from './row3/row3.component';
import { VideoComponent } from './video/video.component';
import { TicketComponent } from './ticket/ticket.component';
import { ConcertComponent } from './concert/concert.component';
import { LiveComponent } from './live/live.component';
import { OnlineComponent } from './online/online.component';

@NgModule({
  declarations: [
    AppComponent,
   
    LoginComponent,
    SignupComponent,
    AboutComponent,

    HeaderComponent,
    Row2Component,
    NavComponent,
    Row3Component,
    VideoComponent,
    TicketComponent,
    ConcertComponent,
    LiveComponent,
    OnlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
