import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './components/client/add-client/add-client.component';
import { ClientDetailComponent } from './components/client/client-detail/client-detail.component';
import { ClientsListComponent } from './components/client/clients-list/clients-list.component';
import { AddMembershipComponent } from './components/membership/add-membership/add-membership.component';
import { MembershipDetailComponent } from './components/membership/membership-detail/membership-detail.component';
import { MembershipsListComponent } from './components/membership/memberships-list/memberships-list.component';
import { AddPaymentComponent } from './components/payment/add-payment/add-payment.component';
import { PaymentDetailComponent } from './components/payment/payment-detail/payment-detail.component';
import { PaymentListComponent } from './components/payment/payment-list/payment-list.component';
import { AddClientAccountComponent } from './components/client-account/add-client-account/add-client-account.component';
import { ClientAccountDetailComponent } from './components/client-account/client-account-detail/client-account-detail.component';
import { ClientAccountsListComponent } from './components/client-account/client-accounts-list/client-accounts-list.component';
import { SignInComponent } from './components/login/sign-in/sign-in.component';
import { UserGuardGuard } from './user-guard.guard';

const routes: Routes = [

  { path: 'sign-in', component: SignInComponent },
  { path: 'clients', component: ClientsListComponent,canActivate:[UserGuardGuard], pathMatch: "full" },
  { path: 'add-client', component: AddClientComponent,canActivate:[UserGuardGuard], pathMatch: "full"  },
  { path: 'edit-client/:id', component: ClientDetailComponent,canActivate:[UserGuardGuard], pathMatch: "full"  },
  { path: 'memberships', component: MembershipsListComponent,canActivate:[UserGuardGuard], pathMatch: "full"  },
  { path: 'add-membership', component: AddMembershipComponent,canActivate:[UserGuardGuard], pathMatch: "full"  },
  { path: 'edit-membership/:id', component: MembershipDetailComponent,canActivate:[UserGuardGuard], pathMatch: "full"  },
  { path: 'payments', component: PaymentListComponent,canActivate:[UserGuardGuard], pathMatch: "full"  },
  { path: 'add-payment', component: AddPaymentComponent,canActivate:[UserGuardGuard], pathMatch: "full"  },
  { path: 'edit-payment/:id', component: PaymentDetailComponent,canActivate:[UserGuardGuard], pathMatch: "full"  },
  { path: 'client-accounts', component: ClientAccountsListComponent,canActivate:[UserGuardGuard], pathMatch: "full"  },
  { path: 'add-client-account', component: AddClientAccountComponent,canActivate:[UserGuardGuard], pathMatch: "full"  },
  { path: 'edit-client-account/:id', component: ClientAccountDetailComponent,canActivate:[UserGuardGuard], pathMatch: "full"  },
  { path: '**', redirectTo: 'sign-in' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
