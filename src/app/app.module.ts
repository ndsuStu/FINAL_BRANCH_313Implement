import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { CreateCustAcctComponent } from './create-cust-acct/create-cust-acct.component';
import { GeneralTabComponent } from './general-tab/general-tab.component';
import { EmployeeTabComponent } from './employee-tab/employee-tab.component';
import { CustomerTabComponent } from './customer-tab/customer-tab.component';
import { CustAcctCardComponent } from './cust-acct-card/cust-acct-card.component';
import { CustJobCardComponent } from './cust-order-card/cust-order-card.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchFormComponent } from './search-form/search-form.component';
import { TabberComponent } from './tabber/tabber.component';
import { EditComponent } from './edit/edit.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { EmployeeComponent } from './employee/employee.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateCustAcctComponent,
    GeneralTabComponent,
    EmployeeTabComponent,
    CustomerTabComponent,
    CustAcctCardComponent,
    CustJobCardComponent,
    LoginCompComponent,
    SearchFormComponent,
    TabberComponent,
    EditComponent, 
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule, 
  
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
