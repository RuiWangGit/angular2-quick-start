import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import 'rxjs/add/operators/map'; // just get map
import 'rxjs/Rx'; //get everything from Rx

import {Observable } from 'rxjs/Rx';


const URL_CUSTOMER = "app/customers.json";


@Injectable()
export class CustomerService {

  constructor(private _http: Http) {

  }

  getCustomers() {
    return this._http.get(URL_CUSTOMER)
      .map((response:Response) => response.json())
      .catch(this._handleError);
      ;
  }

  _handleError(err: any) {
    console.log(err); // log this somewhere and format the message well for devs;
    return Observable.throw(err); // our opportunity customize this error
  }



}
