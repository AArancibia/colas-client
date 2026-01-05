import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NopagefoundComponent } from "./shared/nopagefound/nopagefound.component";
import {HomeComponent} from '@app/home/pages/home/home.component';
import {AuthGuard} from '@app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        redirectTo: "ticket",
        pathMatch: "full"
      },
      {
        path: "ticket",
        loadChildren: () => import('@app/home/pages/ticket/ticket.module').then(m => m.TicketModule)
      }
    ]
  },
  {
    path: "**",
    component: NopagefoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
