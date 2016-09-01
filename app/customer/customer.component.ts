import {Component, Input} from '@angular/core'

@Component({
    selector: 'app-customer',
    templateUrl: 'app/customer/customer.component.html'
})
export class CustomerComponent {


   @Input() customer: {id: number, name: string};
  constructor() { }


}
