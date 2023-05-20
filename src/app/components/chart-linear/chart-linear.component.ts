import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { Chart } from '@syncfusion/ej2-angular-charts';
@Component({
  selector: 'app-chart-linear',
  templateUrl: './chart-linear.component.html',
  styleUrls: ['./chart-linear.component.css']
})
export class ChartLinearComponent     {
  
    @Input() type='Line'
    @Input() height : string = "100%";
    @Input() primaryXAxis : object = {
           
        valueType: 'Category',
        majorTickLines:{width: 0,},
        majorGridLines:{width: 0,},
        lineStyle: { width: 0,  },
        label:'none'
    };

    @Input() primaryYAxis : object = {
        
        majorGridLines:{width: 0,},
        majorTickLines:{width: 0,},
        lineStyle: { width: 0,  },
        labelStyle: {
            
            border:"1px solid red"
            
           }
    };
    public chartData: Object[];
    public chartData2: Object[];
    public legendSettings: Object;
    public tooltip: Object;
    public title: string;
    public marker: Object;
    public border:Object;
    public palette : string []
    public chartArea: Object = {
        border: {
          width: 0
        }
      };
      
    constructor() {
        
        
        // Tooltip for chart
        this.palette = ["rgba(109, 205, 253, 0.565)", "#F6B53F", "#6FAAB0", "#C4C24A"];
        this.border = { width: 2, color: 'blue'};
        this.tooltip = {
            enable: true
        }
        this.chartData2 = [
          { month: 'Jan', sales:75 }, { month: 'Feb', sales: 28 },
          { month: 'Mar', sales: 60 }, { month: 'Apr', sales: 32 },
          { month: 'May', sales: 33 }, { month: 'Jun', sales: 32 },
          { month: 'Jul', sales: 30 }, { month: 'Aug', sales: 55 },
          { month: 'Sep', sales: 6 }, { month: 'Oct', sales: 30 },
          { month: 'Nov', sales: 26 }, { month: 'Dec', sales: 32 }
      ];
        this.chartData = [
            { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 27 },
            { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
        ];
        

        this.marker = {
            dataLabel:{
                visible: false
            }
        };
        this.legendSettings = {
            visible: false
        };
        this.title = 'Sales Analysis';
    }

    /* height = '450px' */

    
}
