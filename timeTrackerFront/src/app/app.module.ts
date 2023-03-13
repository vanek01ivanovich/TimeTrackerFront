import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './modules/authorization/authorization.component';
import { LogInComponent } from './modules/authorization/log-in/log-in.component';
import { SignUpComponent } from './modules/authorization/sign-up/sign-up.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./modules/core/jwt.intercepter";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

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
        FormsModule,
        HttpClientModule
    ],
  entryComponents: [LogInComponent],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}, HttpClientModule, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
