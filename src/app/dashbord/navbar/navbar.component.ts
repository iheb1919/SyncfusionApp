import { Component,SimpleChanges,ViewChild, EventEmitter, HostListener, OnInit, Output ,Input, OnChanges} from '@angular/core';
import { enableRipple, getElement } from '@syncfusion/ej2-base';
import { MenuItemModel, SidebarComponent,ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { ServicesService } from 'src/app/services/services.service';
import { query } from '@angular/animations';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges  {
  constructor(private _service :ServicesService){}
  //@ViewChild('sidebarMenuInstancee') sidebarMenuInstancee!: SidebarComponent;
@Input() trye:SidebarComponent
@Input() sideClosed:boolean;
@Output() isCheckedChange = new EventEmitter<boolean>();
ngOnChanges(changes: SimpleChanges) {
  
    console.log(changes)
    //this.isCheckedChange.emit(this.sideClosed);
  
}
  
 togl(){
   if(!this.sideClosed){
    console.log(this.sideClosed + 'display None')

    Array.from(document.querySelectorAll<HTMLElement>('li ul')).forEach(ul => ul.style.display = 'none');           
  }
  else{
    console.log(this.sideClosed + 'display block')

    const li_lvl1  = Array.from(document.querySelectorAll<HTMLElement>('.e-list-item.e-level-1.e-has-child'))
    li_lvl1.map((e:any)=>{ 
      const  ul=e.querySelector('ul')
      if(!e.classList.contains('e-node-collapsed'))ul.style.display="block"
   })
  }
  this.trye.toggle()
  this.isCheckedChange.emit(!this.sideClosed);
  document.getElementById('logo')?.classList.toggle("logoheader")
  document.getElementById('aa')?.classList.toggle('try')
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
 /*  public x= false;
  @Output() sideNavToggled = new EventEmitter<boolean>();
  @Input() sideNavBtnn
  menuStatus:boolean = false;
  sideNavToggle =()=>{
      this.menuStatus = !this.menuStatus;
      this.sideNavToggled.emit(this.menuStatus)
      console.log(this.sideNavBtnn)
  }

  @HostListener('window:scroll',['$event'])
    onscroll(event){
      if(window.scrollY >= 90){
        this.x = true
        
      }else if(window.scrollY < 90){
        this.x = false
      } 
    }*/
    search=()=>{
      const search = document.getElementById('Nav-search');
      if (search)search.classList.toggle("active")
    } 
    searchfor(){
      console.log("qsqsd")
    }
  
 
}

