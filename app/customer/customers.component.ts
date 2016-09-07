import { Component, OnInit } from '@angular/core'
import { CustomerComponent } from './customer.component'
import { CustomerService}  from './customer.service'
import { Observable } from 'rxjs/Rx'


@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    directives: [CustomerComponent]

})
export class CustomersComponent implements OnInit{
  //customers: Promise<any[]>;
  //customers: Observable<any[]>;
  customers: any[];

  constructor(private _customerService: CustomerService) {console.log(module.id); }


  ngOnInit() {


    //Observale to array
    this._customerService.getCustomers_RxObservable()
      .subscribe(
        (customers) => this.customers = customers,
        (err) => { console.log(err) }
      )



    //Straight up promise to array
    //this._customerService.getCustomers()
    //  .then((customers) => { this.customers = customers; })
    //  .catch( (err) => { console.log(err);  })
    //


    ////Promise<any[]> version
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
