import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import {AuthenticationComponent} from '@app/authentication/authentication.component';

const authenticationRoutes: Routes = [
  {
    path: "",
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        redirectTo: "signin",
        pathMatch: "full"
      },
      {
        path: "signin",
        component: SigninComponent
      },
      {
        path: "signup",
        component: SignupComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(authenticationRoutes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
