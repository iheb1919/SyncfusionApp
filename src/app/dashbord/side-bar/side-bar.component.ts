import { Component,SimpleChanges,EventEmitter,HostListener,Input,OnInit,Output,ViewChild } from '@angular/core';
import { IsubNav } from 'src/app/helpers/subInterface';
import {  ViewEncapsulation, Inject } from '@angular/core';
import { SidebarComponent, ClickEventArgs,TreeViewComponent  } from '@syncfusion/ej2-angular-navigations';
import { Menu, MenuItemModel } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  //providers:[ServicesService]
})
export class SideBarComponent implements OnInit  {
    ngOnInit(): void {
        
    }
    @ViewChild('sidebarTreeviewInstance') sidebarTreeviewInstance: SidebarComponent;
    @Output() calltry:EventEmitter<any> = new EventEmitter<any>
     sideClosed :Boolean = false ;
    groupByTitle(data:any) {
        let result:any = [];
        let groups:any = {};
        let Notitle:any = [];
        data.forEach((item: { title: string | number; }) => {
          if (item.title) {
            if (!groups[item.title]) {
              groups[item.title] = {
                nodeId: item.title,
                nodeText: item.title,
                cssClass: "headerTitle",
                type:"title",
               
              };
              result.push(groups[item.title]);
            }
            else result.push(item)
            //groups[item.title].children.push(item);
          } else {
            Notitle.push(item);
          }
        });
        result.push(...Notitle)
        console.log(result)
        console.log(Notitle)
    
        return result;
      }
      public data: { [key: string]: Object }[] = [
       
        {
          nodeId: '00', nodeText: 'MenuHome', type: 'title' , title:'MenuHome'
      },
        {   
            nodeId: '01',hasChildren: true, title:'MenuHome', nodeText: 'Users', iconCss: 'icon-microchip icon',
            nodeChild:[
                
                { nodeId: '01-02',hasChildren: false, nodeText: 'Admins', iconCss: 'icon-thumbs-up-alt icon',
                nodeChild:[
                
                    { nodeId: '01-02',hasChildren: false, nodeText: 'Admins', iconCss: 'icon-thumbs-up-alt icon',url:'/login'},
                    { nodeId: '01-03',hasChildren: false, nodeText: 'Users', iconCss: 'icon-thumbs-up-alt icon',url:'/login'}
                ]},
                { nodeId: '01-03',hasChildren: false, nodeText: 'Users', iconCss: 'icon-thumbs-up-alt icon',url:'/login'}
            ]
        },
        {
          nodeId: '03', nodeText: ' Menu Quick Start', type: 'title',title:'Menu Quick Start'
      },
        {title:'MenuHome',
            nodeId: '02', nodeText: 'Deployment', iconCss: 'icon-thumbs-up-alt icon',
        },
         
        { title:'MenuHome',
            nodeId: '03', nodeText: 'Quick Start', iconCss: 'icon-docs icon',
        },
        {
            nodeId: '04', nodeText: 'Components', iconCss: 'icon-th icon',
            nodeChild: [
                { nodeId: '04-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon', },
                { nodeId: '04-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '04-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon' }
            ]
        },
        {
            nodeId: '05', nodeText: 'API Reference', iconCss: 'icon-code icon',
            nodeChild: [
                { nodeId: '05-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon' },
                { nodeId: '05-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon' }
            ]
        },
        {
            nodeId: '06', nodeText: 'Browser Compatibility', iconCss: 'icon-chrome icon'
        },
        {
            nodeId: '07', nodeText: 'Upgrade Packages', iconCss: 'icon-up-hand icon'
        },
        {
            nodeId: '08', nodeText: 'Release Notes', iconCss: 'icon-bookmark-empty icon'
        },
        {
            nodeId: '09', nodeText: 'FAQ', iconCss: 'icon-help-circled icon'
        },
        {
            nodeId: '10', nodeText: 'License', iconCss: 'icon-doc-text icon'
        } 
      ];
    ngAfterViewInit(){

        this.calltry.emit(this.sidebarTreeviewInstance)
    }
    
    public width: string = '280px';
    public target: string = '.main-sidebar';
	public mediaQuery: string = '(min-width: 992px)';
    public dockSize: string = '80px';
   
    public fields: object = { 
        hasChildren: "hasChildren",
        dataSource: this.data,
        id: 'nodeId', 
        text: 'nodeText', 
        child: 'nodeChild',
        iconCss: "iconCss" };
    @HostListener('mouseenter', ['$event']) 
    onMouseEnter( ) {
        const li_lvl1  = Array.from(document.querySelectorAll<HTMLElement>('.e-list-item.e-has-child'))
        if( !this.sidebarTreeviewInstance.isOpen && li_lvl1) {
            console.log('onMouseIn'+ this.sidebarTreeviewInstance.isOpen)
            li_lvl1.map((e:any)=>{ 
               const  ul=e.querySelector('ul')
               if(!e.classList.contains('e-node-collapsed'))ul.style.display="block"
            })
            this.sidebarTreeviewInstance.toggle();
            this.sideClosed = true
        }  
    }
     @HostListener('mouseleave', ['$event']) 
    onMouseLeave() {
        if( this.sidebarTreeviewInstance.isOpen && this.sideClosed) {
            console.log('onMouseOut'+ + this.sidebarTreeviewInstance.isOpen)
            Array.from(document.querySelectorAll<HTMLElement>('li ul')).forEach(ul => ul.style.display = 'none');           
            this.sidebarTreeviewInstance.toggle();
            this.sideClosed = false
        }
    } 
    
 

}
