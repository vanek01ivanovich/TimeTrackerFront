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
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProjectComponent } from './modules/project/project.component';
import { TasksComponent } from './modules/tasks/tasks.component';
import { UserComponent } from './modules/user/user.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { NavBarComponent } from './modules/nav-bar/nav-bar.component';
import { FindUserComponent } from './modules/user/find-user/find-user.component';
import { AllUsersComponent } from './modules/user/all-users/all-users.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    LogInComponent,
    SignUpComponent,
    DashboardComponent,
    ProjectComponent,
    TasksComponent,
    UserComponent,
    UserProfileComponent,
    NavBarComponent,
    FindUserComponent,
    AllUsersComponent
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
