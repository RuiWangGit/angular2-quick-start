import { Component } from '@angular/core';
//import { CustomerService }   from './customer/customer.service';
import { CustomersComponent } from './customer/customers.component';

import { CustomerService } from './customer/index'

@Component({
    selector: 'my-app',
    //template: '<h1>My First Angular 2 App</h1>'
    //template: `<h1>{{title}}</h1>
    //           <div [style.color]="wardsColor">Hello {{name}}</div>
    //           <button (click)="changeSuitColor()">Change Suit Color</button>
    //`
    templateUrl: 'app/app.component.html',
    providers: [CustomerService],
    directives: [CustomersComponent]

})

export class AppComponent {
  // [] means property binding
  // () means event binding
  title = 'Custom App';
  name = "ddd";
  wardsColor = "red";

  changeSuitColor() {
    this.wardsColor =  this.wardsColor === 'blue' ? 'red': 'blue';
  }

}
