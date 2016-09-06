import { Component, OnInit } from '@angular/core'
import { CustomerComponent } from './../customer/customer.component'
import { CustomerService }   from './../customer/customer.service';
import { Observable } from 'rxjs/Rx'


@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    directives: [CustomerComponent],
    providers: [CustomerService]
})
export class CustomersComponent implements OnInit{
  customers: Promise<any[]>;
  //customers: Observable<any[]>;
  //customers: any[];

  constructor(private _customerService: CustomerService) {console.log(module.id); }


  ngOnInit() {

    this._customerService.getCustomers()
      .then((customers) => { this.customers = customers; })
      .catch( (err) => { console.log(err);  })



    //Promise<any[]> version
    //this.customers = this._customerService.getCustomers()
    //  .catch( (err) => {
    //    console.log(err);  //don't do this, show the user a nice message
    //    // now we eat it, but only if the message has been communicated to the user
    //  })

    //Rx observable version
    //this.customers = this._customerService.getCustomers()
    //  .catch( (err) => {
    //    console.log(err);  //don't do this, show the user a nice message
    //    return Observable.of(true);
    //    // now we eat it, but only if the message has been communicated to the user
    //  })
  }

}
