import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MembershipCrudService } from '../../../services/membership-crud.service';

@Component({
  selector: 'app-membership-detail',
  templateUrl: './membership-detail.component.html',
  styleUrls: ['./membership-detail.component.css'],
})
export class MembershipDetailComponent implements OnInit {
  getId: any;
  updateMembershipForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private membershipCrudService: MembershipCrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.updateMembershipForm = this.formBuilder.group({
      price: 0,
      register_tax: 0,
      daily_profit: 0,
      max_time: 0,
      max_payment: 0,
      payment_cost: 0,
    });

    this.membershipCrudService.GetMembership(this.getId).subscribe({
      next: (res) => {
        this.updateMembershipForm.setValue({
          price: res['PRICE'],
          register_tax: res['REGISTER_TAX'],
          daily_profit: res['DAILY_PROFIT'],
          max_time: res['MAX_TIME'],
          max_payment: res['MAX_PAYMENT'],
          payment_cost: res['PAYMENT_COST'],
        });
      },
    });
  }

  ngOnInit(): void {}

  onUpdate(): any {
    this.membershipCrudService
      .UpdateMembership(this.getId, this.updateMembershipForm.value)
      .subscribe({
        next: () => {
          alert('Membresia actualizada satisfactoriamente');
          this.ngZone.run(() => this.router.navigateByUrl('/memberships'));
        },
      });
  }

  onCancel(): any {
    this.updateMembershipForm = this.formBuilder.group({
      price: 0,
      register_tax: 0,
      daily_profit: 0,
      max_time: 0,
      max_payment: 0,
      payment_cost: 0,
    });
    this.ngZone.run(() => this.router.navigateByUrl('/memberships'));
  }
}
