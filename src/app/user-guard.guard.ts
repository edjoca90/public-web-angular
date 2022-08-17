import { UsersService } from './services/users.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';
import { AppRoutingModule } from './app-routing.module';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {
  constructor (private cookieService:UsersService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const cookie= this.cookieService.getToken()
      if(!cookie){
        this.router.navigateByUrl('sign-in')
      }
    return true;
  }

}
