import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "../components/home.component";
import {WelcomeComponent} from "../components/welcome.component";
import {LoggedInGuard} from "../authentication/logged-in.guard";
import {MicrosoftGraphComponent} from "../components/microsoftGraph.component";

export const router: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
   {
    path:'graph',
    component: MicrosoftGraphComponent
  },

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
