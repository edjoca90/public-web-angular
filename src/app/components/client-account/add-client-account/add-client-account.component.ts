import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClientAccountCrudService } from '../../../services/client-account-crud.service';

@Component({
  selector: 'app-add-client-account',
  templateUrl: './add-client-account.component.html',
  styleUrls: ['./add-client-account.component.css'],
})
export class AddClientAccountComponent implements OnInit {
  clientAccountForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private clientAccountCrudService: ClientAccountCrudService
  ) {
    this.clientAccountForm = this.formBuilder.group({
      start_date: [''],
      end_date: [''],
      investment: 0,
      status: 0,
      account_id: 0,
      membership_id: 0,
      client_id: 0,
    });
  }

  ngOnInit(): void {}

  onSubmit(): any {
    this.clientAccountCrudService
      .AddClientAccount(this.clientAccountForm.value)
      .subscribe({
        next: () => {
          alert('Cuenta creada satisfactoriamente');
          this.ngZone.run(() => this.router.navigateByUrl('/client-accounts'));
        },
        error: (err) => alert(err),
      });
  }
}
