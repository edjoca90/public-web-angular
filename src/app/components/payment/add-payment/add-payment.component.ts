import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PaymentCrudService } from '../../../services/payment-crud.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css'],
})
export class AddPaymentComponent implements OnInit {
  paymentForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private paymentCrudService: PaymentCrudService
  ) {
    this.paymentForm = this.formBuilder.group({
      account_id: 0,
      payment_date: [''],
      ammount: 0,
      payment_id: 0,
    });
  }

  ngOnInit(): void {}

  onSubmit(): any {
    this.paymentCrudService.AddPayment(this.paymentForm.value).subscribe({
      next: () => {
        alert('Pago creado satisfactoriamente');
        this.ngZone.run(() => this.router.navigateByUrl('/payments'));
      },
      error: (err) => alert(err),
    });
  }
}
