import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServices } from './auth.service';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class GuardService  implements CanActivate {
  constructor( private authService: AuthenticationService ,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree |Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isLogged()){ 
      console.log(true)
   // this.router.navigate(['/home'])
    return true
  }
   else{
    this.router.navigate(['/aze'])
    return false
   }
  
 
  }
}

