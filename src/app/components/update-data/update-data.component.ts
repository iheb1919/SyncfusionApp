import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from 'src/app/services/data-transfer.service';
@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent {
  datas:any=[]
constructor(private route : Router ,private DataTransfer:DataTransferService){
  
  if(Object.keys(DataTransfer.getDAta()).length === 0)
    this.route.navigate(['/home']) 
  else  this.datas=DataTransfer.getDAta()
  console.log(typeof this.datas.OrderID)
 
}
}
