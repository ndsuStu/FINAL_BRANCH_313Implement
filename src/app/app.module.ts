import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateCustAcctComponent } from './create-cust-acct/create-cust-acct.component';
import { GeneralTabComponent } from './general-tab/general-tab.component';
import { EmployeeTabComponent } from './employee-tab/employee-tab.component';
import { CustomerTabComponent } from './customer-tab/customer-tab.component';
import { CustAcctCardComponent } from './cust-acct-card/cust-acct-card.component';
import { CustJobCardComponent } from './cust-order-card/cust-order-card.component';
import { LoginCompComponent } from './login-comp/login-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustAcctComponent,
    GeneralTabComponent,
    EmployeeTabComponent,
    CustomerTabComponent,
    CustAcctCardComponent,
    CustJobCardComponent,
    LoginCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
