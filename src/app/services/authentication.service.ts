import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  loggedin :boolean= false
  logIn(){
     this.loggedin = true
  }
  logOut(){
    this.loggedin=false
  }
  isLogged(){
    return this.loggedin
  }
}
