import {Component, Input} from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'app-customer',
    templateUrl: 'customer.component.html'
})
export class CustomerComponent {


  myColor = 'blue';
  @Input() customer: {id: number, name: string};
  constructor() {console.log(module.id); }

}
