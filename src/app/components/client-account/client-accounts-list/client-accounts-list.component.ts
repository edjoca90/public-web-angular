import { Component, OnInit } from '@angular/core';
import { ClientAccountCrudService } from '../../../services/client-account-crud.service';

@Component({
  selector: 'app-client-accounts-list',
  templateUrl: './client-accounts-list.component.html',
  styleUrls: ['./client-accounts-list.component.css'],
})
export class ClientAccountsListComponent implements OnInit {
  ClientsAccounts: any = [];

  constructor(private clientAccountCrudService: ClientAccountCrudService) {}

  ngOnInit(): void {
    this.clientAccountCrudService.GetClientAccounts().subscribe({
      next: (data) => {
        this.ClientsAccounts = data;
        for (let index = 0; index < this.ClientsAccounts.length; index++) {
          let start_date = this.ClientsAccounts[index]['START_DATE'].split('T');
          this.ClientsAccounts[index]['START_DATE'] = start_date[0];
          let end_date = this.ClientsAccounts[index]['END_DATE'].split('T');
          this.ClientsAccounts[index]['END_DATE'] = end_date[0];
        }
      },
      error: (e) => console.error(e),
    });
  }

  onDelete(id: any, i: any) {
    if (window.confirm('¿Esta seguro de eliminar la Cuenta?')) {
      this.clientAccountCrudService.DeleteClientAccount(id).subscribe({
        next: () => {
          this.ClientsAccounts.splice(i, 1);
        },
      });
    }
  }
}
