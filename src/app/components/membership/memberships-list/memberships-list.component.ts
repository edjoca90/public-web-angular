import { Component, OnInit } from '@angular/core';
import { MembershipCrudService } from '../../../services/membership-crud.service';

@Component({
  selector: 'app-memberships-list',
  templateUrl: './memberships-list.component.html',
  styleUrls: ['./memberships-list.component.css'],
})
export class MembershipsListComponent implements OnInit {
  Memberships: any = [];

  constructor(private membershipCrudService: MembershipCrudService) {}

  ngOnInit(): void {
    this.membershipCrudService.GetMemberships().subscribe({
      next: (data) => {
        this.Memberships = data;
      },
      error: (e) => console.error(e),
    });
  }

  onDelete(id: any, i: any) {
    if (window.confirm('¿Esta seguro de eliminar la Membresia?')) {
      this.membershipCrudService.DeleteMembership(id).subscribe({
        next: () => {
          this.Memberships.splice(i, 1);
        },
      });
    }
  }
}
