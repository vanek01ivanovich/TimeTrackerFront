import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './modules/authorization/authorization.component';
import { LogInComponent } from './modules/authorization/log-in/log-in.component';
import { SignUpComponent } from './modules/authorization/sign-up/sign-up.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    LogInComponent,
    SignUpComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
