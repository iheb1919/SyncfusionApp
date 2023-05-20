import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeView, TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { AnimationModel } from '@syncfusion/ej2-angular-progressbar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  public animation: AnimationModel = { enable: true, duration: 2000, delay: 0 };
  public value: number = 40;
  labelStyle = {color:'#fff'}
  @ViewChild('listviewInstance') ListView : any

data2=[{id:1,desc:"qzdqsdqsd",title:"eeee"},
        {id:2,desc:"qzdqsdqsd",title:"eeee"},
        {id:3,desc:"qzdqsdqsd",title:"eeee"},
        {id:4,desc:"qzdqsdqsd",title:"eeee"},
        {id:5,desc:"qzdqsdqsd",title:"eeee"},
        {id:6,desc:"qzdqsdqsd",title:"eeee"},
        {id:7,desc:"qzdqsdqsd",title:"eeee"},
        {id:8,desc:"qzdqsdqsd",title:"eeee"},
      
      ]


  showall(){
    
    console.log(this.ListView.getSelectedItems())
  }
    // create an instance of the TreeView
     primaryXAxis : object = {
           
      valueType: 'Category',
      majorTickLines:{width: 1,},
      majorGridLines:{width: 1,},
      lineStyle: { width: 1,  },
      label:'none'
  };

    primaryYAxis : object = {
      
      majorGridLines:{width: 1,},
      majorTickLines:{width: 1,},
      lineStyle: { width: 1,  },
      labelStyle: {
          
          border:"1px solid red"
          
         }
  };
cssClass="headerTitle"
treeviewData = [
  { id: '0', text: "Node 5",title:"hime",cssClass:"headerTitle",type:"title"},
  {
    title:"hime",
    disabled:true,
    text: "Group 1",
    hasChildren: true,
    id:'1',
    children: [
      { id: '1-1', text: "Node 1" },
      { id: '1-2', text: "Node 2" }
    ]
  },
  { id: '5', text: "Node 5",title:"home2",cssClass:"headerTitle",type:"title"},

   {title:"home2", id: '3', text: "Node 3" },
  { id: '4', text: "Node 4" },
  /*{title:"hime",
    text: "Group 2",
    id:'7',
    hasChildren: true,
    children: [
      { id: '7-5', text: "Node 5" },
      { id: '7-6', text: "Node 6" }
    ]
  }, */
];
public data: { [key: string]: Object }[] = [
  {
    nodeId: '03', nodeText: ' Menu Quick Start', type: 'title',title:'Menu Quick Start'
},
  {
    nodeId: '00', nodeText: 'MenuHome', type: 'title' , title:'MenuHome'
},
  {   
      nodeId: '01',hasChildren: true, title:'MenuHome', nodeText: 'Installation', iconCss: 'icon-microchip icon',
      nodeChild:[
          { nodeId: '01-01',hasChildren: false, nodeText: 'Level1', iconCss: 'icon-thumbs-up-alt icon',
              nodeChild:[
                  { nodeId: '01-01-01',hasChildren: true, nodeText: 'Level3', iconCss: 'icon-thumbs-up-alt icon',
                  nodeChild:[
                      { nodeId: '01-01-01-01',hasChildren: true, nodeText: 'Level4', iconCss: 'icon-thumbs-up-alt icon',
                      nodeChild:[
                          { nodeId: '01-01-01-01', nodeText: 'Deployment', iconCss: 'icon-thumbs-up-alt icon',},
                          { nodeId: '01-01-01-02', nodeText: 'Deployment', iconCss: 'icon-thumbs-up-alt icon',}
                      ]},
                      { nodeId: '01-01-01-02', nodeText: 'Depzerloyment', iconCss: 'icon-thumbs-up-alt icon',}
                  ]},
                  { nodeId: '01-01-02', nodeText: 'Deployment', iconCss: 'icon-thumbs-up-alt icon',}
              ]
          },
          { nodeId: '01-02',hasChildren: false, nodeText: 'Deployment', iconCss: 'icon-thumbs-up-alt icon',},
          { nodeId: '01-03',hasChildren: false, nodeText: 'Deployment', iconCss: 'icon-thumbs-up-alt icon',}
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
public fields: object = { 
  hasChildren: "hasChildren",
  dataSource: this.data, 
  id: 'nodeId', 
  text: 'nodeText', 
  child: 'nodeChild', 
  iconCss: "iconCss",
  title:"title" };
// Fields configuration for the TreeView component


// Template for the TreeView nodes

}
