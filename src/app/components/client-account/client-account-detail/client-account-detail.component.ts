import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClientAccountCrudService } from '../../../services/client-account-crud.service';

@Component({
  selector: 'app-client-account-detail',
  templateUrl: './client-account-detail.component.html',
  styleUrls: ['./client-account-detail.component.css'],
})
export class ClientAccountDetailComponent implements OnInit {
  getId: any;
  updateClientAccountForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private clientAccountCrudService: ClientAccountCrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.updateClientAccountForm = this.formBuilder.group({
      start_date: [''],
      end_date: [''],
      investment: 0,
      status: 0,
      account_id: 0,
      membership_id: 0,
      client_id: 0,
    });

    this.clientAccountCrudService.GetClientAccount(this.getId).subscribe({
      next: (res) => {
        this.updateClientAccountForm.setValue({
          start_date: res['START_DATE'].split('T')[0],
          end_date: res['END_DATE'].split('T')[0],
          investment: res['INVESTMENT'],
          status: res['STATUS'],
          account_id: res['ACCOUNT_ID'],
          membership_id: res['MEMBERSHIP_ID'],
          client_id: res['CLIENT_ID'],
        });
      },
    });
  }

  ngOnInit(): void {}

  onUpdate(): any {
    this.clientAccountCrudService
      .UpdateClientAccount(this.getId, this.updateClientAccountForm.value)
      .subscribe({
        next: () => {
          alert('Cuenta actualizada satisfactoriamente');
          this.ngZone.run(() => this.router.navigateByUrl('/client-accounts'));
        },
      });
  }

  onCancel(): any {
    this.updateClientAccountForm = this.formBuilder.group({
      start_date: [''],
      end_date: [''],
      investment: 0,
      status: 0,
      account_id: 0,
      membership_id: 0,
      client_id: 0,
    });
    this.ngZone.run(() => this.router.navigateByUrl('/clients-accounts'));
  }
}
