import { Component, Inject, OnInit } from '@angular/core';

import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt/angular2-jwt';

import * as MicrosoftGraph from "@microsoft/microsoft-graph-types"

import * as request from 'superagent';

import { AdalService } from 'ng2-adal/services/adal.service';
import {SecretService} from '../services/secret.service';

@Component({
    selector: 'MicrosoftGraph',
    template: `<button (click)="getProfile()">Get profile using Microsoft Graph</button>`
})
export class MicrosoftGraphComponent {
    
    private userProfile: any;

    constructor(
        private adalService: AdalService,
        private secretService: SecretService,
        private http1: AuthHttp) {
        adalService.init(secretService.adalConfig);

        }


   public getProfile(){
       this.adalService.acquireToken("https://graph.microsoft.com").subscribe(function(token){
        console.log(token)

        request
            .get("https://graph.microsoft.com/v1.0/me")
            .set('Authorization', 'Bearer ' + token)
            .end((err:any, res:any) => {
                if (err) {
                    console.error(err)
                    return;
                }
                let user:[MicrosoftGraph.User] = res.body;
                  console.log(user);

            })
       })
  }
  
}