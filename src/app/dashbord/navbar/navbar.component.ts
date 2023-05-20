import { Component,SimpleChanges,ViewChild, EventEmitter, HostListener, OnInit, Output ,Input, OnChanges} from '@angular/core';
import { enableRipple, getElement } from '@syncfusion/ej2-base';
import { MenuItemModel, SidebarComponent,ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { query } from '@angular/animations';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent    {
  srcImg  ="../../../assets/Flag_of_the_United_States.svg.webp"
  constructor(){}
  //@ViewChild('sidebarMenuInstancee') sidebarMenuInstancee!: SidebarComponent;
@Input() trye:SidebarComponent
@Input() sideClosed:boolean;
@Output() isCheckedChange = new EventEmitter<boolean>();

 togl(){
  const mainSide =document.getElementById('main-sidebar')
   if(!this.trye.isOpen){
    console.log(this.trye.isOpen + 'display None')
    //if (mainSide) mainSide.style.width = '90px';
    Array.from(document.querySelectorAll<HTMLElement>('li ul')).forEach(ul => ul.style.display = 'none');           
  }
  else{
    console.log(this.trye.isOpen + 'display block')
   // if (mainSide) mainSide.style.width = '290px';
    const li_lvl1  = Array.from(document.querySelectorAll<HTMLElement>('.e-list-item.e-level-1.e-has-child'))
    li_lvl1.map((e:any)=>{ 
      const  ul=e.querySelector('ul')
      if(!e.classList.contains('e-node-collapsed'))ul.style.display="block"
   })
  }
  this.trye.toggle()
  console.log(this.trye.isOpen)
  //this.isCheckedChange.emit(!this.sideClosed);
  document.getElementById('logo')?.classList.toggle("logobrandClose")
  document.getElementById('zz')?.classList.toggle('zz')
 }

  public menuItems: MenuItemModel[] = [
    {
        text: 'File',
        items: [
            { text: 'Open', },
            { text: 'Save' },
            { text: 'Exit' }
        ]
    },
    {
        text: 'Edit',
        items: [
            { text: 'Cut' },
            { text: 'Copy' },
            { text: 'Paste' }
        ]
    },
    {
        text: 'View',
        items: [
            { text: 'Toolbar' },
            { text: 'Sidebar' }
        ]
    },
   
];

    search=()=>{
      const search = document.getElementById('Nav-search');
      if (search)search.classList.toggle("active")
    } 
    searchfor(){
      console.log("qsqsd")
    }
    collapsenavbar(){
      document.getElementById('btnn')?.classList.toggle('mobile-show')
      document.getElementById('naavbar-toggler')?.classList.toggle("barClose")

    }
  
 
}

