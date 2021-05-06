import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { ViewControlService } from '../view-control.service';
import { Customer } from '../CustomerAcct/customer';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {

  acctNumber: number = 0;
  password: string = "";
  empPassword: string = "";
  errorMessage: string = "";
  

  loginCust(){
    if(this.acctServ.checkPass(this.acctNumber, this.password) == true){
      this.viewControl.isCust = this.acctNumber;
      this.errorMessage = "";

    }else{
      this.errorMessage = "Login incorrect. Please Try Again.";
    }
  }

  loginEmp(){
    if(this.empPassword == "pass"){
      this.viewControl.isEmp = true;
      this.errorMessage = "";
    }else{
      this.errorMessage = "Login incorrect. Please Try Again.";

    }
  }

  constructor(public acctServ: AccountService, public viewControl: ViewControlService) { }

  ngOnInit(): void {
  }

}
