import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MembershipCrudService } from '../../../services/membership-crud.service';

@Component({
  selector: 'app-add-membership',
  templateUrl: './add-membership.component.html',
  styleUrls: ['./add-membership.component.css'],
})
export class AddMembershipComponent implements OnInit {
  membershipForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private membershipCrudService: MembershipCrudService
  ) {
    this.membershipForm = this.formBuilder.group({
      membership_id: 0,
      price: 0,
      register_tax: 0,
      daily_profit: 0,
      max_time: 0,
      max_payment: 0,
      payment_cost: 0,
    });
  }

  ngOnInit(): void {}

  onSubmit(): any {
    this.membershipCrudService
      .AddMembership(this.membershipForm.value)
      .subscribe({
        next: () => {
          alert('Membresia creada satisfactoriamente');
          this.ngZone.run(() => this.router.navigateByUrl('/memberships'));
        },
        error: (err) => alert(err),
      });
  }
}
