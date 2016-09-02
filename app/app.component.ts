import { Component } from '@angular/core';
import { CustomersComponent } from './customers/customers.component'

@Component({
    selector: 'my-app',
    //template: '<h1>My First Angular 2 App</h1>'
    //template: `<h1>{{title}}</h1>
    //           <div [style.color]="wardsColor">Hello {{name}}</div>
    //           <button (click)="changeSuitColor()">Change Suit Color</button>
    //`
    templateUrl: 'app/app.component.html',
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
