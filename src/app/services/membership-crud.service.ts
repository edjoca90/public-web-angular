import { Injectable } from '@angular/core';
import { Membership } from '../models/Membership';
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
export class MembershipCrudService {
  // Node/Express API
  REST_API: string = 'https://centrilabcolombia.com/memberships-api';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  // Add Membership
  AddMembership(data: Membership): Observable<any> {
    let API_URL = `${this.REST_API}/add-membership`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  // Get all Memberships
  GetMemberships(): Observable<any> {
    return this.httpClient.get(`${this.REST_API}/memberships`);
  }

  // Get single Membership
  GetMembership(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/see-membership/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Update Membership
  UpdateMembership(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-membership/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Delete Membership
  DeleteMembership(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-membership/${id}`;
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
