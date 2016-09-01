import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    //template: '<h1>My First Angular 2 App</h1>'
    //template: `<h1>{{title}}</h1>
    //           <div [style.color]="wardsColor">Hello {{name}}</div>
    //           <button (click)="changeSuitColor()">Change Suit Color</button>
    //`
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
  // [] means property binding
  // () means event binding
  title = 'Custom App';
  name = "ddd";
  wardsColor = "red";
  customers = [
    {id: 1, name: 'Ward'},
    {id: 2, name: 'Kevin'},
    {id: 3, name: 'Eric'},
    {id: 4, name: 'Sally'},
    {id: 5, name: 'Emmet'}
  ]

  changeSuitColor() {
    this.wardsColor =  this.wardsColor === 'blue' ? 'red': 'blue';
  }







}
