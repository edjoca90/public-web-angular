import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PaymentCrudService } from '../../../services/payment-crud.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css'],
})
export class PaymentDetailComponent implements OnInit {
  getId: any;
  updatePaymentForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private membershipCrudService: PaymentCrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.updatePaymentForm = this.formBuilder.group({
      account_id: 0,
      payment_date: [''],
      ammount: 0,
      payment_id: 0,
    });

    this.membershipCrudService.GetPayment(this.getId).subscribe({
      next: (res) => {
        this.updatePaymentForm.setValue({
          account_id: res['ACCOUNT_ID'],
          payment_date: res['PAYMENT_DATE'].split('T')[0],
          ammount: res['AMMOUNT'],
          payment_id: res['PAYMENT_ID'],
        });
      },
    });
  }

  ngOnInit(): void {}

  onUpdate(): any {
    this.membershipCrudService
      .UpdatePayment(this.getId, this.updatePaymentForm.value)
      .subscribe({
        next: () => {
          alert('Pago actualizado satisfactoriamente');
          this.ngZone.run(() => this.router.navigateByUrl('/payments'));
        },
      });
  }

  onCancel(): any {
    this.updatePaymentForm = this.formBuilder.group({
      account_id: 0,
      payment_date: [''],
      ammount: 0,
      payment_id: 0,
    });
    this.ngZone.run(() => this.router.navigateByUrl('/payments'));
  }
}
