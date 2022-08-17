import { Component, OnInit } from '@angular/core';
import { PaymentCrudService } from '../../../services/payment-crud.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css'],
})
export class PaymentListComponent implements OnInit {
  Payments: any = [];

  constructor(private paymentCrudService: PaymentCrudService) {}

  ngOnInit(): void {
    this.paymentCrudService.GetPayments().subscribe({
      next: (data) => {
        this.Payments = data;
        for (let index = 0; index < this.Payments.length; index++) {
          let payment_date = this.Payments[index]['PAYMENT_DATE'].split('T');
          this.Payments[index]['PAYMENT_DATE'] = payment_date[0];
        }
      },
      error: (e) => console.error(e),
    });
  }

  onDelete(id: any, i: any) {
    if (window.confirm('¿Esta seguro de eliminar el Pago?')) {
      this.paymentCrudService.DeletePayment(id).subscribe({
        next: () => {
          this.Payments.splice(i, 1);
        },
      });
    }
  }
}
