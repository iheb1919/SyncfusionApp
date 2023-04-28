import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-linear',
  templateUrl: './chart-linear.component.html',
  styleUrls: ['./chart-linear.component.css']
})
export class ChartLinearComponent  {
  
    public primaryXAxis: Object;
    public chartData: Object[];
    public chartData2: Object[];
    public primaryYAxis: Object;
    public legendSettings: Object;
    public tooltip: Object;
    public title: string;
    public marker: Object;
    constructor() {
        // Tooltip for chart
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
        this.primaryXAxis = {
          title:'month',
            valueType: 'Category'
        };
        this.primaryYAxis = {
          title:'sales',
            labelFormat: '${value}K'
        };
        this.marker = {
            dataLabel:{
                visible: true
            }
        };
        this.legendSettings = {
            visible: true
        };
        this.title = 'Sales Analysis';
    }
}
