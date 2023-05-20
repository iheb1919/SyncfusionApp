import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GridComponent, PageSettingsModel,RowSelectEventArgs  } from '@syncfusion/ej2-angular-grids';
import { orderDetails } from 'src/app/data';
import { DataTransferService } from 'src/app/services/data-transfer.service';
@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.css']
})

export class TableGridComponent {
  @ViewChild('grid')
  public grid: GridComponent;
  public data  
  public pageSettings:PageSettingsModel = {pageSize:5}
constructor(private route:Router ,private DataTransfer: DataTransferService){
  this.data  =orderDetails
}

rowSelected(args:any) {
  console.log(args.data)
  this.DataTransfer.setData(args.data)
  this.route.navigate(['/col'])
  
}
}





 