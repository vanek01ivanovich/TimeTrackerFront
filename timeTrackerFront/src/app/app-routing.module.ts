import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogInComponent} from "./modules/authorization/log-in/log-in.component";
import {SignUpComponent} from "./modules/authorization/sign-up/sign-up.component";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {ProjectComponent} from "./modules/project/project.component";
import {TasksComponent} from "./modules/tasks/tasks.component";
import {UserProfileComponent} from "./modules/user-profile/user-profile.component";
import {UserComponent} from "./modules/user/user.component";
import {FindUserComponent} from "./modules/user/find-user/find-user.component";
import {AllUsersComponent} from "./modules/user/all-users/all-users.component";

const routes: Routes = [
  {path: 'login', component: LogInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'my-tasks', component: TasksComponent},
  {path: 'my-profile', component: UserProfileComponent},
  {path: 'users', component: UserComponent},
  {path: 'users/find-user', component: FindUserComponent},
  {path: 'users/all-users', component: AllUsersComponent},
  {path: 'dashboard', component: DashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
