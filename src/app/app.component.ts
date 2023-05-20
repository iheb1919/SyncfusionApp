import { Component,OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClient, HttpHeaders} from  '@angular/common/http'
import { AuthServices } from './services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

 /*  constructor(private http: HttpClient, private auth:AuthServices,private router:Router   ){
   if (auth.isAuthenticated())  this.router.navigate(['/home'])
   else this.router.navigate(['/login'])

  } */
  

  ngDoCheck(){
    Array.from(document.querySelectorAll<HTMLElement>("body >  div"))
    .forEach((e)=> {
      if (!e.classList.contains("e-menu-wrapper"))
      e.style.display="none"
    })
  }

}
