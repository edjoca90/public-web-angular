import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientComponent } from './components/client/add-client/add-client.component';
import { ClientDetailComponent } from './components/client/client-detail/client-detail.component';
import { ClientsListComponent } from './components/client/clients-list/clients-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddMembershipComponent } from './components/membership/add-membership/add-membership.component';
import { MembershipDetailComponent } from './components/membership/membership-detail/membership-detail.component';
import { MembershipsListComponent } from './components/membership/memberships-list/memberships-list.component';
import { PaymentListComponent } from './components/payment/payment-list/payment-list.component';
import { PaymentDetailComponent } from './components/payment/payment-detail/payment-detail.component';
import { AddPaymentComponent } from './components/payment/add-payment/add-payment.component';
import { AddClientAccountComponent } from './components/client-account/add-client-account/add-client-account.component';
import { ClientAccountDetailComponent } from './components/client-account/client-account-detail/client-account-detail.component';
import { ClientAccountsListComponent } from './components/client-account/client-accounts-list/client-accounts-list.component';
import { SignInComponent } from './components/login/sign-in/sign-in.component';
import { MainHeaderComponent } from './components/common/main-header/main-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    ClientDetailComponent,
    ClientsListComponent,
    AddMembershipComponent,
    MembershipDetailComponent,
    MembershipsListComponent,
    PaymentListComponent,
    PaymentDetailComponent,
    AddPaymentComponent,
    AddClientAccountComponent,
    ClientAccountDetailComponent,
    ClientAccountsListComponent,
    SignInComponent,
    MainHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
