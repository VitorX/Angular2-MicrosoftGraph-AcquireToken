import { Component, Inject, OnInit } from '@angular/core';

import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt/angular2-jwt';



import { AdalService } from 'ng2-adal/services/adal.service';
import {SecretService} from '../services/secret.service';

@Component({
    selector: 'MicrosoftGraph',
    template: `<button (click)="getToken()">Get access token for Microsoft Graph</button>`
})
export class MicrosoftGraphComponent {
    
    private userProfile: any;

    constructor(
        private adalService: AdalService,
        private secretService: SecretService,
        private http1: AuthHttp) {
        adalService.init(secretService.adalConfig);
    }


   public getToken(){
       this.adalService.acquireToken("https://graph.microsoft.com").subscribe(function(token){
        console.log(token)
       })
  }
  
}