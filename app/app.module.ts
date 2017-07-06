import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AdalService} from 'ng2-adal/core';
import {SecretService} from './services/secret.service';

import { AppComponent }  from './components/app.component';

import {routes} from './routers/app.router'
import {HomeComponent} from "./components/home.component";
import {WelcomeComponent} from "./components/welcome.component";
import {LoggedInGuard} from "./authentication/logged-in.guard";

import {MicrosoftGraphComponent} from "./components/microsoftGraph.component";

import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt/angular2-jwt';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, routes, HttpModule],
  declarations: [ AppComponent, HomeComponent, WelcomeComponent ,MicrosoftGraphComponent],
  providers: [AdalService, SecretService, LoggedInGuard,provideAuth({

    tokenGetter: (() => localStorage.getItem('id_token')),

  })],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


