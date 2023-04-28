import { Component, HostListener, OnInit,
   Output,EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { SidebarComponent,ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  /* @ViewChild('sidebarTreeviewInstance') sidebarTreeviewInstance: SidebarComponent; */
public trye:SidebarComponent
public sideClosed:boolean =false 
try(e:SidebarComponent){

if(e) this.trye=e;
}
isCheckedChange(isChecked: boolean) {
  this.sideClosed = isChecked;
}
ngOnInit(): void {
  
}


}
