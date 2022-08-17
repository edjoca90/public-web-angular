import { CookieService } from 'ngx-cookie-service';
import { Injectable } from "@angular/core";
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';


@Injectable({
  providedIn: "root"
})
export class UsersService {

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private cookies: CookieService) {}


  setToken(token: string) {
    this.cookies.set("CSToken", token);
  }
  getToken() {
    return this.cookies.get("CSToken");
  }
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }
  logout(){
    this.cookies.delete('CSToken');
    window.location.reload();
  }
}
