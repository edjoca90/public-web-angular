import { Injectable } from '@angular/core';
import { Payment } from '../models/Payment';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaymentCrudService {
  // Node/Express API
  REST_API: string = 'https://centrilabcolombia.com/payments-api';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  // Add Payment
  AddPayment(data: Payment): Observable<any> {
    let API_URL = `${this.REST_API}/add-payment`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  // Get all Payments
  GetPayments(): Observable<any> {
    return this.httpClient.get(`${this.REST_API}/payments`);
  }

  // Get single Payment
  GetPayment(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/see-payment/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Update Payment
  UpdatePayment(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-payment/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Delete Payment
  DeletePayment(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-payment/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
