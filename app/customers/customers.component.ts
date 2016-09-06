import { Component, OnInit } from '@angular/core'
import { CustomerComponent } from './../customer/customer.component'


@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    directives: [CustomerComponent]
})
export class CustomersComponent {

  customers = [
    {id: 1, name: 'Ward'},
    {id: 2, name: 'Kevin'},
    {id: 3, name: 'Eric'},
    {id: 4, name: 'Sally'},
    {id: 5, name: 'Emmet'}
  ]


  constructor() {console.log(module.id); }

}
