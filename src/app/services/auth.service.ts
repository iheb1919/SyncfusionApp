import { Directive, Injectable } from '@angular/core';
import { SidebarComponent, ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { Component,EventEmitter,HostListener,Input,OnInit,Output,ViewChild } from '@angular/core';
import { IsubNav } from 'src/app/helpers/subInterface';
import {  ViewEncapsulation, Inject } from '@angular/core';
import { Menu, MenuItemModel } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
import { Subject } from 'rxjs';

@Injectable()
export class AuthServices {
  loggedin:boolean=false
  logIn(){
    this.loggedin=true
    console.log("login"+" "+this.loggedin)
    
  }
logOut(){
  this.loggedin=false
}
isAuthenticated(){
  return this.loggedin
}
  constructor() { }

}
