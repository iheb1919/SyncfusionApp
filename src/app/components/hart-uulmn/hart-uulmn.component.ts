import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-hart-uulmn',
  templateUrl: './hart-uulmn.component.html',
  styleUrls: ['./hart-uulmn.component.css']
})
export class HartUulmnComponent {
  @Input()height:string="450px"
  @Input() type:string = 'Column'
  public data: Object=[];
  public data1: Object=[];
  public data2: Object=[];
  public data3: Object=[];
  public primaryXAxis: Object={};
  public primaryYAxis: Object={};
  public marker: Object;
  public tooltip: Object;
  public title: string;



  public chartArea: Object = {
    border: {
      width: 0
    }
  };
    ngOnInit(): void {
      this.title="Sales Per Year"
      this.tooltip = {
        enable: true
    }
      this.marker = {
        dataLabel:{
            visible: true
        }
    };
   
        this.primaryXAxis = {
           
            interval: 1,
            
            valueType: "Category"
        };
        this.primaryYAxis = {
            title: "Sales",
            
            labelFormat: "{value}B"
        };
    this.data = [
    { x: "2014", y: 111.1 },
    { x: "2015", y: 127.3 },
    { x: "2016", y: 143.4 },
    { x: "2017", y: 159.9 }
  ];
  this.data1 = [
    { x: "2014", y: 76.9 },
    { x: "2015", y: 99.5 },
    { x: "2016", y: 121.7 },
    { x: "2017", y: 142.5 }
  ];
  this.data2 = [
    { x: "2014", y: 66.1 },
    { x: "2015", y: 79.3 },
    { x: "2016", y: 91.3 },
    { x: "2017", y: 102.4 }
  ];
  this.data3 = [
    { x: "2014", y: 34.1 },
    { x: "2015", y: 38.2 },
    { x: "2016", y: 44.0 },
    { x: "2017", y: 51.6 }
  ];
}
}
