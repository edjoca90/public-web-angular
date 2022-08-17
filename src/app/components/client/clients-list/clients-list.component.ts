import { Component, OnInit } from '@angular/core';
import { ClientCrudService } from '../../../services/client-crud.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css'],
})
export class ClientsListComponent implements OnInit {
  Clients: any = [];

  constructor(private clientCrudService: ClientCrudService) {}

  ngOnInit(): void {
    this.clientCrudService.GetClients().subscribe({
      next: (data) => {
        this.Clients = data;
      },
      error: (e) => console.error(e),
    });
  }

  onDelete(id: any, i: any) {
    if (window.confirm('¿Esta seguro de eliminar al Cliente?')) {
      this.clientCrudService.DeleteClient(id).subscribe({
        next: () => {
          this.Clients.splice(i, 1);
        },
      });
    }
  }
}
