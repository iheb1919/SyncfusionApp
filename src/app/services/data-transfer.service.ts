import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  Shared_datas :any={}
  constructor() { }
  setData(data:any){
    this.Shared_datas=data;
  }
  getDAta(){
    return this.Shared_datas
  }

}
