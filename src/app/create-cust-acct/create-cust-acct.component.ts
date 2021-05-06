import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { ViewControlService } from '../view-control.service';
import { Customer } from '../CustomerAcct/customer';

@Component({
  selector: 'app-create-cust-acct',
  templateUrl: './create-cust-acct.component.html',
  styleUrls: ['./create-cust-acct.component.css']
})
export class CreateCustAcctComponent implements OnInit {

  constructor(public acctServ: AccountService, public viewControl: ViewControlService) { }

  nextid: number = 0;

  ngOnInit(): void {

    this.nextid = this.acctServ.getNextID();
  }
 
  firstName: string = "";
  lastName: string = "";
  card: string = "";
  passw: string = "";

  addAccount(){
    var newCust: Customer = {
      custId: this.acctServ.getNextID(),
      firstName: this.firstName,
      lastName: this.lastName, 
      orders: [],
      unpaidBalance: 0,
      cardNumber: this.card,
      password: this.passw

    }

    this.acctServ.addCustAcct(newCust);
    this.returnToAppView();
  }

  returnToAppView(){
    this.viewControl.changeViewTo("appView")
  }
}
