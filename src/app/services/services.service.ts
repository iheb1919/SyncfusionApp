import { Directive, Injectable } from '@angular/core';
import { SidebarComponent, ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { Component,EventEmitter,HostListener,Input,OnInit,Output,ViewChild } from '@angular/core';
import { IsubNav } from 'src/app/helpers/subInterface';
import {  ViewEncapsulation, Inject } from '@angular/core';
import { Menu, MenuItemModel } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
import { Subject } from 'rxjs';

@Injectable({
  providedIn:'root'
 
})
export class ServicesService {
/* private btnInstance : SidebarComponent;
triggerSide(){
  this.btnInstance.toggle()
}
triggerNav(){
  this.btnInstance.toggle()
} */
private subject = new Subject<any>();

  sendMessage(message: any) {
    console.log(message)
    this.subject.next(message);
  }

  getMessage() {
    return this.subject.asObservable();
  }
  constructor() { }
}
