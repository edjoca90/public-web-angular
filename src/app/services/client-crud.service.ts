import { Injectable } from '@angular/core';
import { Client } from '../models/Client';
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
export class ClientCrudService {
  // Node/Express API
  REST_API: string = 'https://centrilabcolombia.com/clients-api';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  // Add Client
  AddClient(data: Client): Observable<any> {
    let API_URL = `${this.REST_API}/add-client`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  // Get all Clients
  GetClients(): Observable<any> {
    return this.httpClient.get(`${this.REST_API}/clients`);
  }

  // Get single Client
  GetClient(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/see-client/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Update Client
  UpdateClient(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-client/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Delete Client
  DeleteClient(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-client/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Error
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
