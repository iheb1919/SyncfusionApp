import { Component, HostListener, OnInit,
   Output,EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { SidebarComponent,ClickEventArgs } from '@syncfusion/ej2-angular-navigations';



@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  /* @ViewChild('sidebarTreeviewInstance') sidebarTreeviewInstance: SidebarComponent; */
  routeUrl : string[]= []
  goto:string=""
constructor(private router: Router){
  
  console.log(router.url);
    
  this.router.events.subscribe((event) => {
  let test:string[]=[]
  console.log(event)

    if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        this.routeUrl = event.url.split('/');
        this.routeUrl.splice(0,1)
        console.log( this.routeUrl);
    }

  
});
   
}
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

scrollTop(){
  window.scroll(0,0)
}

}
