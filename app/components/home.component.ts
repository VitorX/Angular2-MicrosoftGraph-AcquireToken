import {Component} from '@angular/core';
import {AdalService} from 'ng2-adal/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  template: `<div protected><h1>This is the dashboard page.</h1>
  <button (click)="navigateToGraphPage()">NavigateToGraphPage</button> 
  <button (click)="logOut()">Logout</button> 
  </div>
  `
})
export class HomeComponent {

 
  constructor(
    private adalService: AdalService, 
    private router: Router
  ) {
    console.log('Entering home');
  }


  public logOut() {
    this.adalService.logOut();
  }

  public navigateToGraphPage(){
    this.router.navigate(['/graph'])
  }
 
}
